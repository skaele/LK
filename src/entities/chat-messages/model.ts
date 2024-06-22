import { Chat, LastMessage, chatModel, chatsModel } from '@entities/chats'
import { userModel } from '@entities/user'
import { getFullUserName } from '@entities/user/lib/get-full-user-name'
import { cache, concurrency, createMutation, createQuery, onAbort, sessionStorageCache, update } from '@farfetched/core'
import { User } from '@shared/api/model'
import { formatISO } from 'date-fns'
import { attach, combine, createEvent, createStore, sample } from 'effector'
import { addMessage, getChatMessages } from './api'
import { AddChatMessage, ChatMessage, LocalChatMessage } from './type'
import sanitize from 'sanitize-html'
import { interval } from 'patronum'
import { pageVisibility } from '@shared/models/window-focus'

const resendErrorMessage = createEvent<Pick<LocalChatMessage, 'msg_id'>>()

const getChatMessagesFx = attach({
    source: chatModel.stores.selectedChatId,
    effect: async (chatId) => {
        if (!chatId) throw new Error('Чат не выбран')

        const abortController = new AbortController()

        onAbort(() => {
            abortController.abort()
        })

        let attempts = 0
        // По этому эндпоинту часто срабатывавает Anti-DDoS защита, API отадает ответ, но обрезает его
        while (attempts < 3) {
            const { data } = await getChatMessages(chatId, abortController.signal)
            const isDataCorrupted = !data?.map
            if (data && !isDataCorrupted) return data.reverse()

            attempts++
        }

        throw new Error('Не удалось загрузить сообщения')
    },
})

const addChatMessageFx = attach({
    source: [chatModel.stores.selectedChatId, userModel.stores.user],
    effect: async ([chatId, user], body: AddChatMessage) => {
        if (!chatId) throw new Error('Чат не выбран')

        const currentUser = user.currentUser
        const data = await addMessage({ ...body, chatId })

        return { ...data, currentUser }
    },
})

const addMessageMutation = createMutation({
    handler: addChatMessageFx,
})

const chatMessagesQuery = createQuery({
    handler: getChatMessagesFx,
    enabled: pageVisibility.$visible,
})

concurrency(chatMessagesQuery, { strategy: 'TAKE_LATEST' })
cache(chatMessagesQuery, {
    adapter: sessionStorageCache({ maxEntries: 10, maxAge: '60sec' }),
    purge: userModel.events.logout,
})

sample({ clock: chatModel.stores.selectedChatId, target: chatMessagesQuery.reset })

const { tick } = interval({
    timeout: 60000,
    start: chatModel.events.set,
    stop: userModel.events.logout,
})

sample({ clock: tick, target: chatMessagesQuery.start })

const $inProgressChatsMessages = createStore<Record<string, LocalChatMessage[]>>({})
const $errorChatsMessages = createStore<Record<string, LocalChatMessage[]>>({})

const $inProgressChatMessages = combine(
    $inProgressChatsMessages,
    chatModel.stores.selectedChatId,
    (messagesRecord, selectedChatId) => {
        return messagesRecord[selectedChatId ?? ''] ?? []
    },
)

const $errorChatMessages = combine(
    $errorChatsMessages,
    chatModel.stores.selectedChatId,
    (messagesRecord, selectedChatId) => {
        return messagesRecord[selectedChatId ?? ''] ?? []
    },
)

const $isFirstFetchedChats = createStore<Record<string, boolean>>({}).on(getChatMessagesFx.done, (prev, { params }) => {
    const chat = params as unknown as Chat
    if (!prev[chat.id]) return { ...prev, [chat.id]: true }

    return prev
})

const $isFirstFetched = combine($isFirstFetchedChats, chatModel.stores.selectedChatId, (chats, selectedChatId) => {
    return chats[selectedChatId ?? ''] ?? false
})

sample({ clock: userModel.stores.user, target: $isFirstFetchedChats.reinit })

sample({
    clock: addMessageMutation.started,
    source: { inProgressChatsMessages: $inProgressChatsMessages, user: userModel.stores.user },
    fn: ({ inProgressChatsMessages, user }, { params }) => {
        return {
            ...inProgressChatsMessages,
            [params.chatId]: [
                ...(inProgressChatsMessages[params.chatId] ?? []),
                {
                    datetime: formatISO(Date.now()),
                    html: params.text,
                    readed: false,
                    readed_opponent: false,
                    files: params.files ?? [],
                    author_id: user.currentUser?.id.toString() ?? '',
                    author_name: getFullUserName(user.currentUser),
                    msg_id: params.localId,
                },
            ],
        }
    },
    target: $inProgressChatsMessages,
})

sample({
    clock: addMessageMutation.finished.finally,
    source: $inProgressChatsMessages,
    fn: (source, { params }) => {
        return { ...source, [params.chatId]: source[params.chatId].filter(({ msg_id }) => msg_id !== params.localId) }
    },
    target: $inProgressChatsMessages,
})

sample({
    clock: addMessageMutation.finished.failure,
    source: { errorChatsMessages: $errorChatsMessages, user: userModel.stores.user },
    fn: ({ errorChatsMessages, user }, { params }) => {
        return {
            ...errorChatsMessages,
            [params.chatId]: [
                ...(errorChatsMessages[params.chatId] ?? []),
                {
                    datetime: formatISO(Date.now()),
                    html: params.text,
                    readed_opponent: false,
                    readed: true,
                    files: params.files ?? [],
                    author_id: user.currentUser?.id.toString() ?? '',
                    author_name: getFullUserName(user.currentUser),
                    msg_id: params.localId,
                },
            ],
        }
    },
    target: $errorChatsMessages,
})

sample({
    clock: resendErrorMessage,
    source: {
        errorChatMessages: $errorChatMessages,
        chatId: chatModel.stores.selectedChatId,
    },
    filter: ({ errorChatMessages }, { msg_id }) => !!errorChatMessages.some(({ msg_id: id }) => id === msg_id),
    fn: ({ errorChatMessages, chatId }, { msg_id }): AddChatMessage => {
        const errorChatMessage = errorChatMessages.find(({ msg_id: id }) => id === msg_id)

        return {
            chatId: chatId!,
            localId: msg_id,
            text: errorChatMessage?.html ?? '',
            files: errorChatMessage?.files ?? [],
        }
    },
    target: addMessageMutation.start,
})

sample({
    clock: resendErrorMessage,
    source: {
        errorChatsMessages: $errorChatsMessages,
        chatId: chatModel.stores.selectedChatId,
    },
    filter: ({ chatId }) => !!chatId,
    fn: ({ chatId, errorChatsMessages }, { msg_id }) => {
        return {
            ...errorChatsMessages,
            [chatId!]: errorChatsMessages[chatId!].filter(({ msg_id: id }) => id !== msg_id),
        }
    },
    target: $errorChatsMessages,
})

update(chatMessagesQuery, {
    on: addMessageMutation,
    by: {
        success: ({ query, mutation }) => {
            if (query && 'result' in query) {
                const { currentUser } = mutation.result as { currentUser: User }

                const newMessage: ChatMessage = {
                    datetime: formatISO(Date.now()),
                    html: mutation.params.text,
                    readed: true,
                    readed_opponent: false,
                    files: mutation.params.files?.map((file) => ({ name: file.name, url: '' })) ?? [],
                    author_id: currentUser?.id.toString() ?? '',
                    author_name: getFullUserName(currentUser),
                    msg_id: mutation.params.localId,
                }

                return {
                    result: [...query.result, newMessage],
                    refetch: true,
                    error: null,
                }
            }

            return {
                result: null,
                refetch: true,
                error: null,
            }
        },
    },
})

update(chatsModel.queries.chats, {
    on: addMessageMutation,
    by: {
        success: ({ query, mutation }) => {
            if (query && 'result' in query) {
                const newMessage: LastMessage = {
                    datetime: formatISO(Date.now()),
                    html: mutation.params.text,
                    readed: true,
                    readed_opponent: true,
                    files: mutation.params.files?.map((file) => ({ name: file.name, url: '' })) ?? [],
                    from: 'you',
                    text: sanitize(mutation.params.text, { allowedTags: [] }),
                }

                return {
                    result: query.result.map((chat) =>
                        chat.id === mutation.params.chatId ? { ...chat, lastmessage: newMessage } : chat,
                    ),
                    refetch: true,
                    error: null,
                }
            }

            return {
                result: null,
                refetch: true,
                error: null,
            }
        },
    },
})

sample({
    clock: chatModel.stores.selectedChat,
    filter: Boolean,
    target: chatMessagesQuery.refresh,
})

export const queries = {
    chatMessages: chatMessagesQuery,
}

export const mutations = {
    addMessage: addMessageMutation,
}

export const stores = {
    errorChatMessages: $errorChatMessages,
    inProgressChatMessages: $inProgressChatMessages,
    isFirstFetched: $isFirstFetched,
    isFirstFetchedChats: $isFirstFetchedChats,
}

export const events = {
    resendErrorMessage,
}

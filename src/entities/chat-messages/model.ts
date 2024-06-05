import { chatModel } from '@entities/chats'
import { userModel } from '@entities/user'
import { createMutation, createQuery, update } from '@farfetched/core'
import { User } from '@shared/api/model'
import { formatISO } from 'date-fns'
import { attach, combine, createStore, sample } from 'effector'
import { addChatMessage, getChatMessages } from './api'
import { AddChatMessage, ChatMessage } from './type'
import { getFullUserName } from '@entities/user/lib/get-full-user-name'

const getChatMessagesFx = attach({
    source: chatModel.stores.selectedChatId,
    effect: async (chatId) => {
        if (!chatId) throw new Error('Чат не выбран')

        const { data } = await getChatMessages(chatId)

        return data.reverse()
    },
})

const addChatMessageFx = attach({
    source: [chatModel.stores.selectedChatId, userModel.stores.user],
    effect: async ([chatId, user], body: AddChatMessage) => {
        if (!chatId) throw new Error('Чат не выбран')

        const currentUser = user.currentUser

        const { data } = await addChatMessage({ ...body, chatId })

        return { ...data, currentUser }
    },
})

const addMessageMutation = createMutation({
    handler: addChatMessageFx,
})

const chatMessagesQuery = createQuery({
    handler: getChatMessagesFx,
})

const $inProgressChatsMessages = createStore<Record<string, ChatMessage[]>>({})
const $errorChatsMessages = createStore<Record<string, ChatMessage[]>>({})

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
                    readed: false,
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

update(chatMessagesQuery, {
    on: addMessageMutation,
    by: {
        success: ({ query, mutation }) => {
            if (query && 'result' in query) {
                const { currentUser } = mutation.result as { currentUser: User }

                const newMessage: ChatMessage = {
                    datetime: formatISO(Date.now()),
                    html: mutation.params.text,
                    readed: false,
                    files: mutation.params.files ?? [],
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
}

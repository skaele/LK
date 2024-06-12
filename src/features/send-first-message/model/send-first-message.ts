import { addMessage } from '@entities/chat-messages/api'
import { Chat, chatsModel } from '@entities/chats'
import { createMutation, update } from '@farfetched/core'
import { formatISO } from 'date-fns'
import { createStore, sample } from 'effector'
import sanitizeHtml from 'sanitize-html'

const sendFirstMessageMutation = createMutation({
    handler: addMessage,
})

const $lastAddedMessageChat = createStore<{ id: string } | null>(null)

sample({
    clock: sendFirstMessageMutation.finished.finally,
    fn: (data) => {
        if ('result' in data && data.status === 'done') {
            return data.result
        }

        return null
    },
    target: $lastAddedMessageChat,
})

sample({
    source: sendFirstMessageMutation.reset,
    target: $lastAddedMessageChat.reinit,
})

update(chatsModel.queries.chats, {
    on: sendFirstMessageMutation,
    by: {
        success: ({ query, mutation }) => {
            if (query && 'result' in query) {
                const { id, result } = mutation.result

                if (result === 'ok') {
                    const newChat: Chat = {
                        id,
                        lastmessage: {
                            datetime: formatISO(Date.now()),
                            html: mutation.params.text,
                            readed: true,
                            opponent_readed: false,
                            files: mutation.params.files ?? [],
                            from: 'you',
                            // clear from tags
                            text: sanitizeHtml(mutation.params.text, {
                                allowedTags: [],
                            }),
                        },
                        subject: 'group' in mutation.params ? `Группе ${mutation.params.group}` : '',
                        opponent:
                            'userId' in mutation.params
                                ? {
                                      id: mutation.params.userId,
                                      name: mutation.params.fio,
                                      avatar: mutation.params.avatar,
                                      status: mutation.params.isEmployee ? 'сотрудник' : 'студент',
                                      data: mutation.params.isEmployee ? 'сотрудник' : 'студент',
                                  }
                                : undefined,
                    }

                    return {
                        result: [newChat, ...query.result],
                        refetch: true,
                        error: null,
                    }
                }

                return {
                    result: query.result,
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

export const mutations = {
    sendFirstMessage: sendFirstMessageMutation,
}

export const stores = {
    lastAddedMessageChat: $lastAddedMessageChat,
}

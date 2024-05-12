import { messageApi } from '@api'
import { createMutation, createQuery, update } from '@farfetched/core'
import { attach, createEvent, createStore, sample } from 'effector'
import { useUnit } from 'effector-react'

const setChatId = createEvent<string>()
const addMessage = createEvent<{ message: string }>()

const $selectedChatId = createStore<string | null>(null).on(setChatId, (_, chatId) => chatId)

const getMessagesFx = attach({
    source: $selectedChatId,
    effect: (chatId) => messageApi.get(chatId ?? ''),
})

const addMessageFx = attach({
    source: $selectedChatId,
    effect: (chatId, { message }: { message: string }) => messageApi.add({ message, chatId: chatId ?? '' }),
})

const messagesQuery = createQuery({
    handler: getMessagesFx,
})

sample({
    clock: setChatId,
    filter: Boolean,
    target: messagesQuery.start,
})

const addMassageMutation = createMutation({
    handler: addMessageFx,
})

sample({
    clock: addMessage,
    target: addMassageMutation.start,
})

update(messagesQuery, {
    on: addMassageMutation,
    by: {
        success: ({ mutation, query }) => ({
            result: [...query.data, mutation.result],
        }),
    },
})

export const events = {
    addMessage,
    setChatId,
}

export const stores = {
    selectedChatId: $selectedChatId,
    messages: messagesQuery.$data,
}

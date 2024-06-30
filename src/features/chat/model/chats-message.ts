import { chatMessagesModel } from '@entities/chat-messages'
import { chatModel } from '@entities/chats'
import { combine, createEvent, createStore, sample } from 'effector'
// TODO: add sync to local storage

const changed = createEvent<{ text: string; files: File[] }>()
const sended = createEvent()

const $chatsMessage = createStore<Record<string, { text: string; files: File[] }>>({})

sample({
    clock: changed,
    source: { selectedChatId: chatModel.stores.selectedChatId, chatsMessage: $chatsMessage },
    filter: ({ selectedChatId }) => Boolean(selectedChatId),
    fn: ({ chatsMessage, selectedChatId }, newChatMessage) => {
        return { ...chatsMessage, [selectedChatId!]: newChatMessage }
    },
    target: $chatsMessage,
})

const $currentMessage = combine($chatsMessage, chatModel.stores.selectedChatId, (chats, selectedChatId) => {
    if (!selectedChatId) return { text: '', files: [] }

    return chats[selectedChatId] ?? { text: '', files: [] }
})

sample({
    clock: sended,
    source: { message: $currentMessage, chatId: chatModel.stores.selectedChatId },
    fn: ({ chatId, message }) => {
        return {
            chatId: chatId!,
            ...message,
            // random
            localId: new Date().getTime().toString(),
        }
    },
    target: chatMessagesModel.mutations.addMessage.start,
})

sample({
    clock: chatMessagesModel.mutations.addMessage.started,
    source: { selectedChatId: chatModel.stores.selectedChatId, chatsMessage: $chatsMessage },
    filter: ({ selectedChatId }) => Boolean(selectedChatId),
    fn: ({ chatsMessage, selectedChatId }) => {
        return { ...chatsMessage, [selectedChatId!]: { text: '', files: [] } }
    },
    target: $chatsMessage,
})

export const stores = {
    currentMessage: $currentMessage,
}

export const events = {
    changed,
    sended,
}

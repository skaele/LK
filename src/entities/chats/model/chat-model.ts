import { combine, createEvent, createStore } from 'effector'
import { chatsModel } from '.'

const set = createEvent<string>()
const reset = createEvent()

const $selectedChatId = createStore<string | null>(null)
    .on(set, (_, chatId) => chatId)
    .reset(reset)

const $selectedChat = combine($selectedChatId, chatsModel.queries.chat.$data).map(
    ([selectedChatId, chats]) => chats?.find((chat) => chat.id === selectedChatId) ?? null,
)

export const stores = {
    selectedChat: $selectedChat,
    selectedChatId: $selectedChatId,
}

export const events = {
    set,
    reset,
}

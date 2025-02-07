import { combine } from 'effector'

import { chatMessagesModel } from '@entities/chat-messages'

import { RawChatMessage } from '../type'

const $allChatMessages = combine(
    chatMessagesModel.queries.chatMessages.$data,
    chatMessagesModel.stores.errorChatMessages,
    chatMessagesModel.stores.inProgressChatMessages,
    (messages, errorChatMessages, inProgressChatMessages) => {
        return [
            ...(messages ?? []),
            ...errorChatMessages.map((m) => ({ ...m, status: 'error' })),
            ...inProgressChatMessages.map((m) => ({ ...m, status: 'inProgress' })),
        ] as RawChatMessage[]
    },
)

export const stores = {
    messages: $allChatMessages,
}

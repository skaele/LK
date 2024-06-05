import { ChatMessage } from '@entities/chat-messages/type'

export type RawChatMessage = ChatMessage & { status: 'error' | 'inProgress' }

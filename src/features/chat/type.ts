import { ChatMessage, LocalChatMessage } from '@entities/chat-messages/type'

export type RawChatMessage = (ChatMessage | LocalChatMessage) & { status: 'error' | 'inProgress' }

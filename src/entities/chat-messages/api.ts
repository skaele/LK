import { $api } from '@shared/api/config'
import getToken from '@shared/lib/token'
import { AddChatMessage, ChatMessage } from './type'

export const getChatMessages = async (chatId: string) => {
    return $api.get<ChatMessage[]>(`?getMessagesInDialogue=${chatId}&token=${getToken()}`)
}

export const addChatMessage = async ({ chatId, ...body }: AddChatMessage) => {
    const formData = new FormData()

    formData.set('text', body.text)
    if (body?.files) formData.set('files', body.files as unknown as Blob)

    return $api.post<{
        result: string
    }>(`?newMessage=1&to_dialogue=${chatId}&token=${getToken()}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

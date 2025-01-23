import { $api } from '@shared/api/config'
import getToken from '@shared/lib/token'

import { AddChatMessage, AddGroupMessage, AddUserMessage, ChatMessage } from './type'

export const getChatMessages = async (chatId: string, signal: AbortSignal) => {
    return $api.get<ChatMessage[]>(`?getMessagesInDialogue=${chatId}&token=${getToken()}`, { signal })
}

export const addMessage = async ({ ...body }: AddChatMessage | AddGroupMessage | AddUserMessage) => {
    const formData = new FormData()

    formData.set('text', body.text)
    if (body?.files?.length) {
        body.files.forEach((file, index) => formData.append(`files[${index}]`, file))
    }

    let variant = ''

    if ('chatId' in body) {
        variant = `to_dialogue=${body.chatId}`
    }

    if ('userId' in body) {
        variant = `to_id=${body.userId}`
    }

    if ('group' in body) {
        variant = `to_group=${body.group}`
    }

    const { data } = await $api.post<{
        result: string
        id: string
    }>(`?newMessage=1&${variant}&token=${getToken()}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

    return data
}

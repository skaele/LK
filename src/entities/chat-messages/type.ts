export type ChatMessage = {
    author_name: string
    author_id: string
    msg_id: string
    html: string
    files: File[]
    datetime: string
    readed: boolean
}

export type AddChatMessage = {
    chatId: string
    text: string
    files?: File[]
    localId: string
}

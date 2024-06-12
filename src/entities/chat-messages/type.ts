export type ChatMessage = {
    author_name: string
    author_id: string
    msg_id: string
    html: string
    files: ChatFile[]
    datetime: string
    readed: boolean
    readed_opponent: boolean
}

export type LocalChatMessage = Omit<ChatMessage, 'files'> & { files: File[] }

export type ChatFile = {
    name: string
    url: string
}

type AddMessage = {
    text: string
    files?: File[]
    localId: string
}

export type AddChatMessage = AddMessage & { chatId: string }

export type AddGroupMessage = AddMessage & { group: string }

export type AddUserMessage = AddMessage & { userId: string; avatar?: string; fio: string; isEmployee?: boolean }

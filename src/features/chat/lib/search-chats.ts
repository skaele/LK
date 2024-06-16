import { Chat } from '@entities/chats'
import normalizeString from '@utils/normalize-string'

type SearchChatsParams = {
    search: string
    chats: Chat[]
}

const searchChats = ({ chats, search }: SearchChatsParams) => {
    return chats.filter((chat) =>
        normalizeString(
            chat.opponent?.name + chat.lastmessage.text + chat.lastmessage.datetime + chat.subject,
        ).includes(normalizeString(search)),
    )
}

export default searchChats

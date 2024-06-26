import { Chat } from '@entities/chats'
import { User } from '@shared/api/model'
import localizeDate from '@shared/lib/dates/localize-date'
import { RawChatMessage } from '../type'

type PrepareMessagesParams = {
    messages: RawChatMessage[]
    chat: Chat
    currentUser: User
}

export const prepareMessages = ({ chat, currentUser, messages }: PrepareMessagesParams) => {
    const result = {} as { [key: number]: { avatar?: string; messages: RawChatMessage[]; date: string | null } }
    let index = 0
    let lastDate = ''

    messages.forEach((message, i, arr) => {
        if (
            arr[i - 1]?.author_name !== message.author_name ||
            localizeDate(arr[i - 1].datetime) !== localizeDate(message.datetime) ||
            !arr[i - 1]
        ) {
            index++
        }

        if (result[index]) result[index].messages.push(message)
        else {
            result[index] = {
                messages: [message],
                avatar: chat.opponent?.id !== message.author_id.toString() ? currentUser.avatar : chat.opponent.avatar,
                date: localizeDate(message.datetime) !== lastDate ? localizeDate(message.datetime) : null,
            }

            lastDate = localizeDate(message.datetime)
        }
    })

    return result
}

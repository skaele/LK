import { $api } from '@api/config'
import token from '@utils/token'
import { Message, Messages } from './model'

export const get = (id: string) => {
    return $api.get<Messages>(`?getMessages&token=${token()}&id=${id}`)
}

export const add = (params: { message: string; chatId: string }) => {
    return $api.post<Message>(`?addMessage&token=${token()}`, params)
}

import { $api } from '@shared/api/config'
import { Chat } from './type'
import getToken from '@shared/lib/token'

export const getAllChats = () => {
    return $api.get<Chat[]>(`?getMsgDialogues&token=${getToken()}`)
}

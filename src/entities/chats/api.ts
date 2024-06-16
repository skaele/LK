import { $api } from '@shared/api/config'
import { Chat } from './type'
import getToken from '@shared/lib/token'

export const getAllChats = (signal?: AbortSignal) => {
    return $api.get<Chat[]>(`?getMsgDialogues&token=${getToken()}`, { signal })
}

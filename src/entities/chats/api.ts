import { $api } from '@shared/api/config'
import getToken from '@shared/lib/token'

import { Chat } from './type'

export const getAllChats = (signal?: AbortSignal) => {
    return $api.get<Chat[]>(`?getMsgDialogues&token=${getToken()}`, { signal })
}

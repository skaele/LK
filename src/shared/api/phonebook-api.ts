import token from '@shared/lib/token'

import { $api } from './config'
import { Subdivision } from './model/phonebook'

export const get = () => {
    return $api.get<Subdivision[]>(`?getPhoneBookDivisions&token=${token()}`)
}

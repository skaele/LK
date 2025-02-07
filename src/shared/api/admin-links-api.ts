import token from '@shared/lib/token'

import { $api } from './config'
import { AdminLinks } from './model'

export const get = async () => {
    return (await $api.get<AdminLinks>(`?getAdminLinks&token=${token()}`)).data
}

import { $api } from '@shared/api/config'
import token from '@shared/lib/token'

import { ContactDetails } from './model'

export const get = (data?: string) => {
    return $api.get<ContactDetails>(`?getPhoneBookData=${data}&token=${token()}`)
}

export const post = (args: ContactDetails) => {
    const formData = new FormData()
    formData.set('token', token())
    formData.set('setPhoneBookData', '1')

    for (const [key, value] of Object.entries(args)) {
        formData.set(key, value)
    }

    return $api.post('?setPhoneBookData=1', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

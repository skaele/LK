import { $api } from '@api/config'
import token from '@utils/token'
import { Phonebook } from '@api/model'

export const get = (data?: string) => {
    return $api.get<Phonebook>(`?getPhoneBookData=${data}&token=${token()}`)
}

export const post = (args: Phonebook) => {
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

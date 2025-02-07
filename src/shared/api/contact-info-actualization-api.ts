import { $api } from '@shared/api/config'
import { ContactInfoActualization } from '@shared/api/model'
import token from '@shared/lib/token'

export const get = () => {
    return $api.get<ContactInfoActualization>(`?getContactData&token=${token()}`)
}

export const post = (args: ContactInfoActualization) => {
    const formData = new FormData()
    formData.set('token', token())
    formData.set('saveContactData', '1')

    for (const [key, value] of Object.entries(args)) {
        formData.set(key, value)
    }

    return $api.post('?saveContactData=1', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

import token from '@shared/lib/token'

import { $api } from './config'

export type FamilyContacts = {
    email: string
    phone: string
    m_phone: string
    m_fio: string
    m_job: string
    f_phone: string
    f_fio: string
    f_job: string
    relative: string
    r_phone: string
    r_fio: string
    r_job: string
}

export const saveFamilyContacts = async (contacts: FamilyContacts) => {
    const formData = new FormData()

    formData.set('token', token())

    for (const [key, value] of Object.entries(contacts)) {
        formData.set(key, value)
    }
    const { data } = await $api.post(`?saveFamilyContacts=1&token=${token()}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    })

    if (data.result !== 'ok') throw new Error(data.error_text)
    return data
}

export const getFamilyContacts = async () => {
    return (await $api.get<FamilyContacts>(`?getFamilyContacts&token=${token()}`)).data
}

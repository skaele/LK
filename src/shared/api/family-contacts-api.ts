import { $api } from './config'
import token from '@utils/token'

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

export const saveFamilyContacts = async (data: FamilyContacts) => {
    const formData = new FormData()

    formData.set('token', token())

    for (const [key, value] of Object.entries(data)) {
        formData.set(key, value)
    }
    return (
        await $api.post(`?saveFamilyContacts=1&token=${token()}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        })
    ).data
}

export const getFamilyContacts = async () => {
    return (await $api.get<FamilyContacts>(`?getFamilyContacts&token=${token()}`)).data
}

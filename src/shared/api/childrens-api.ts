import { Children } from '@entities/children/types'
import token from '@utils/token'

import { $api } from './config'

export const getChildrens = async () => {
    const formData = new FormData()

    formData.set('token', token())

    const { data } = await $api.get<Children[]>(`?getChildren&token=${token()}`)

    return data
}

export const saveChildrens = async (childrens: Children[]) => {
    const formData = new FormData()

    formData.set('token', token())
    formData.set('children', JSON.stringify(childrens))

    const { data } = await $api.post(`?saveChildren=1`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    })

    if (data.result !== 'ok') throw new Error(data.errors)
    return data
}

export const deleteChildren = async ({ id }: { id: string }) => {
    const { data } = await $api.get(`?deleteChildren=${id}&token=${token()}`)

    if (data.result !== 'ok') throw new Error(data.errors)
    return data
}

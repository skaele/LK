import { $api } from '@api/config'
import getToken from '@shared/lib/token'
import axios from 'axios'
import { ADName, User, UserToken } from './model'
import { PhoneSettingsType } from '@entities/settings/lib/get-default-settings'

export type LoginData = { login: string; password: string }

export const getUserToken = ({ login, password }: LoginData) => {
    return $api.post<UserToken>('', `ulogin=${encodeURIComponent(login)}&upassword=${encodeURIComponent(password)}`)
}

export const getUser = (token: string) => {
    return $api.get<{ user: User }>(`?getUser&token=${token}`)
}

export const getADName = (data: ADName) => {
    return $api.get<any>(`?getADName&fio=${data.fio}&pn=${data.pn}`)
}

type ResponseType = {
    result: 'ok' | 'error'
    errors: string
}

export const changeAvatar = async (avatar?: File) => {
    const formData = new FormData()
    formData.set('avatar', avatar ?? '')
    formData.set('token', getToken())

    return $api.post<ResponseType>(`?changeAvatar=1`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export const changePassword = async (oldPassword: string, newPassword: string) => {
    const formData = new FormData()
    formData.set('old_pass', oldPassword)
    formData.set('new_pass', newPassword)

    return $api.post<ResponseType>(`?changeADPass=1&token=${getToken()}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export const changeEmail = async (newEmail: string) => {
    const formData = new FormData()

    formData.set('email', newEmail)
    formData.set('token', getToken())

    return $api.post(`?changeEmail=1`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export const changePhone = async (fields: { [name: string]: string }) => {
    const formData = new FormData()
    Object.entries(fields).forEach(([key, value]) => {
        formData.set(key, value)
    })
    formData.set('token', getToken())
    return $api.post(`?changePhone=1`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export const changeStaffPhone = async (data: PhoneSettingsType) => {
    const formData = new FormData()
    formData.set('token', getToken())
    formData.set('phone', data.phone_staff || '')
    formData.set('allow_mobphone_in', data.allow_mobphone_in?.toString() ?? 'false')
    formData.set('allow_mobphone_out', data.allow_mobphone_out?.toString() ?? 'false')
    return $api.post(`?changeStaffPhone=1`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export const refreshAccessToken = async (refreshToken: string) => {
    const { data } = await axios.post<{ accessToken: string; refreshToken: string }>(
        'https://api.mospolytech.ru/frontendtokenservice/Token/Refresh',
        { refreshToken },
    )

    return data
}

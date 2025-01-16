import { $api, $authApi } from '@api/config'
import getToken from '@shared/lib/token'
import axios from 'axios'
import { ADName, User, UserToken } from './model'
import { PhoneSettingsType } from '@entities/settings/lib/get-default-settings'
import { LocationSettingsType } from '@pages/settings/types'

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

export const changePhone = async (newPhone: string) => {
    const formData = new FormData()

    formData.set('phone', newPhone)
    formData.set('token', getToken())

    return $api.post(`?changePhone=1`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
}

export const changeStaffPhoneApi = async (data: PhoneSettingsType) => {
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

export const changeStaffAddressApi = async (req: LocationSettingsType) => {
    const formData = new FormData()
    formData.set('token', getToken())
    formData.set('guid', req.guid_staff)
    formData.set('room', req.room)
    formData.set('address', req.address)
    const { data } = await $api.post(`?changeStaffAddress=1`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    if (data.result !== 'ok') throw new Error()
}

export const refreshAccessToken = async (refreshToken: string) => {
    const { data } = await axios.post<{ access_token: string; refresh_token: string }>(
        'https://api.mospolytech.ru/auth/token/reissue',
        { refresh_token: refreshToken },
    )

    return {
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
    }
}

export const authServiceHealthCheck = async () => {
    return $authApi.get('/health')
}

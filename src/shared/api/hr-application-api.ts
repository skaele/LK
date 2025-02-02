import { AxiosResponse } from 'axios'

import { $hrApi } from '@shared/api/config'
import token from '@shared/lib/token'

import { Application, UserApplication } from './model'

export interface ApplicationCreating {
    [key: string]: any
}

export const get = (): Promise<AxiosResponse<Application[]>> => {
    return $hrApi.get(`?getAppRequests&token=${token()}`)
}

export const getAppData = (): Promise<AxiosResponse<UserApplication>> => {
    return $hrApi.get(`?getAppData&token=${token()}`)
}

export const post = (data: ApplicationCreating) => $hrApi.post(`Dismissal.Post`, data)
// export const dismissalPost = (data: ApplicationCreating) => $hrApi.post(`Dismissal.Post`, data)
// export const addWeekend = (data: ApplicationCreating) => $hrApi.post(`Weekend.AddWeekend`, data)

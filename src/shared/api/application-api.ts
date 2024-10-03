import { $api } from '@api/config'
import { ApplicationCreating } from '@entities/applications/model'
import { getJwtToken, parseJwt } from '@entities/user/lib/jwt-token'
import token from '@utils/token'
import { AxiosResponse } from 'axios'
import { Application, UserApplication } from './model'
import { $1CCacheApi, $hrApi } from './config/personnel-orders-config'

export const get = (): Promise<AxiosResponse<Application[]>> => {
    return $api.get(`?getAppRequests&token=${token()}`)
}

export const getAppData = (): Promise<AxiosResponse<UserApplication>> => {
    return $api.get(`?getAppData&token=${token()}`)
}

export const getWorkerData = async (): Promise<AxiosResponse> => {
    //907afd9b-d9c5-11e7-940a-b4b52f5f5349

    const response = await $hrApi.get(
        `/Dismissal.GetAllHistory?employeeGuid=${parseJwt(getJwtToken() ?? '').IndividualGuid}`,
    )

    return response
}

export const postWorkerStatuses = (): Promise<AxiosResponse> => {
    //907afd9b-d9c5-11e7-940a-b4b52f5f5349
    return $hrApi.post('Dismissal.AllHistory')
}

export const getDivisions = async () => {
    const { data } = await $hrApi.get(`/AnotherWorkPosition.GetDivisions`)

    return data.divisions
}

export const getKEDO = async () => {
    const { data } = await $1CCacheApi.get<{ isKedoAgreed: boolean }>(`/kedo-agreement`)
    return data?.isKedoAgreed
}

export const post = async (data: ApplicationCreating) => {
    const { formId, args } = data
    const formData = new FormData()

    formData.set('token', token())
    formData.set('saveAppData', formId)

    for (const [key, value] of Object.entries(args)) {
        formData.set(key, value)
    }

    const { data: resultRequest } = await $api.post<{ result: string; error_text: string; request_code: string }>(
        `?saveAppData=${formId}`,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        },
    )
    return resultRequest
}

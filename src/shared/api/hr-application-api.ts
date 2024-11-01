import { ApplicationCreating } from '@entities/hr-applications/model'
import token from '@utils/token'
import { AxiosResponse } from 'axios'
import { Application, UserApplication } from './model'
import { $holidayWorkApi, $hrApi } from './config/personnel-orders-config'
import { Employee, HolidayWork } from '@pages/hr-applications/pages/holiday-work/types'
import { $allowancesApi } from './config/allowances-config'
import { JobRoles, Subordinate } from '@pages/hr-applications/types'

type HolidayWorkRequest = {
    initiatorGuid: string
    employees: Employee[]
}

export const get = (): Promise<AxiosResponse<Application[]>> => {
    return $hrApi.get(`?getAppRequests&token=${token()}`)
}

export const getAppData = (): Promise<AxiosResponse<UserApplication>> => {
    return $hrApi.get(`?getAppData&token=${token()}`)
}

export const post = (data: ApplicationCreating) => $hrApi.post(`Dismissal.Post`, data)

export const createHolidayWorkApplication = async (allowance: HolidayWorkRequest) => {
    await $holidayWorkApi.post(`/employees`, allowance)
}

export const getHolidayWorkClaims = async () => {
    const { data } = await $holidayWorkApi.get<HolidayWork[]>(`/claims`)

    return data
}

export const getSupervisorRoles = async () => {
    const { data } = await $allowancesApi.get<JobRoles>(`/roles`)
    return data
}

export const getSupervisorSubordinates = async (userId: string) => {
    const { data } = await $allowancesApi.get<Subordinate[]>(`/initiators/${userId}/employees`)
    return data
}

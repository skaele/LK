import {
    Employee,
    HandbookItem,
    HandbookType,
    Role,
    Subordnate,
    AllowanceEmployee,
    AllowanceNotification,
    AllowanceFiles,
    ApprovalStatus,
} from '@entities/allowances/types'
import { $allowancesApi } from './config/allowances-config'
import { AllAllowances } from '@entities/allowances/model'
import { PersonalAllowance } from './model/notification'

type AllowanceRequest = {
    initiatorId: string
    sourceOfFundingId: string | null
    paymentIdentifierId: string
    commentary: string
    allowanceEmployees: Employee[]
    attachedFileIds: string[]
}

type ApplicationResult = { applicationId: string; result: string }

export type ConfirmRequest = {
    personalId: string | null
    allowanceId: string
    isConfirmed: boolean
}
export type JobRoles = { employeeId: string; division: string; roles: Role[] }[]

export const getAllowances = async (employeeId: string) => {
    try {
        const { data } = await $allowancesApi
            .post<AllAllowances>('/Allowance/GetAllAllowances', { employeeId })
            .catch((e) => {
                throw new Error(e?.response?.data || e.message)
            })
        return data
    } catch (error) {
        throw new Error(error as string)
    }
}

export const createAllowance = async (allowance: AllowanceRequest) => {
    const { data } = await $allowancesApi.post<ApplicationResult>('/Allowance/CreateAllowance', allowance)
    return data
}

export const getSubordinates = async (initiatorEmployeeId: string) => {
    const { data } = await $allowancesApi.post<Subordnate[]>('/Allowance/GetAllSubordinateEmployeesOfInitiator', {
        initiatorEmployeeId,
    })
    return data
}

export const inspectAllowance = async ({
    allowanceId,
    role,
    userId,
}: {
    role: Role
    allowanceId: string
    userId: string
}) => {
    const { data } = await $allowancesApi.post<{ files: AllowanceFiles; employees: AllowanceEmployee[] }>(
        `/Allowance/GetEmployeesInAllowanceBy${role}`,
        {
            allowanceId,
            [`${role.toLowerCase()}EmployeeId`]: userId,
        },
    )
    return data
}

export const approveAllowance = async (request: {
    allowanceId: string
    approverEmployeeId: string
    employeeId: string
    approvalStatus: ApprovalStatus
}) => {
    const { data } = await $allowancesApi.post<ApplicationResult>('/Allowance/SetVerdictToAllowanceEmployee', request)
    return data
}

export const getRoles = async (): Promise<JobRoles> => {
    const { data } = await $allowancesApi.get<JobRoles>('/Allowance/GetRolesOfPersonal')
    return data
}

export const getHandbook = async (handbookName: HandbookType) => {
    const { data } = await $allowancesApi.post<HandbookItem[]>('/Handbook/GetHandbook', { handbookName })
    return data
}

export const uploadFile = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    const { data } = await $allowancesApi.post<{ fileId: string }>('/File/UploadFile', formData)
    return data
}

export const removeFile = async (fileId: string) => {
    const { data } = await $allowancesApi.post<ApplicationResult>('/File/DeleteFile', { fileId })
    return data
}

// #region notifications
export const getAllowancesNotifications = async () => {
    const { data } = await $allowancesApi.get<AllowanceNotification[]>('/Allowance/GetNotifications')
    return data
}
export const viewNotification = async (notificationId: string) => {
    const { data } = await $allowancesApi.post('/Allowance/ReadNotification', { notificationId })
    return data
}
export const viewAllNotifications = async () => {
    const { data } = await $allowancesApi.post('/Allowance/ReadAllNotifications')
    return data
}
// #end region

// #region personal allowances
export const getPersonalAllowances = async () => {
    const { data } = await $allowancesApi.get<PersonalAllowance[]>('/Allowance/GetAllowancesToConfirm')
    return data
}
export const confirmPersonalAllowance = async (req: ConfirmRequest) => {
    const { data } = await $allowancesApi.post('/Allowance/ConfirmAllowance', req)
    return data
}
// #end region

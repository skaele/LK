import {
    Employee,
    HandbookItem,
    AllowancesApprovalStatus,
    HandbookType,
    Role,
    Subordnate,
} from '@entities/allowances/types'
import { $allowancesApi } from '../config/allowances-config'
import { AllAllowances } from '@entities/allowances/model'

type AllowanceRequest = {
    initiatorId: string
    fundingSourceId: string
    activityAreaId: string
    allowanceTypeId: string
    commentary: string
    allowanceEmployees: Employee[]
}

type ApplicationResult = { applicationId: string; result: string }

export type JobRoles = { employeeId: string; division: string; roles: Role[] }[]

export const getAllowances = async (employeeId: string) => {
    try {
        const { data } = await $allowancesApi
            .get<AllAllowances>(`/allowances?` + new URLSearchParams({ employeeId }))
            .catch((e) => {
                throw new Error(e?.response?.data || e.message)
            })
        return data
    } catch (error) {
        throw new Error(error as string)
    }
}

export const createAllowance = async (allowance: AllowanceRequest) => {
    const { data } = await $allowancesApi.post<ApplicationResult>(`/allowances`, allowance)
    return data
}

export const getSubordinates = async (userId: string) => {
    const { data } = await $allowancesApi.get<Subordnate[]>(`initiators/${userId}/employees`)
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
    const { data } = await $allowancesApi.get<ApplicationResult>(
        `allowances/${allowanceId}/${role}s/${userId}/employees`,
    )
    return data
}

export const approveAllowance = async (request: {
    allowanceId: string
    approverEmployeeId: string
    employeeId: string
    approvalStatus: AllowancesApprovalStatus
}) => {
    const { data } = await $allowancesApi.post<ApplicationResult>(`allowances/verdict`, request)
    return data
}

export const getRoles = async (userId: string | null) => {
    const { data } = await $allowancesApi.get<JobRoles>(`employees/${userId}/roles`)
    return data
}

export const getHandbook = async (handbookName: HandbookType) => {
    const { data } = await $allowancesApi.get<HandbookItem[]>('handbooks/' + handbookName)
    return data
}

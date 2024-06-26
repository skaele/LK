import {
    Employee,
    HandbookItem,
    SalarySupplement,
    SalarySupplementsApprovalStatus,
} from '@entities/salary-supplements/types'
import { $salarySupplementsApi } from '../config/salary-supplements-config'

type DocumentType = null

type GetRequestParams = {
    status: string
    fio: string
}

type DownloadParams = {
    documentId: string
    documentType: DocumentType
}

type DownloadResponse = {
    documentId: string
    fileName: string
    fileExtension: string
    documentNumber: number
    documentType: DocumentType
    fileContent: string
}

type SalarySupplementRequest = {
    initiatorId: string
    activityAreaId: string
    fundingSourceId: string
    allowanceTypeId: string
    commentary: string
    employees: Employee[]
}

type ApplicationResult = { applicationId: string; result: string }

export const getAllowances = async (params?: GetRequestParams) => {
    try {
        const { data } = await $salarySupplementsApi
            .get<SalarySupplement[]>(`/allowances/get-handbook/AllowanceType`, {
                params: params,
            })
            .catch((e) => {
                throw new Error(e?.response?.data || e.message)
            })
        return data
    } catch (error) {
        throw new Error(error as string)
    }
}

export const createAllowance = async (allowance: SalarySupplementRequest) => {
    const { data } = await $salarySupplementsApi.post<ApplicationResult>(`/allowances`, allowance)
    return data
}

// TODO: implement on backend
export const initRequest = async () => {
    // const { data } = await $salarySupplementsApi.get(``)
    // return data
    return 'initiator'
}

export const getSupplementHandbook = async (handbookName: string) => {
    const { data } = await $salarySupplementsApi.get<HandbookItem[]>(`allowances/GetHandbook/${handbookName}`)
    return data
}

// TODO: take approverID from token
export const approveAllowance = async (
    allowanceId: string,
    approverId: string,
    employeeId: string,
    approvalStatus: SalarySupplementsApprovalStatus,
) => {
    await $salarySupplementsApi.post<ApplicationResult>(`allowances/SetAllowanceVerdict`, {
        allowanceId,
        approverId,
        employeeId,
        approvalStatus,
    })
}

// TODO: force backend to get rid of this
export const download = async (params: DownloadParams) => {
    const { data } = await $salarySupplementsApi.get<DownloadResponse>(
        `allowances/download/${params.documentId}/${params.documentType}`,
        {
            params: params,
        },
    )
    return data
}

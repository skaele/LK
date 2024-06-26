import { Employee, HandbookItem, Allowance, AllowancesApprovalStatus } from '@entities/allowances/types'
import { $allowancesApi } from '../config/allowances-config'

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

type AllowanceRequest = {
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
        const { data } = await $allowancesApi
            .get<Allowance[]>(`/allowances/get-handbook/AllowanceType`, {
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

export const createAllowance = async (allowance: AllowanceRequest) => {
    const { data } = await $allowancesApi.post<ApplicationResult>(`/allowances`, allowance)
    return data
}

// TODO: implement on backend
export const initRequest = async () => {
    // const { data } = await $allowancesApi.get(``)
    // return data
    return 'initiator'
}

export const getSupplementHandbook = async (handbookName: string) => {
    const { data } = await $allowancesApi.get<HandbookItem[]>(`allowances/GetHandbook/${handbookName}`)
    return data
}

// TODO: take approverID from token
export const approveAllowance = async (
    allowanceId: string,
    approverId: string,
    employeeId: string,
    approvalStatus: AllowancesApprovalStatus,
) => {
    await $allowancesApi.post<ApplicationResult>(`allowances/SetAllowanceVerdict`, {
        allowanceId,
        approverId,
        employeeId,
        approvalStatus,
    })
}

// TODO: force backend to get rid of this
export const download = async (params: DownloadParams) => {
    const { data } = await $allowancesApi.get<DownloadResponse>(
        `allowances/download/${params.documentId}/${params.documentType}`,
        {
            params: params,
        },
    )
    return data
}

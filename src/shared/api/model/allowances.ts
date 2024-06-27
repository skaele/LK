import {
    Employee,
    HandbookItem,
    Allowance,
    AllowancesApprovalStatus,
    HandbookType,
    Role,
} from '@entities/allowances/types'
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
    allowanceEmployees: Employee[]
}

type ApplicationResult = { applicationId: string; result: string }

// TODO: implement on backend
export const initRequest = async () => {
    // const { data } = await $allowancesApi.get(``)
    // return data
    return 'initiator'
}

export const getHandbook = async (handbookName: HandbookType) => {
    const { data } = await $allowancesApi.get<HandbookItem[]>('allowances/get-handbook/' + handbookName)
    return data
}

export const getAllowances = async ({
    role,
    userId,
    params,
}: {
    role: Role
    userId: string
    params?: GetRequestParams
}) => {
    try {
        const { data } = await $allowancesApi
            // TODO: get rid of role, id
            .get<Allowance[]>(`/allowances/${role}/${userId}/get-allowances`, {
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
        `allowances/allowance/${allowanceId}/get-employees/${role}/${userId}`,
    )
    return data
}

export const createAllowance = async (allowance: AllowanceRequest) => {
    const { data } = await $allowancesApi.post<ApplicationResult>(`/allowances/add-allowance`, {
        ...allowance,
        initiatorId: '96d4f97d-8adf-4fd3-ad4d-394eaddebb0f',
        allowanceEmployees: allowance.allowanceEmployees.map((emloyee) => ({
            ...emloyee,
            sum: 100,
            divisionId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        })),
    })
    return data
}

// TODO: take approverID from token
export const approveAllowance = async (
    allowanceId: string,
    approverEmployeeId: string,
    employeeId: string,
    approvalStatus: AllowancesApprovalStatus,
) => {
    await $allowancesApi.post<ApplicationResult>(`allowances/set-verdict`, {
        allowanceId,
        approverEmployeeId,
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

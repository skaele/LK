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
        allowanceEmployees: allowance.allowanceEmployees.map((emloyee) => ({
            ...emloyee,
            sum: Number(emloyee.sum),
            divisionId: '27bb8e1d-bf7a-4f55-882e-838d46f3d60f',
        })),
    })
    return data
}

export const getRole = async (userId: string | null) => {
    // if (userId === '907afd9b-d9c5-11e7-940a-b4b52f5f5349')
    // test purposes
    return ['initiator', 'approver'] as Role[]
    const { data } = await $allowancesApi.get<Role[]>(`allowances/employee/${userId}/get-roles`)
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

import { SalarySupplement, SalarySupplementsApprovalStatus } from '@entities/salary-supplements/types'
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

type EditRequest = Pick<
    SalarySupplement,
    'id' | 'activityArea' | 'fundingSource' | 'supplementType' | 'commentary' | 'employees'
>

type ApplicationResult = { applicationId: string; result: string }

export const approverApi = {
    get: async (params: GetRequestParams) => {
        const { data } = await $salarySupplementsApi.get<SalarySupplement[]>(
            `salarysupplements/approver/applications`,
            {
                params: params,
            },
        )
        return data
    },
    approve: async (
        applicationId: string,
        employeeId: string,
        req: {
            approvalStatus: SalarySupplementsApprovalStatus
        },
    ) => {
        await $salarySupplementsApi.post<ApplicationResult>(
            `salarysupplements/approver/applications/${applicationId}/employees/${employeeId}`,
            req,
        )
    },
}

export const initiatorApi = {
    get: async (params: GetRequestParams) => {
        const { data } = await $salarySupplementsApi.get<SalarySupplement[]>(
            `salarysupplements/initiator/applications`,
            {
                params: params,
            },
        )
        return data
    },
    edit: async (applicationId: string, req: EditRequest) => {
        const { data } = await $salarySupplementsApi.post<ApplicationResult>(
            `salarysupplements/initiator/applications/${applicationId}`,
            req,
        )
        return data
    },
    rework: async (req: Pick<SalarySupplement, 'id'>) => {
        const { data } = await $salarySupplementsApi.get<SalarySupplement>(
            `salarysupplements/initiator/applications/rework/${req.id}`,
        )
        return data
    },
}

export const download = async (params: DownloadParams) => {
    const { data } = await $salarySupplementsApi.get<DownloadResponse>(`salarysupplements/download`, {
        params: params,
    })
    return data
}

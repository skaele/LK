import { AllowancesApprovalResponse, AllowancesApprovalStatus } from '../consts'

export type HandbookItem = {
    id: string
    name: string
}

export type AllowanceNotificationType =
    | 'RecepientDeclinedByZkgu'
    | 'RecepientDeclinedByAppover'
    | 'RecepientSelfDeclined'
    | 'RecepientSelfConfirmed'
    | 'FullyCompleted'
    | 'ToApprove'
    | 'ToConfirm'
    | 'AllowanceOrderCompleted'

export type AllowanceNotification = {
    notificationId: string
    allowanceId: string
    notificationType: AllowanceNotificationType
    message: string
    employeeId: string
}

export type HandbookType = 'PaymentIdentifier' | 'SourceOfFunding'

export type AttachedFile = {
    contentType: string
    extension: string
    id: string
    name: string
    digitalSignature: string
    sizeB: number
}
export type AllowanceFiles = {
    application: AttachedFile[]
    order: AttachedFile[]
    other: AttachedFile[]
}
export type Allowance = {
    id: string
    sourceOfFunding: HandbookItem
    paymentIdentifier: HandbookItem
    commentary: string
    createdAt: string
    status: AllowancesApprovalResponse
    files: AllowanceFiles
}

export type AllowanceEmployee = {
    id: string
    sum: number
    startDate: string
    endDate: string
    divisionName: string
    initials: string
    position: string
    sourceOfFunding?: HandbookItem
    paymentIdentifier?: HandbookItem
    approvalStatus?: AllowancesApprovalStatus
    employeeVerdicts?: {
        approverEmployeeId: string
        approverName: string
        approvalStatus: AllowancesApprovalResponse
        approverOrderNumber: number
    }[]
}

export type Employee = {
    id: string
    sum: number
    startDate: string
    endDate: string
}

export type Subordnate = {
    divisionName: string
    employeeId: string
    employeeName: string
}

export type Role = 'Initiator' | 'Approver'

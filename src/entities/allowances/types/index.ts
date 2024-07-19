export type AllowancesApprovalStatus = 'Unknown' | 'InProgress' | 'Approved' | 'Declined'
export type AllowancesApprovalResponse = 'На рассмотрении' | 'Согласовано' | 'Отклонено'

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
}

export type HandbookType = 'PaymentIdentifier' | 'SourceOfFunding'

export type Allowance = {
    id: string
    sourceOfFunding: HandbookItem
    paymentIdentifier: HandbookItem
    commentary: string
    createdAt: string
    status: AllowancesApprovalResponse
    attachedFileIds: string[]
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

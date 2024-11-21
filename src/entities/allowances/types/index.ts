import { approvalStatus, allowanceStatus, orderStatus } from '../consts'

export type ApprovalStatus = keyof typeof approvalStatus
export type AllowanceStatus = keyof typeof allowanceStatus
export type AllowanceStatusTranslated = (typeof allowanceStatus)[AllowanceStatus]
export type OrderStatus = keyof typeof orderStatus

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
    other: AttachedFile[]
}
export type AllowanceBase = {
    id: string
    sourceOfFunding: HandbookItem
    paymentIdentifier: HandbookItem
    commentary: string
    createdAt: string
    files: AllowanceFiles
}
export type Allowance = AllowanceBase & {
    allowanceStatus: AllowanceStatus
}
export type AllowanceModified = AllowanceBase & {
    allowanceStatus: AllowanceStatusTranslated
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
    approvalStatus?: ApprovalStatus
    employeeVerdicts?: {
        approverEmployeeId: string
        approverPosition: string
        approverName: string
        approvalStatus: ApprovalStatus
        approverOrderNumber: number
    }[]
    selfApprovalStatus: ApprovalStatus
    zkguApprovalStatus: ApprovalStatus
    orderStatus: OrderStatus
    orderTitle?: string
    commentary?: string
}

export type Employee = {
    id: string
    sum: string
    startDate: string
    endDate: string
}

export type Subordnate = {
    employeeId: string
    divisionName: string
    employeeName: string
    position: string
    rate: string
    employmentType: string
}

export type Role = 'Initiator' | 'Approver'

import { approvalStatus, allowanceStatus, selfApprovalStatus, orderStatus } from '../consts'

export type ApprovalStatus = keyof typeof approvalStatus
export type SelfApprovalStatus = keyof typeof selfApprovalStatus
export type AllowanceStatus = keyof typeof allowanceStatus
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
export type Allowance = {
    id: string
    sourceOfFunding: HandbookItem
    paymentIdentifier: HandbookItem
    commentary: string
    createdAt: string
    allowanceStatus: AllowanceStatus
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
    approvalStatus?: ApprovalStatus
    employeeVerdicts?: {
        approverEmployeeId: string
        approverPosition: string
        approverName: string
        approvalStatus: ApprovalStatus
        approverOrderNumber: number
    }[]
    selfApprovalStatus: SelfApprovalStatus
    zkguApprovalStatus: SelfApprovalStatus
    orderStatus: OrderStatus
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

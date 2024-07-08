export type AllowancesApprovalStatus = 'Unknown' | 'InProgress' | 'Approved' | 'Declined'
export type AllowancesApprovalResponse = 'На рассмотрении' | 'Согласовано' | 'Отклонено'

export type HandbookItem = {
    id: string
    name: string
}

export type HandbookType = 'AllowanceType' | 'FundingSource' | 'ActivityArea'

export type Allowance = {
    id: string
    activityArea: HandbookItem
    fundingSource: HandbookItem
    allowanceType: HandbookItem
    commentary: string
    employees: (Employee & { approvalStatus: AllowancesApprovalResponse })[]
}

export type AllowanceEmployee = {
    id: string
    sum: number
    startDate: string
    endDate: string
    divisionName: string
    initials: string
    position: string
    approvalStatus?: AllowancesApprovalStatus
    employeeVerdict?: {
        approverEmployeeId: string
        approverName: string
        approvalStatus: AllowancesApprovalStatus
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

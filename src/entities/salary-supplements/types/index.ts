export type SalarySupplementsApprovalStatus = null

export type HandbookItem = {
    id: string
    name: string
}

export type SalarySupplement = {
    id: string
    activityArea: HandbookItem
    fundingSource: HandbookItem
    allowanceType: HandbookItem
    commentary: string
    employees: (Employee & { approvalStatus: SalarySupplementsApprovalStatus })[]
}

export type Employee = {
    id: string
    initials: string
    division: HandbookItem
    startDate: string
    endDate: string
    sum: number
}

export type Role = 'initiator' | 'approver'

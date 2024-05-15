export type SalarySupplementsApprovalStatus = null

export type SalarySupplement = {
    id: string
    approvers: Approver[]
    activityArea: string
    fundingSource: string
    supplementType: string
    commentary: string
    employees: (Employee & SalarySupplementsApprovalStatus)[]
}

type Employee = {
    id: string
    initials: Initials
    divisionId: string
    divisionName: string
    period: string
    sum: number
}

type Approver = {
    id: string
    initials: Initials
    divisionId: string
    divisionName: string
    higherApproverId: string
}

type Initials = {
    surname: string
    name: string
    patronymic: string
    fullName: string
    shortName: string
}

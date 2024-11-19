import { Sex } from '@shared/models/sex'

export type Subordinate = {
    employeeId: string
    sex: Sex
    divisionName: string
    employeeName: string
    position: string
    rate: string
    employmentType: string
    kedoAgreed: boolean
}

export type JobRoles = { employeeId: string; division: string; roles: SupervisorRole[] }[]

export type SupervisorRole = 'Initiator' | 'Approver'

export type WorkWeeks = {
    employeeGuid: string
    workingSchedule: {
        workingWeek: 'Five' | 'Six'
        isTutor: boolean
        rate: number
    }
}[]

export const workWeekToDays = {
    Five: 5,
    Six: 6,
} as const

export type WorkWeek = (typeof workWeekToDays)[keyof typeof workWeekToDays]

export interface HolidayWork {
    weekendWorkId: string
    initiatorName: string
    initiatorPosition: string
    employeeGuid: string
    weekendWorkDate: string
    hoursToWork: number
    additionalWeekend: string
    isMoneyReward: boolean
    confirmation: string
    confirmedAt: string | null
    orderStatus: string
    signedDate: string
}

export type Employee = {
    employeeGuid: string
    weekendWorkDate: string
    hoursToWork: number
}

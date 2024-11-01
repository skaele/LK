import { WorkWeeks, workWeekToDays } from '../types'

export const getWorkWeekDuration = (workWeeks: WorkWeeks, jobGuid: string) => {
    const workWeek = workWeeks.find((item) => item.employeeGuid === jobGuid)?.workingSchedule.workingWeek
    return workWeek ? workWeekToDays[workWeek] : null
}

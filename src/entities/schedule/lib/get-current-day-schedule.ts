import { ISubject } from '@api/model'
import getDateWithoutTime from '@shared/lib/dates/get-date-without-time'

import { getFullEndDate } from './get-full-end-date'
import { getFullStartDate } from './get-full-start-date'

const getCurrentDaySubjects = (daySubjects: ISubject[] | null, fullWeekDay: Date): ISubject[] =>
    (daySubjects ?? []).filter((subject) => {
        const normalizedFullWeekDay = getDateWithoutTime(fullWeekDay)
        const [startDate, endDate] = subject.dateInterval.split('-').map((part) => part.trim())

        const fullStartDate = getFullStartDate(startDate)
        const fullEndDate = getFullEndDate(endDate, startDate)

        return normalizedFullWeekDay >= fullStartDate && normalizedFullWeekDay <= (fullEndDate ?? fullStartDate)
    })

export default getCurrentDaySubjects

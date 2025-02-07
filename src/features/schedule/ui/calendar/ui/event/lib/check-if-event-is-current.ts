import { DayCalendarEvent } from '@shared/api/model'
import { TimeType, getMinutesFromStringTime } from '@shared/lib/dates/get-minutes-from-string-time'
import { getMinutesFromDate } from '@shared/lib/dates/get-time-from-date'

export const checkIfEventIsCurrent = (event: DayCalendarEvent, isCurrentDay: boolean) => {
    return (
        getMinutesFromStringTime(event.startTime as TimeType) <= getMinutesFromDate(new Date()) &&
        getMinutesFromDate(new Date()) <= getMinutesFromStringTime(event.startTime as TimeType) + event.duration &&
        isCurrentDay
    )
}

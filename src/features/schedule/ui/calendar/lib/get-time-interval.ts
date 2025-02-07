import { DayCalendarEvent, TimeIntervals } from '@shared/api/model'

import { getEndTime } from '../calendars/day/lib/get-end-time'

export const getTimeInterval = (startTime: DayCalendarEvent['startTime'], duration: DayCalendarEvent['duration']) => {
    return startTime
        ? (`${startTime} - ${getEndTime(startTime, duration)}` as TimeIntervals)
        : ('9:00' as TimeIntervals)
}

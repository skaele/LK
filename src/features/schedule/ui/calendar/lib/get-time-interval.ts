<<<<<<<< HEAD:src/features/schedule/ui/calendar/lib/get-time-interval.ts
import { DayCalendarEvent, TimeIntervals } from '@shared/api/model'
========
import { TimeIntervals } from '@shared/api/model'
>>>>>>>> master:src/shared/ui/calendar/lib/get-time-interval.ts

import { getEndTime } from '../calendars/day/lib/get-end-time'
import { DayCalendarEvent } from '../types'

export const getTimeInterval = (startTime: DayCalendarEvent['startTime'], duration: DayCalendarEvent['duration']) => {
    return startTime
        ? (`${startTime} - ${getEndTime(startTime, duration)}` as TimeIntervals)
        : ('9:00' as TimeIntervals)
}

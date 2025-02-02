import { DayCalendarEvent } from '@features/schedule/ui/calendar'

import { TimeType, getMinutesFromStringTime } from '@shared/lib/dates/get-minutes-from-string-time'
import { getMinutesFromDate } from '@shared/lib/dates/get-time-from-date'

const isDayEnded = (events: DayCalendarEvent[] | undefined) => {
    if (events && events[events.length - 1]) {
        const lastEvent = events[events.length - 1]
        return (
            getMinutesFromStringTime(lastEvent.startTime as TimeType) + lastEvent.duration <
            getMinutesFromDate(new Date())
        )
    }
}

export default isDayEnded

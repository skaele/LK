import React from 'react'

import { DayCalendarEvent } from '@features/schedule/ui/calendar/types'
import { CalendarWrapper } from '@features/schedule/ui/calendar/ui/calendar-wrapper'
import Events from '@features/schedule/ui/calendar/ui/event/events'
import { getEventTopPosition } from '@features/schedule/ui/calendar/ui/event/lib/get-event-top-position'
import Times from '@features/schedule/ui/calendar/ui/times'

import { useScrollTo } from '@shared/lib/hooks/use-scroll-to'

type Props = {
    scale: number
    weekday: number
    events: DayCalendarEvent[] | undefined
    interval: [number, number]
    currentDay: number
    shift: number
    onEventClick: (event: DayCalendarEvent) => void
    isCurrentDay?: boolean
}

export const TimesEvents = ({
    interval,
    events,
    scale,
    weekday,
    shift,
    onEventClick,
    currentDay,
    isCurrentDay,
}: Props) => {
    const eventsRef = useScrollTo({
        deps: [events?.length],
        getScrollTopValue: () => getEventTopPosition(events?.[0]?.startTime, shift, scale),
    })

    return (
        <CalendarWrapper className="calendar-wrapper" ref={eventsRef}>
            <Times interval={interval} scale={scale} />
            <Events
                currentDay={currentDay}
                weekDay={weekday}
                isCurrentDay={isCurrentDay}
                events={events ?? []}
                shift={shift}
                currentEvent={null}
                scale={scale}
                onClick={onEventClick}
                interval={interval}
            />
        </CalendarWrapper>
    )
}

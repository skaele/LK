import { isNextEvent } from '@features/schedule/lib/is-next-event'
import { Sleep } from '@shared/images'
import { Error } from '@shared/ui/error'
import React from 'react'
import { CurrentTimeLine } from '../../calendars/day/ui/current-time-line'
import { DayCalendarEvent } from '../../types'
import EventItem from './event-item'
import { checkIfEventIsCurrent } from './lib/check-if-event-is-current'
import { prepareEvents } from './lib/prepare-events'
import { EventsWrapper } from './styles'
import { TIMES } from '../../consts'

type Props = {
    currentDay?: number
    events: DayCalendarEvent[] | null | undefined
    shift: number
    currentEvent: DayCalendarEvent | null
    scale: number
    onClick: (event: DayCalendarEvent) => void
    shortInfo?: boolean
    weekDay: number
    interval: [number, number]
    showTime?: boolean
    isCurrentDay?: boolean
}

const Events = ({
    events,
    shift,
    scale,
    shortInfo,
    weekDay,
    interval,
    showTime,
    onClick,
    currentDay,
    isCurrentDay,
}: Props) => {
    const eventsPrepared = prepareEvents(events)

    const isCurrent = isCurrentDay ?? new Date().getDay() === weekDay
    const isTimelineVisible = currentDay !== undefined ? currentDay + 1 === weekDay : undefined
    const noEvents = !events || events?.length === 0
    const times = TIMES.slice(interval[0], interval[1] + 1)

    return (
        <EventsWrapper scale={scale} timesLen={times.length - 1} d="column" noEvents={noEvents}>
            {isCurrent && (
                <CurrentTimeLine
                    isVisible={isTimelineVisible}
                    showTime={showTime}
                    scale={scale}
                    shift={shift}
                    interval={interval}
                />
            )}
            {noEvents && !shortInfo && (
                <Error text={'В этот день нет пар. Можно поспать'} size={'100px'} image={Sleep} />
            )}
            {Object.keys(eventsPrepared).map((key, i) => {
                return eventsPrepared[key].map((event, index) => {
                    return (
                        <EventItem
                            leftShift={index}
                            quantity={eventsPrepared[key].length}
                            scale={scale}
                            isCurrentEvent={checkIfEventIsCurrent(event, isCurrent)}
                            isNextEvent={isNextEvent(events, event, isCurrent)}
                            {...event}
                            onClick={onClick}
                            shift={shift}
                            key={event.startTime + event.title + i + index}
                            shortInfo={shortInfo}
                        />
                    )
                })
            })}
        </EventsWrapper>
    )
}

export default Events

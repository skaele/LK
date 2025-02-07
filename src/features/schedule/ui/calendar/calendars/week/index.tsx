import React from 'react'

<<<<<<<< HEAD:src/features/schedule/ui/calendar/calendars/week/index.tsx
import { IWeekDayNames, WEEK_DAYS } from '@shared/consts'
========
import { IWeekDayNames, WEEK_DAYS } from '@shared/constants'
>>>>>>>> master:src/shared/ui/calendar/calendars/week/index.tsx

import { useCalendarGeneral } from '../../hooks/use-calendar-general'
import { CalendarWrapper } from '../../ui/calendar-wrapper'
import Events from '../../ui/event/events'
import Times from '../../ui/times'
import { WeekDays } from '../../ui/week-days'
import { WeekCalendarWrapper } from './styles'
import { CalendarWeekProps } from './types'

export const WeekCalendar = (props: CalendarWeekProps) => {
    const { handleOpenModal, onDayClick, shift, scale, showDates, interval, events } = useCalendarGeneral(props)

    return (
        <WeekCalendarWrapper d="column">
            <WeekDays onDayClick={onDayClick} showDates={showDates} showColumns={true} events={events} />
            <CalendarWrapper>
                <Times interval={interval} scale={scale} />
                {Object.keys(WEEK_DAYS).map((day, i) => {
                    return (
                        <Events
                            showTime={false}
                            key={day}
                            weekDay={i + 1}
                            shortInfo
                            events={events?.[day as IWeekDayNames]}
                            scale={scale}
                            shift={shift}
                            currentEvent={null}
                            interval={interval}
                            onClick={handleOpenModal}
                        />
                    )
                })}
            </CalendarWrapper>
        </WeekCalendarWrapper>
    )
}

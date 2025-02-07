import React from 'react'

import { TimesEvents } from '@features/schedule/ui/calendar/calendars/day/ui/times-events'
import { useCalendarScale } from '@features/schedule/ui/calendar/hooks/use-calendar-scale'
import { useScheduleSubjectModal } from '@features/use-schedule-subject-modal'

import { DayCalendarEvent } from '@shared/api/model'
import { Error } from '@shared/ui/error'
import { Sleep } from '@shared/ui/images'

import { NextDayScheduleStyled } from './styles'

type Props = {
    dayEvents: DayCalendarEvent[] | undefined
    day: string
    isCurrentDay: boolean
}

export const EventsModal = ({ dayEvents, day, isCurrentDay }: Props) => {
    const scale = useCalendarScale()
    const openModal = useScheduleSubjectModal()
    const interval = [9, 22] as [number, number]

    if (!dayEvents?.length) return <Error text={'В этот день пар нет'} image={Sleep} />

    return (
        <NextDayScheduleStyled key={day}>
            <TimesEvents
                events={dayEvents}
                interval={interval}
                scale={scale}
                weekday={0}
                isCurrentDay={isCurrentDay}
                currentDay={0}
                shift={interval[0] * 60}
                onEventClick={openModal}
            />
        </NextDayScheduleStyled>
    )
}

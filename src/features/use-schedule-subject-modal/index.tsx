import React from 'react'

import { SubjectModal } from '@features/schedule/ui'
import { getTimeInterval } from '@features/schedule/ui/calendar/lib/get-time-interval'
import { checkIfEventIsCurrent } from '@features/schedule/ui/calendar/ui/event/lib/check-if-event-is-current'

import { DayCalendarEvent } from '@shared/api/model'
import { useModal } from '@shared/ui/modal'

export const useScheduleSubjectModal = () => {
    const { open } = useModal()

    const handleOpenModal = (event: DayCalendarEvent) => {
        const timeInterval = getTimeInterval(event.startTime, event.duration)

        open(
            <SubjectModal
                link={event.link}
                isNextEvent={false}
                timeInterval={timeInterval}
                name={event.title}
                teachers={event.people}
                rooms={event.rooms ?? []}
                groups={event.groups}
                isCurrentEvent={checkIfEventIsCurrent(event, true)}
                noPadding
                {...event}
            />,
        )
    }

    return handleOpenModal
}

import React, { useState } from 'react'

import { DayCalendar, MonthCalendar, WeekCalendar } from '@features/schedule/ui/calendar'

import { scheduleModel } from '@entities/schedule'

import { IWeekEventSchedule, View } from '@shared/api/model'

type Props = {
    events: IWeekEventSchedule
    view: number
    showDates: boolean
    startDate: Date
    endDate: Date
}

export const Template = ({ events, view, showDates, startDate, endDate }: Props) => {
    const [currentChosenDay, setCurrentChosenDay] = useState<number | undefined>(undefined)
    const handleDayClick = (dayIndex: number) => {
        scheduleModel.events.changeView(View.day)
        setCurrentChosenDay(dayIndex)
    }

    const views = [
        <DayCalendar
            currentChosenDay={currentChosenDay}
            events={events}
            interval={[9, 22]}
            key="day"
            showDates={showDates}
        />,
        <WeekCalendar
            events={events}
            interval={[9, 22]}
            key="week"
            showDates={showDates}
            onDayClick={handleDayClick}
        />,
        <MonthCalendar
            key={'month'}
            events={events}
            startDate={startDate}
            endDate={endDate}
            onDayClick={handleDayClick}
        />,
    ]

    return <>{views[view]}</>
}

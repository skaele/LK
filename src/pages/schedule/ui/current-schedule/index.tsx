import { scheduleModel } from '@entities/schedule'
import { SCHEDULE_NO_RESULT } from '@entities/schedule/consts'
import { Template } from '../template'
import React from 'react'
import { useUnit } from 'effector-react'

const CurrentSchedule = () => {
    const {
        data: { schedule, externalSchedule, view },
        loading,
    } = useUnit(scheduleModel.stores.schedule)

    const resultSchedule = loading
        ? SCHEDULE_NO_RESULT.schedule
        : externalSchedule ?? schedule ?? SCHEDULE_NO_RESULT.schedule

    return (
        <Template
            showDates
            events={resultSchedule.week}
            view={view}
            startDate={resultSchedule.semestr.startDate}
            endDate={resultSchedule.semestr.endDate}
        />
    )
}

export default CurrentSchedule

import { scheduleModel } from '@entities/schedule'
import { Template } from '../template'
import React from 'react'
import { SCHEDULE_NO_RESULT } from '@entities/schedule/consts'
import { useUnit } from 'effector-react'

const SemestrSchedule = () => {
    const {
        data: { schedule, externalSchedule, view },
        loading,
    } = useUnit(scheduleModel.stores.schedule)

    const resultSchedule = loading
        ? SCHEDULE_NO_RESULT.schedule
        : externalSchedule ?? schedule ?? SCHEDULE_NO_RESULT.schedule

    const resultStartDate = resultSchedule.semestr.startDate
    const resultEndDate = resultSchedule.semestr.endDate

    return (
        <Template
            showDates={false}
            events={resultSchedule.semestr.data}
            view={view}
            startDate={resultStartDate}
            endDate={resultEndDate}
        />
    )
}

export default SemestrSchedule

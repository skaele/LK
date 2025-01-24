import React from 'react'

import { scheduleModel } from '@entities/schedule'
import { SCHEDULE_NO_RESULT } from '@entities/schedule/consts'

import { Template } from '../template'

const SemestrSchedule = () => {
    const {
        data: { schedule, externalSchedule, view },
        loading,
    } = scheduleModel.selectors.useSchedule()

    const resultSchedule = loading
        ? SCHEDULE_NO_RESULT.schedule
        : (externalSchedule ?? schedule ?? SCHEDULE_NO_RESULT.schedule)

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

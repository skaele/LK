import React from 'react'
import CurrentSemester from './current-semester'
import Role from './role'
import { Spacing } from '@ui/atoms'
import { projectActivitiesManagerStore } from '@pages/project-activities-manager/model'

const Intro = () => {
    const { data } = projectActivitiesManagerStore.selectors.useData()

    if (!data) {
        return null
    }

    return (
        <div>
            <CurrentSemester year={data.year} semester={data.semester} scheduleUrl={data.scheduleUrl} />
            <Spacing size={16} />
            <Role role={data.role} pointsCountingRulesUrl={data.pointsCountingRulesUrl} />
        </div>
    )
}

export default Intro

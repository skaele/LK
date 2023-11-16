import React from 'react'
import { ProjectActivityManagerRole } from '@entities/project-activities-manager'
import CurrentSemester from './current-semester'
import Role from './role'
import { Spacing } from '@ui/atoms'

const Intro = () => {
    return (
        <div>
            <CurrentSemester year={'2023-2024'} semester={1} scheduleUrl="https://google.com" />
            <Spacing size={16} />
            <Role role={ProjectActivityManagerRole.Manager} pointsCountingRulesUrl="https://google.com" />
        </div>
    )
}

export default Intro

import React from 'react'
import { ProjectActivityManagerRole, projectActivityManagerRoleNames } from '@entities/project-activities-manager'
import { Text } from '../../ui'
import { Green } from './ui'

type Props = {
    role: ProjectActivityManagerRole
    pointsCountingRulesUrl: string
}

const Role = ({ role, pointsCountingRulesUrl }: Props) => {
    return (
        <Text>
            Статус: <Green>{projectActivityManagerRoleNames[role]}</Green> (
            <a href={pointsCountingRulesUrl} target="_blank" rel="noreferrer noopener">
                Регламент начисления баллов
            </a>
            )
        </Text>
    )
}

export default Role

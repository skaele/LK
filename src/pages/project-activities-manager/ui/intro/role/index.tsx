import React from 'react'
import { Text } from '../../ui'
import { Green } from './ui'

type Props = {
    role: string
    pointsCountingRulesUrl: string
}

const Role = ({ role, pointsCountingRulesUrl }: Props) => {
    return (
        <Text>
            Статус: <Green>{role}</Green> (
            <a href={pointsCountingRulesUrl} target="_blank" rel="noreferrer noopener">
                Регламент начисления баллов
            </a>
            )
        </Text>
    )
}

export default Role

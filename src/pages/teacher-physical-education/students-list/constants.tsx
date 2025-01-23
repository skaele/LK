import React from 'react'

import { HealthGroup, healthGroupToTitle } from '@entities/pe-student/types'
import { ColumnProps } from '@shared/ui/table/types'

import { NameRenderer } from './styled'

export const peStudentColumns: ColumnProps[] = [
    {
        title: 'ФИО',
        field: 'fullName',
        priority: 'one',
        showFull: true,
        render: (_, value) => {
            return <NameRenderer hasDebt={value.hasDebt}>{value.fullName}</NameRenderer>
        },
    },
    {
        title: 'Группа',
        field: 'groupNumber',
        priority: 'one',
    },
    {
        title: 'Посещений',
        field: 'visits',
        priority: 'two',
    },
    {
        title: 'Баллы',
        field: 'totalPoints',
        priority: 'one',
    },
    {
        title: 'Нормативы',
        field: 'standardPoints',
        priority: 'two',
    },
    {
        title: 'ЛМС',
        field: 'lmsPoints',
        priority: 'two',
    },
    {
        title: 'Группа здоровья',
        showFull: true,
        field: 'healthGroup',
        priority: 'two',
        render: (value) => {
            const title = healthGroupToTitle[value as HealthGroup]

            return <span>{title}</span>
        },
    },
]

export const examPeStudentColumns: ColumnProps[] = [
    {
        title: 'ФИО',
        field: 'name',
        render: (_, value) => {
            return <NameRenderer hasDebt={value.hasDebt}>{value.fullName}</NameRenderer>
        },
        showFull: true,
        priority: 'one',
    },
    {
        title: 'Группа',
        field: 'groupNumber',
        priority: 'three',
    },
    {
        title: 'Баллы',
        field: 'totalPoints',
        priority: 'two',
    },
    {
        title: 'Зачтено',
        field: 'isDone',
        render: (_, value) => {
            return value.totalPoints >= 50 ? 'Зачтено' : 'Не зачтено'
        },
        priority: 'one',
    },
]

import { ColumnProps } from '@shared/ui/table/types'
import { NameRenderer } from './styled'
import React from 'react'

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
]

export const examPeStudentColumns: ColumnProps[] = [
    {
        title: 'ФИО',
        field: 'name',
        render: (_, value) => {
            return <NameRenderer hasDebt={value.hasDebtFromPreviousSemester}>{value.fullName}</NameRenderer>
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

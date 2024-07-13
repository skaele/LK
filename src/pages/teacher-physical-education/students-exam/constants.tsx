import { ColumnProps } from '@shared/ui/table/types'
import { NameRenderer } from '../students-list/styled'
import React from 'react'

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

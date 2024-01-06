import { PEStudent } from '@entities/pe-student/types'
import { calcSummaryPoints } from '@entities/pe-student/utils/cals-summary-points'
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
        field: 'group',
        render: (_, value) => {
            return value.groupNumber
        },
        priority: 'three',
    },
    {
        title: 'Баллы',
        field: 'points',
        render: (_, value) => calcSummaryPoints(value as PEStudent),
        priority: 'two',
    },
    {
        title: 'Зачтено',
        field: 'isDone',
        render: (_, value) => {
            const points = calcSummaryPoints(value as PEStudent)
            return points >= 50 ? 'Зачтено' : 'Не зачтено'
        },
        priority: 'one',
    },
]

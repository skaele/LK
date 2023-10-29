import { PEStudentProfile } from '@entities/pe-student/types'
import { peTeacherModel } from '@entities/pe-teacher'
import { PeTeacherPermission } from '@entities/pe-teacher/types'
import { Button } from '@shared/ui/button'
import { ColumnProps } from '@shared/ui/table/types'
import { differenceInDays } from 'date-fns'
import { combine } from 'effector'
import { SelectorData } from './constants'
import React from 'react'
import { RegulationType } from '@entities/pe-student-regulation-points/types'
import { peStudentRegulationPointsModel } from '@entities/pe-student-regulation-points/model'

export const $regularPointsColumns = combine(
    peTeacherModel.stores.peTeacher,
    peStudentRegulationPointsModel.stores.pendingRemoveRegulationPoints,
    (teacher, isLoading): ColumnProps[] => [
        {
            title: 'Дата',
            field: 'date',
            type: 'date',
            sort: true,
        },
        {
            title: 'Норматив',
            field: 'standardType',
            render: (data, row) => {
                if (data === RegulationType.Other) {
                    return row.comment
                }

                return SelectorData.find(({ id }) => id === data)?.title
            },
        },
        {
            title: 'Количество баллов',
            field: 'points',
        },
        {
            title: 'Преподаватель',
            field: 'teacher',
            render: (data) => data.fullName,
        },
        {
            title: 'Комментарий',
            field: 'comment',
            priority: 'five',
        },
        {
            title: 'Действия',
            field: 'actions',
            onClick: () => null,
            render: (_, data) => {
                const history = data as PEStudentProfile['standardsHistory'][number]
                const isExpired = differenceInDays(new Date(history.date), new Date()) < -30
                const isAdmin = [PeTeacherPermission.AdminAccess, PeTeacherPermission.SuperUser].some((permission) =>
                    teacher?.permissions?.includes(permission),
                )

                if (!((history.teacherGuid === teacher?.id && !isExpired) || isAdmin)) return null

                return (
                    <Button
                        width="100%"
                        text="Удалить"
                        isActive={!isLoading}
                        onClick={() =>
                            peStudentRegulationPointsModel.events.removeRegulationPoints({ id: history.id.toString() })
                        }
                    />
                )
            },
        },
    ],
)

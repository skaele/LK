import { peStudentAdditionalPointsModel } from '@entities/pe-student-additional-points/model'
import { WorkType } from '@entities/pe-student-additional-points/types'
import { PEStudentProfile } from '@entities/pe-student/types'
import { peTeacherModel } from '@entities/pe-teacher'
import { PeTeacherPermission } from '@entities/pe-teacher/types'
import { Button } from '@shared/ui/button'
import { ColumnProps } from '@shared/ui/table/types'
import { differenceInDays } from 'date-fns'
import { combine } from 'effector'
import React from 'react'
import { SelectorData } from './constants'

export const $additionalPointsColumns = combine(
    peTeacherModel.stores.peTeacher,
    peStudentAdditionalPointsModel.stores.pendingRemoveAdditionPoints,
    (teacher, isLoading): ColumnProps[] => [
        {
            title: 'Дата',
            field: 'date',
            type: 'date',
            sort: true,
        },
        {
            title: 'Тип работ',
            field: 'type',
            render: (data, row) => {
                const workType = SelectorData.find(({ id }) => id === data)

                if (workType?.id === WorkType.Competition) {
                    return row.comment
                }

                return workType?.title
            },
        },
        {
            title: 'Количество баллов',
            field: 'points',
        },
        {
            title: 'Преподаватель',
            field: 'teacherFullName',
        },
        {
            title: 'Комментарий',
            field: 'comment',
            priority: 'five',
            render: (_, row) => {
                const workType = SelectorData.find(({ id }) => id === row.workType)

                if (workType?.id !== WorkType.Competition) {
                    return row.comment
                }

                return null
            },
        },
        ...(teacher?.permissions?.length
            ? [
                  {
                      title: 'Действия',
                      field: 'actions',
                      onClick: () => null,
                      render: (_: unknown, data: unknown) => {
                          const history = data as PEStudentProfile['pointsHistory'][number]
                          const isExpired = differenceInDays(new Date(history.date), new Date()) < -7
                          const isAdmin = [PeTeacherPermission.AdminAccess, PeTeacherPermission.SuperUser].some(
                              (permission) => teacher?.permissions?.includes(permission),
                          )

                          if (!((history.teacherGuid === teacher?.id && !isExpired) || isAdmin)) return null

                          return (
                              <Button
                                  width="100%"
                                  text="Удалить"
                                  isActive={!isLoading}
                                  onClick={() =>
                                      peStudentAdditionalPointsModel.events.removeAdditionPoints({
                                          id: history.id.toString(),
                                      })
                                  }
                              />
                          )
                      },
                  },
              ]
            : []),
    ],
)

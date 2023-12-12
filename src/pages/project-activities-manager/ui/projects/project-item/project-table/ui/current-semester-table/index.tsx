import * as React from 'react'
import { useState } from 'react'
import { StudentActivitiesColumn, StudentActivityData } from '@features/table-project-activities-manager'
import { Input } from '@ui/atoms'
import { TeacherSearch } from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/teacher-search'
import Table from '@ui/table'
import noop from '@utils/noop'
import { useProjectItemStateContext } from '@pages/project-activities-manager/ui/projects/project-item/use-project-item-state'
import { Hint } from '@ui/search'
import { extractPoints } from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/current-semester-table/lib/extract-points'
import { calcResult } from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/current-semester-table/lib/calc-result'
import PointsInput from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/current-semester-table/ui/points-input'
import {
    PROJ_ACTIVITIES_DEFENSE_MAX_POINTS,
    PROJ_ACTIVITIES_FIRST_VALIDATION_MAX_POINTS,
    PROJ_ACTIVITIES_SECOND_VALIDATION_MAX_POINTS,
} from '@features/table-project-activities-manager/config'
import ManagerInput from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/current-semester-table/ui/manager-input'
import styled, { css } from 'styled-components'
import { Colors } from '@shared/constants'
import { Email, FIO } from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/ui'
import ResultPoints from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/result-points'
import ResultSign from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/result-sign'
import StarsInput from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/current-semester-table/ui/stars-input'
import SubprojectInput from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/subproject-input'

type Props = {
    data: StudentActivityData[]
}

const CurrentSemesterTable = ({ data }: Props) => {
    const { state } = useProjectItemStateContext()
    const { currentSemester } = state

    return (
        <Table
            onRowClick={noop}
            data={data}
            columns={[
                {
                    title: 'Подпроект',
                    width: '200px',
                    field: StudentActivitiesColumn.subproject,
                    render: (initial, data) => (
                        <SubprojectInput
                            data={data as StudentActivityData}
                            initial={initial}
                            editedData={currentSemester.editedData[(data as StudentActivityData).studentId]}
                        />
                    ),
                },
                {
                    title: 'Куратор',
                    field: StudentActivitiesColumn.manager,
                    showFull: true,
                    width: '300px',
                    render: (initial, data) => <ManagerInput data={data as StudentActivityData} initial={initial} />,
                },
                {
                    title: 'Группа',
                    field: StudentActivitiesColumn.group,
                    showFull: true,
                    width: '130px',
                },
                {
                    title: 'ФИО',
                    field: StudentActivitiesColumn.name,
                    showFull: true,
                    width: '175px',
                    render: (value, data) => <FIO expelled={(data as StudentActivityData).expelled}>{value}</FIO>,
                },
                {
                    title: 'Электронная почта',
                    field: StudentActivitiesColumn.email,
                    showFull: true,
                    width: '220px',
                    render: (value) => <Email>{value}</Email>,
                },
                {
                    title: 'Первая аттестация',
                    field: StudentActivitiesColumn.firstValidation,
                    showFull: true,
                    width: '140px',
                    render: (initial, data) => (
                        <PointsInput
                            data={data as StudentActivityData}
                            initial={initial}
                            column={StudentActivitiesColumn.firstValidation}
                            maxPoints={PROJ_ACTIVITIES_FIRST_VALIDATION_MAX_POINTS}
                        />
                    ),
                },
                {
                    title: 'Вторая аттестация',
                    field: StudentActivitiesColumn.secondValidation,
                    showFull: true,
                    width: '140px',
                    render: (initial, data) => (
                        <PointsInput
                            data={data as StudentActivityData}
                            initial={initial}
                            column={StudentActivitiesColumn.secondValidation}
                            maxPoints={PROJ_ACTIVITIES_SECOND_VALIDATION_MAX_POINTS}
                        />
                    ),
                },
                {
                    title: 'Баллы защиты',
                    field: StudentActivitiesColumn.defensePoints,
                    showFull: true,
                    width: '140px',
                    render: (initial, data) => (
                        <PointsInput
                            data={data as StudentActivityData}
                            initial={initial}
                            column={StudentActivitiesColumn.defensePoints}
                            maxPoints={PROJ_ACTIVITIES_DEFENSE_MAX_POINTS}
                        />
                    ),
                },
                {
                    title: 'Итого',
                    field: StudentActivitiesColumn.resultPoints,
                    width: '100px',
                    showFull: true,
                    render: (initial, data) => (
                        <ResultPoints
                            data={data as StudentActivityData}
                            initial={initial}
                            editedData={currentSemester.editedData[(data as StudentActivityData).studentId]}
                        />
                    ),
                },
                {
                    title: 'Результат',
                    field: StudentActivitiesColumn.result,
                    width: '160px',
                    showFull: true,
                    render: (initial, data) => (
                        <ResultSign
                            data={data as StudentActivityData}
                            editedData={currentSemester.editedData[(data as StudentActivityData).studentId]}
                            initial={initial}
                        />
                    ),
                },
                {
                    title: 'Звёзды',
                    field: StudentActivitiesColumn.stars,
                    width: '120px',
                    showFull: true,
                    render: (initial, data) => <StarsInput data={data as StudentActivityData} initial={initial} />,
                },
            ]}
        />
    )
}

export default CurrentSemesterTable

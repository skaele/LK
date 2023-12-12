import * as React from 'react'
import { useState } from 'react'
import { StudentActivitiesColumn, StudentActivityData } from '@features/table-project-activities-manager'
import { Input } from '@ui/atoms'
import Table from '@ui/table'
import noop from '@utils/noop'
import SubprojectInput from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/subproject-input'
import { useProjectItemStateContext } from '@pages/project-activities-manager/ui/projects/project-item/use-project-item-state'
import { Email, FIO } from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/ui'
import RetakingInput from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/prev-semester-table/ui/retaking-input'

type Props = {
    data: StudentActivityData[]
}

const PrevSemesterTable = ({ data }: Props) => {
    const {
        state: { prevSemester },
    } = useProjectItemStateContext()

    return (
        <Table
            onRowClick={noop}
            data={data}
            columns={[
                {
                    title: 'Подпроект',
                    width: '260px',
                    field: StudentActivitiesColumn.subproject,
                    render: (initial, data) => (
                        <SubprojectInput
                            data={data as StudentActivityData}
                            initial={initial}
                            editedData={prevSemester.editedData[(data as StudentActivityData).studentId]}
                        />
                    ),
                },
                {
                    title: 'Куратор',
                    field: StudentActivitiesColumn.manager,
                    showFull: true,
                    width: '260px',
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
                    width: '265px',
                    render: (value, data) => <FIO expelled={(data as StudentActivityData).expelled}>{value}</FIO>,
                },
                {
                    title: 'Электронная почта',
                    field: StudentActivitiesColumn.email,
                    showFull: true,
                    width: '260px',
                    render: (value) => <Email>{value}</Email>,
                },
                {
                    title: 'Перенос баллов',
                    field: StudentActivitiesColumn.transferredPoints,
                    showFull: true,
                    width: '120px',
                },
                {
                    title: 'Пересдача',
                    field: StudentActivitiesColumn.retaking,
                    showFull: true,
                    width: '140px',
                    render: (initial, data) => <RetakingInput data={data as StudentActivityData} initial={initial} />,
                },
                {
                    title: 'Итого',
                    field: StudentActivitiesColumn.resultPoints,
                    width: '100px',
                    showFull: true,
                },
                {
                    title: 'Результат',
                    field: StudentActivitiesColumn.result,
                    width: '170px',
                    showFull: true,
                },
                {
                    title: 'Звёзды',
                    field: StudentActivitiesColumn.stars,
                    width: '120px',
                    showFull: true,
                },
            ]}
        />
    )
}

export default PrevSemesterTable

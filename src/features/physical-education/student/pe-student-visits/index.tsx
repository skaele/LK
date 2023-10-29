import { selectedPEStudentModel } from '@entities/pe-student/model'
import { useUnit } from 'effector-react'
import { AddPeStudentVisits } from './features/add-pe-student-visits/ui'
import { StyledTable, Wrapper } from './styled'
import React from 'react'
import { $peStudentVisitsColumns } from './model'

export const PEStudentVisits = () => {
    const [student, peStudentVisitsColumns] = useUnit([
        selectedPEStudentModel.stores.$selectedStudent,
        $peStudentVisitsColumns,
    ])

    if (!student) return null

    return (
        <Wrapper>
            <AddPeStudentVisits studentGuid={student.studentGuid} />
            <StyledTable columns={peStudentVisitsColumns} data={student.visitsHistory} />
        </Wrapper>
    )
}

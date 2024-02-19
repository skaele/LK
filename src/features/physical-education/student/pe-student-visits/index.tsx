import { selectedPEStudentModel } from '@entities/pe-student/model'
import { useUnit } from 'effector-react'
import { AddPeStudentVisits } from './features/add-pe-student-visits/ui'
import { StyledTable, Wrapper } from './styled'
import React from 'react'
import { $peStudentVisitsColumns } from './model'
import { peTeacherModel } from '@entities/pe-teacher'

export const PEStudentVisits = () => {
    const [student, peStudentVisitsColumns, peTeacher] = useUnit([
        selectedPEStudentModel.stores.$selectedStudent,
        $peStudentVisitsColumns,
        peTeacherModel.stores.peTeacher,
    ])

    if (!student) return null

    return (
        <Wrapper>
            {!!peTeacher?.permissions?.length && <AddPeStudentVisits studentGuid={student.studentGuid} />}
            <StyledTable columns={peStudentVisitsColumns} data={student.visitsHistory} />
        </Wrapper>
    )
}

import React from 'react'

import { selectedPEStudentModel } from '@entities/pe-student/model'
import { peTeacherModel } from '@entities/pe-teacher'
import { useUnit } from 'effector-react'

import { AddPeStudentVisits } from './features/add-pe-student-visits/ui'
import { $peStudentVisitsColumns } from './model'
import { StyledTable, Wrapper } from './styled'

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

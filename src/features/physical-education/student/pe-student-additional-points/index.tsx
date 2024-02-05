import { selectedPEStudentModel } from '@entities/pe-student/model'
import { Button } from '@shared/ui/button'
import { useUnit } from 'effector-react'
import { useModal } from 'widgets'
import { $additionalPointsColumns } from './model'
import { AddPEStudentAdditionalPoints } from './features/add-pe-student-additional-points'
import { StyledTable, Wrapper } from './styled'
import React from 'react'
import { Colors } from '@shared/constants'
import { peTeacherModel } from '@entities/pe-teacher'

export const PEStudentAdditionalPoints = () => {
    const [student, additionalPointsColumns, peTeacher] = useUnit([
        selectedPEStudentModel.stores.$selectedStudent,
        $additionalPointsColumns,
        peTeacherModel.stores.peTeacher,
    ])
    const { open } = useModal()

    const handleClick = () => {
        open(<AddPEStudentAdditionalPoints />, 'Дополнительные баллы')
    }

    if (!student) return null

    return (
        <Wrapper>
            {!!peTeacher?.permissions?.length && (
                <Button
                    text="Добавить дополнительные баллы"
                    onClick={handleClick}
                    background={Colors.blue.main}
                    textColor={Colors.white.main}
                />
            )}
            <StyledTable columns={additionalPointsColumns} data={student.pointsHistory} />
        </Wrapper>
    )
}

import { selectedPEStudentModel } from '@entities/pe-student/model'
import { Button } from '@shared/ui/button'
import { useUnit } from 'effector-react'
import { useModal } from 'widgets'
import { AddPEStudentRegulationPoints } from './features/add-pe-student-regulation-points'
import { StyledTable, Wrapper } from './styled'
import React from 'react'
import { Colors } from '@shared/constants'
import { $regularPointsColumns } from './model'
import { Message } from '@shared/ui/message'
import { peTeacherModel } from '@entities/pe-teacher'

export const PEStudentRegulationPoints = () => {
    const [student, regularPointsColumns, peTeacher] = useUnit([
        selectedPEStudentModel.stores.$selectedStudent,
        $regularPointsColumns,
        peTeacherModel.stores.peTeacher,
    ])

    const { open } = useModal()

    const points = student?.totalPoints

    const handleClick = () => {
        open(<AddPEStudentRegulationPoints />, 'Добавить норматив')
    }

    const isAddPointsDisabled = Number(points) < 20

    if (!student) return null

    return (
        <Wrapper>
            {!student && isAddPointsDisabled && (
                <Message type="alert">Чтобы добавить норматив, у студента должно быть хотя бы 20 баллов</Message>
            )}
            {!!peTeacher?.permissions?.length && (
                <Button
                    text="Добавить норматив"
                    onClick={handleClick}
                    background={Colors.blue.main}
                    textColor={Colors.white.main}
                    isActive={!isAddPointsDisabled}
                />
            )}
            <StyledTable data={student.standardsHistory} columns={regularPointsColumns} />
        </Wrapper>
    )
}

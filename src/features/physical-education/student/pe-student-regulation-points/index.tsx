import { selectedPEStudentModel } from '@entities/pe-student/model'
import { Button } from '@shared/ui/button'
import { useUnit } from 'effector-react'
import { useModal } from 'widgets'
import { AddPEStudentRegulationPoints } from './features/add-pe-student-regulation-points'
import { StyledTable, Wrapper } from './styled'
import React from 'react'
import { Colors } from '@shared/constants'
import { $regularPointsColumns } from './model'
import { calcSummaryPoints } from '@entities/pe-student/utils/cals-summary-points'
import { Message } from '@shared/ui/message'

export const PEStudentRegulationPoints = () => {
    const [student, regularPointsColumns] = useUnit([
        selectedPEStudentModel.stores.$selectedStudent,
        $regularPointsColumns,
    ])

    const { open } = useModal()

    const points = !!student && calcSummaryPoints(student)

    const handleClick = () => {
        open(<AddPEStudentRegulationPoints />, 'Добавить норматив')
    }

    const isAddPointsDisabled = points < 20

    if (!student) return null

    return (
        <Wrapper>
            {isAddPointsDisabled && (
                <Message type="alert">Чтобы добавить норматив, у студента должно быть хотя бы 20 баллов</Message>
            )}
            <Button
                text="Добавить норматив"
                onClick={handleClick}
                background={Colors.blue.main}
                textColor={Colors.white.main}
                isActive={!isAddPointsDisabled}
            />
            <StyledTable data={student.standardsHistory} columns={regularPointsColumns} />
        </Wrapper>
    )
}

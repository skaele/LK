import React from 'react'
import { StudentActivitiesColumn, StudentActivityData } from '@features/table-project-activities-manager'
import { useProjectItemStateContext } from '@pages/project-activities-manager/ui/projects/project-item/use-project-item-state'
import { Input } from '@ui/atoms'
import { extractPoints } from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/current-semester-table/lib/extract-points'
import { calcResult } from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/current-semester-table/lib/calc-result'

type Props = {
    initial: number
    data: StudentActivityData
    column:
        | StudentActivitiesColumn.firstValidation
        | StudentActivitiesColumn.secondValidation
        | StudentActivitiesColumn.defensePoints
    maxPoints: number
}

const PointsInput = ({ initial, data, column, maxPoints }: Props) => {
    const { currentSemesterState, changeRow } = useProjectItemStateContext()

    const editedData = currentSemesterState.editedData[data.studentId] as StudentActivityData | undefined

    if (data.isPrevSemester || editedData?.isPrevSemester) {
        return null
    }

    const onChange = (value: string) => {
        const editedPoints = Number(value)

        if (editedPoints < 0 || editedPoints > maxPoints) {
            return
        }

        const { firstValidationPoints, secondValidationPoints, defensePoints } = extractPoints(data, editedData)
        const { result, resultPoints } = calcResult({
            [StudentActivitiesColumn.firstValidation]: firstValidationPoints,
            [StudentActivitiesColumn.secondValidation]: secondValidationPoints,
            [StudentActivitiesColumn.defensePoints]: defensePoints,
            [column]: editedPoints,
        })

        changeRow({
            ...(editedData ?? data),
            [column]: editedPoints,
            [StudentActivitiesColumn.resultPoints]: resultPoints,
            [StudentActivitiesColumn.result]: result,
        })
    }

    return (
        <Input
            value={String(editedData?.[column] ?? initial)}
            setValue={onChange}
            type="number"
            stepSize={1}
            minValue={0}
            maxValue={maxPoints}
            placeholder=""
            hideCross
        />
    )
}

export default PointsInput

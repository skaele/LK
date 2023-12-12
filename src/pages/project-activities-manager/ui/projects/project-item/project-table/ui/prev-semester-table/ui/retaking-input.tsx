import React from 'react'
import {
    StudentActivitiesColumn,
    StudentActivityData,
    StudentActivityResult,
} from '@features/table-project-activities-manager'
import { Input } from '@ui/atoms'
import { useProjectItemStateContext } from '@pages/project-activities-manager/ui/projects/project-item/use-project-item-state'
import {
    PROJ_ACTIVITIES_RETAKING_MAX_POINTS,
    PROJECT_ACTIVITIES_PASS_POINTS,
} from '@features/table-project-activities-manager/config'

type Props = {
    data: StudentActivityData
    initial: number
}

const RetakingInput = ({ data, initial }: Props) => {
    const { prevSemesterState, changeRow } = useProjectItemStateContext()

    const editedData = prevSemesterState.editedData[data.studentId] as StudentActivityData | undefined

    if (!data.isPrevSemester || (editedData && !editedData.isPrevSemester)) {
        return null
    }

    const onChange = (value: string) => {
        const edited = Number(value)

        if (edited < 0 || edited > PROJ_ACTIVITIES_RETAKING_MAX_POINTS) {
            return
        }

        const resultPoints = edited + (editedData ?? data)[StudentActivitiesColumn.transferredPoints]
        const result =
            resultPoints >= PROJECT_ACTIVITIES_PASS_POINTS
                ? StudentActivityResult.passed
                : StudentActivityResult.notPassed

        changeRow({
            ...(editedData ?? data),
            [StudentActivitiesColumn.retaking]: edited,
            [StudentActivitiesColumn.resultPoints]: resultPoints,
            [StudentActivitiesColumn.result]: result,
        })
    }

    return (
        <Input
            value={String(editedData?.[StudentActivitiesColumn.retaking] ?? initial)}
            setValue={onChange}
            type="number"
            stepSize={1}
            minValue={0}
            maxValue={PROJ_ACTIVITIES_RETAKING_MAX_POINTS}
            placeholder=""
            hideCross
        />
    )
}

export default RetakingInput

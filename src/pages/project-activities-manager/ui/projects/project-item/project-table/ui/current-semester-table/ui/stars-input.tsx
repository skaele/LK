import * as React from 'react'
import { StudentActivitiesColumn, StudentActivityData } from '@features/table-project-activities-manager'
import { Input } from '@ui/atoms'
import { useProjectItemStateContext } from '@pages/project-activities-manager/ui/projects/project-item/use-project-item-state'
import { PROJ_ACTIVITIES_MAX_STARS } from '@features/table-project-activities-manager/config'

type Props = {
    data: StudentActivityData
    initial: number
}

const StarsInput = ({ initial, data }: Props) => {
    const { changeRow, currentSemesterState } = useProjectItemStateContext()

    const editedData = currentSemesterState.editedData[data.studentId] as StudentActivityData | undefined

    if (data.isPrevSemester || editedData?.isPrevSemester) {
        return null
    }

    const onChange = (value: string) => {
        const edited = Number(value)

        if (edited < 0 || edited > PROJ_ACTIVITIES_MAX_STARS) {
            return
        }

        changeRow({
            ...(editedData ?? data),
            [StudentActivitiesColumn.stars]: edited,
        })
    }

    return (
        <Input
            value={String(editedData?.[StudentActivitiesColumn.stars] ?? initial)}
            setValue={onChange}
            type="number"
            stepSize={1}
            minValue={0}
            maxValue={PROJ_ACTIVITIES_MAX_STARS}
            placeholder=""
            hideCross
        />
    )
}

export default StarsInput

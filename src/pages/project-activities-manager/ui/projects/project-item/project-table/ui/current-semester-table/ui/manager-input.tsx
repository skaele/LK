import React, { useState } from 'react'
import { StudentActivitiesColumn, StudentActivityData } from '@features/table-project-activities-manager'
import { Hint } from '@ui/search'
import { TeacherSearch } from '@pages/project-activities-manager/ui/projects/project-item/project-table/ui/teacher-search'
import { useProjectItemStateContext } from '@pages/project-activities-manager/ui/projects/project-item/use-project-item-state'

type Props = {
    data: StudentActivityData
    initial: string
}

const ManagerInput = ({ initial, data }: Props) => {
    const { changeRow, currentSemesterState } = useProjectItemStateContext()

    const editedData = currentSemesterState.editedData[data.studentId] as StudentActivityData | undefined

    const [value, setValue] = useState(editedData?.[StudentActivitiesColumn.manager] ?? initial)

    const onClickHint = (hint: Hint | undefined) => {
        setValue(hint?.value ?? initial)
        changeRow({
            ...(editedData ?? data),
            [StudentActivitiesColumn.manager]: hint?.value ?? initial,
        })
    }

    return <TeacherSearch value={value} setValue={setValue} onHintClick={onClickHint} width="225px" />
}

export default ManagerInput

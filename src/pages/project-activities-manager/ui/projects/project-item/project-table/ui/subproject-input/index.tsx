import React from 'react'
import { StudentActivitiesColumn, StudentActivityData } from '@features/table-project-activities-manager'
import { Input } from '@ui/atoms'
import { useProjectItemStateContext } from '@pages/project-activities-manager/ui/projects/project-item/use-project-item-state'

type Props = {
    initial: string
    editedData: StudentActivityData | undefined
    data: StudentActivityData
}

const SubprojectInput = ({ initial, data, editedData }: Props) => {
    const { changeRow } = useProjectItemStateContext()

    const onChange = (value: string) => {
        changeRow({ ...(editedData ?? data), [StudentActivitiesColumn.subproject]: value })
    }

    return <Input value={editedData?.[StudentActivitiesColumn.subproject] ?? initial} setValue={onChange} hideCross />
}

export default SubprojectInput

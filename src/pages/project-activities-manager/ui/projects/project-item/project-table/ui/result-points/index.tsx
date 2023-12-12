import React from 'react'
import { StudentActivitiesColumn, StudentActivityData } from '@features/table-project-activities-manager'

type Props = {
    data: StudentActivityData
    editedData: StudentActivityData | undefined
    initial: number
}

const ResultPoints = ({ initial, data, editedData }: Props) => {
    if (data.isPrevSemester || editedData?.isPrevSemester) {
        return null
    }

    return <>{editedData?.[StudentActivitiesColumn.resultPoints] ?? initial}</>
}

export default ResultPoints

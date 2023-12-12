import React from 'react'
import { StudentActivitiesColumn, StudentActivityData } from '@features/table-project-activities-manager'

type Props = {
    data: StudentActivityData
    editedData: StudentActivityData | undefined
    initial: number
}

const ResultSign = ({ editedData, data, initial }: Props) => {
    if (data.isPrevSemester || editedData?.isPrevSemester) {
        return null
    }

    return <>{editedData?.[StudentActivitiesColumn.result] ?? initial}</>
}

export default ResultSign

import React from 'react'
import { StudentActivitiesColumn, StudentActivityData } from '@features/table-project-activities-manager'

type Props = {
    editedData: StudentActivityData | undefined
    initial: number
}

const ResultSign = ({ editedData, initial }: Props) => {
    return <>{editedData?.[StudentActivitiesColumn.result] ?? initial}</>
}

export default ResultSign

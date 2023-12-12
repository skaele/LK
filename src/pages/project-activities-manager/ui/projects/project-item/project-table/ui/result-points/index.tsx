import React from 'react'
import { StudentActivitiesColumn, StudentActivityData } from '@features/table-project-activities-manager'

type Props = {
    editedData: StudentActivityData | undefined
    initial: number
}

const ResultPoints = ({ initial, editedData }: Props) => {
    return <>{editedData?.[StudentActivitiesColumn.resultPoints] ?? initial}</>
}

export default ResultPoints

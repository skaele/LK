import React from 'react'
import { Bold, Text } from '../../ui'

type Props = {
    year: string
    semester: number
    scheduleUrl: string
}

const CurrentSemester = ({ semester, scheduleUrl, year }: Props) => {
    return (
        <Text>
            Учебный год: <Bold>{year}</Bold>, семестр: {semester} (
            <a href={scheduleUrl} target="_blank" rel="noreferrer noopener">
                Расписание занятий
            </a>
            )
        </Text>
    )
}

export default CurrentSemester

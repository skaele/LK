import { pEStudentVisitModel } from '@entities/pe-student/model'
import { Colors } from '@shared/constants'
import localizeDate from '@shared/lib/dates/localize-date'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import Input from '@shared/ui/input'
import { isWithinInterval, subWeeks } from 'date-fns'
import { useUnit } from 'effector-react'
import React, { useEffect, useState } from 'react'

interface Props {
    studentGuid: string
}

export const AddPeStudentVisits = ({ studentGuid }: Props) => {
    const [date, setDate] = useState(new Date().toISOString())
    const [isPendingAddVisit] = useUnit([pEStudentVisitModel.stores.pendingAddVisit])

    const selectedDate = new Date(date)

    const isDateValid =
        isWithinInterval(selectedDate, { start: subWeeks(new Date(), 1), end: new Date() }) &&
        selectedDate.getDay() !== 0 &&
        selectedDate.getDay() !== 1

    useEffect(() => {
        setDate(new Date().toISOString())
    }, [studentGuid])

    const handleClick = () => {
        pEStudentVisitModel.events.addVisit({ studentGuid, date: localizeDate(date, 'numeric') })
    }

    return (
        <Flex gap="4px" ai="flex-start">
            <Input
                alertMessage={!isDateValid ? 'Не допустимая дата' : ''}
                type="date"
                setValue={setDate}
                value={date}
                hideCross
            />

            <Button
                isActive={isDateValid && !isPendingAddVisit}
                text={`Добавить посещение ${localizeDate(date, 'numeric')}`}
                onClick={handleClick}
                width="100%"
                background={Colors.blue.main}
                textColor={Colors.white.main}
            />
        </Flex>
    )
}

import React, { useState } from 'react'

import { peStudentRegulationPointsModel } from '@entities/pe-student-regulation-points/model'
import { AddStudentRegulationPoints, RegulationType } from '@entities/pe-student-regulation-points/types'
import { selectedPEStudentModel } from '@entities/pe-student/model'
import Select, { SelectPage } from '@features/select'
import { Colors } from '@shared/constants'
import localizeDate from '@shared/lib/dates/localize-date'
import { Button } from '@shared/ui/button'
import Input from '@shared/ui/input'
import { useUnit } from 'effector-react'

import { SelectorData } from '../../constants'
import { Wrapper } from './styled'

export const AddPEStudentRegulationPoints = () => {
    const student = useUnit(selectedPEStudentModel.stores.$selectedStudent)
    const [date, setDate] = useState<string>(new Date().toISOString())
    const [type, setType] = useState<SelectPage | null>(null)
    const [pointsAmount, setPointsAmount] = useState<string>('0')
    const [comment, setComment] = useState<string>('')

    const handleClick = () => {
        peStudentRegulationPointsModel.events.addRegulationPoints({
            date: localizeDate(date, 'numeric'),
            points: Number(pointsAmount),
            studentGuid: student?.studentGuid,
            type: type?.id,
            comment: type?.id === RegulationType.Other ? (comment ?? '') : '',
        } as AddStudentRegulationPoints)
    }

    const selectedDate = new Date(date)

    const isDateValid = selectedDate.getDay() !== 0 && selectedDate.getDay() !== 1

    return (
        <Wrapper>
            <Select
                width="100%"
                size="big"
                title={'Тип работ'}
                items={SelectorData}
                selected={type}
                setSelected={setType}
            />
            {type?.id === RegulationType.Other && (
                <Input width="100%" size="big" title={'Комментарий'} setValue={setComment} value={comment} />
            )}
            <Input
                alertMessage={!isDateValid ? 'Не допустимая дата' : ''}
                size="big"
                title={'Дата'}
                setValue={setDate}
                value={date}
                type="date"
                width="100%"
            />
            <Input
                width="100%"
                size="big"
                title={'Количество баллов'}
                setValue={setPointsAmount}
                value={pointsAmount}
                type="number"
                stepSize={1}
                minValue={1}
            />
            <Button
                text="Добавить"
                isActive={isDateValid}
                onClick={handleClick}
                background={Colors.blue.main}
                textColor={Colors.white.main}
                width="100%"
            />
        </Wrapper>
    )
}

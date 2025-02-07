import React from 'react'

import { AcadPerformance } from '@api/model/acad-performance'
import styled from 'styled-components'
import { User } from 'widgets'

import { SubjectIconAndBackground } from '@features/schedule/ui/subject/subject-icon-and-background'

import { IColorPalette } from '@shared/constants'
import localizeDate from '@shared/lib/dates/localize-date'
import { Title } from '@shared/ui/title'

import KeyValue from '@ui/atoms/key-value'

import findSemestr from '@utils/find-semestr'

const Container = styled.div`
    width: 400px;

    @media (max-width: 800px) {
        width: 100%;
    }
`

const TitleWrapper = styled.div`
    margin: 20px 0;
`

interface Props {
    item: AcadPerformance
    color: IColorPalette
}

const SubjectModal = ({ item, color }: Props) => {
    return (
        <Container>
            <SubjectIconAndBackground subjectName={item.name} color={color} noPadding={true} />
            <TitleWrapper>
                <Title size={3} align="left">
                    {item.name}
                </Title>
            </TitleWrapper>
            <KeyValue keyStr="Курс" value={item.course} />
            <KeyValue keyStr="Форма аттестации" value={item.exam_type} />
            <KeyValue keyStr="Дата проведения" value={localizeDate(item.exam_date)} />
            <KeyValue keyStr="Оценка" value={item.grade} />
            <KeyValue keyStr="Номер ведомости" value={item.bill_num} />
            <KeyValue keyStr="Семестр" value={findSemestr(item.exam_date, +item.course)} />
            <KeyValue keyStr="Кафедра" value={item.chair} />
            <KeyValue
                keyStr="Преподаватель"
                // TODO: add teacher id
                value={<User id={undefined} type="staff" name={item.teacher} />}
                direction="vertical"
            />
        </Container>
    )
}

export default SubjectModal

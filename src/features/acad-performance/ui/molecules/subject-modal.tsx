import React from 'react'

import styled from 'styled-components'

import { SubjectIconAndBackground } from '@features/schedule/ui/subject/subject-icon-and-background'
import User from '@features/user'

import { AcadPerformance } from '@shared/api/model/acad-performance'
import { IColorPalette } from '@shared/consts'
import localizeDate from '@shared/lib/dates/localize-date'
import findSemestr from '@shared/lib/find-semestr'
import KeyValue from '@shared/ui/atoms/key-value'
import { Title } from '@shared/ui/title'

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

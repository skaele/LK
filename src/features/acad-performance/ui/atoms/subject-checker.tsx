import React from 'react'
import { HiOutlineCheck, HiOutlineX } from 'react-icons/hi'

import { IGrade } from '@api/model/acad-performance'
import styled from 'styled-components'

import findProgressBarColor from '@features/acad-performance/lib/find-progress-bar-color'

import { GradeByScore } from '@shared/constants'

interface Props {
    grade: keyof IGrade | undefined
    superWide?: boolean
}

const Container = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ grade }) => findProgressBarColor(grade) as string};

    width: ${({ superWide }) => (superWide ? '105px' : '22px')};
    height: 22px;

    min-width: 22px;
    min-height: 22px;
    border-radius: 50%;

    svg {
        width: 100%;
        height: 100%;
    }
`

const SubjectChecker = ({ grade }: Props) => {
    return (
        <Container grade={grade} superWide={grade === 'Не явился'}>
            {grade === 'Не явился' ? grade : grade && (GradeByScore[grade] > 2 ? <HiOutlineCheck /> : <HiOutlineX />)}
        </Container>
    )
}

export default SubjectChecker

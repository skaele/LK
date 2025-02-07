import React from 'react'

import styled from 'styled-components'

<<<<<<<< HEAD:src/features/schedule/ui/calendar/ui/subjects-indicator/index.tsx
import { DayCalendarEvent } from '@shared/api/model'
========
import { DayCalendarEvent } from '../../types'
>>>>>>>> master:src/shared/ui/calendar/ui/subjects-indicator/index.tsx

const SubjectsIndicatorStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 0 auto;
    width: fit-content;
`

export const IndicatorItem = styled.div<{ background: string }>`
    width: 6px;
    height: 6px;
    border-radius: 10px;
    background: ${({ background }) => background};

    @media (max-width: 768px) {
        width: 5px;
        height: 5px;
    }
`

type Props = {
    subjects: DayCalendarEvent[] | undefined
}

export const SubjectsIndicator = ({ subjects }: Props) => {
    if (!subjects) return null

    return (
        <SubjectsIndicatorStyled>
            {subjects.map((subject) => {
                return <IndicatorItem background={subject.color.main} key={subject.startTime} />
            })}
        </SubjectsIndicatorStyled>
    )
}

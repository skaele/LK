import React from 'react'

import { userSettingsModel } from '@entities/settings'
import { IColorPalette, ThemeVariant } from '@shared/constants'
import { useUnit } from 'effector-react'
import styled from 'styled-components'

const NextSubjectWrapper = styled.div<{ background: string }>`
    border-radius: var(--brSemi);
    background: ${({ background }) => background};
    color: ${({ color }) => color};
    padding: 3px 8px;
    white-space: nowrap;
    font-size: 0.65rem;
    font-weight: 500;
`

interface Props {
    timeLeft: number
    isNext: boolean
    color: IColorPalette
    isCurrentEvent: boolean
}

const NextSubject = ({ timeLeft, isNext, color, isCurrentEvent }: Props) => {
    const hours = Math.floor(timeLeft / 60)
    const settings = useUnit(userSettingsModel.stores.userSettings)
    const theme = settings?.appearance.theme
    const textColor = theme === ThemeVariant.Light ? color.dark3 : color.light3
    const background = theme === ThemeVariant.Light ? color.transparent1 : color.transparent3

    if (!isNext && !isCurrentEvent) return null

    if (isCurrentEvent)
        return (
            <NextSubjectWrapper background={background} color={textColor}>
                Сейчас
            </NextSubjectWrapper>
        )

    return (
        <NextSubjectWrapper background={background} color={textColor}>
            через {!!hours && hours + 'ч.'} {timeLeft % 60}мин.
        </NextSubjectWrapper>
    )
}

export default NextSubject

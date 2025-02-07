import React from 'react'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { userSettingsModel } from '@entities/settings'

import { IColorPalette, ThemeVariant } from '@shared/consts'
import { pulse } from '@shared/global-styles'
import { MEDIA_QUERIES } from '@shared/ui/consts'

type Props = {
    timeInterval?: string
    color: IColorPalette
    isCurrentEvent: boolean
}

export const TimeIndicator = ({ timeInterval, color, isCurrentEvent }: Props) => {
    const settings = useUnit(userSettingsModel.stores.userSettings)
    const theme = settings?.appearance.theme
    const background = theme === ThemeVariant.Light ? color.main : color.light2
    return (
        <TimeIndicatorStyled>
            <TimeCircle start={isCurrentEvent} color={background} />
            {timeInterval && <TimeIntervalStyled>{timeInterval}</TimeIntervalStyled>}
        </TimeIndicatorStyled>
    )
}

const TimeCircle = styled.div`
    min-width: 10px;
    height: 10px;
    border-radius: 10px;
    background: ${({ color }) => color};
    position: relative;

    ${pulse}
`

const TimeIndicatorStyled = styled.div`
    display: flex;
    align-items: center;
    min-width: fit-content;
    gap: 6px;
`

const TimeIntervalStyled = styled.span`
    font-weight: 500;
    font-size: 0.8rem;

    ${MEDIA_QUERIES.isMobile} {
        font-size: 0.7rem;
    }
`

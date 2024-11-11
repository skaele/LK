import getTimeFromMinutes from '@shared/lib/dates/get-time-from-minutes'
import React from 'react'
import { getCurrentTime } from '../lib/get-time-in-minutes'
import { CurrentTime, CurrentTimeLineStyled } from './styles'
import { useCalcTimeLeft } from '@shared/lib/hooks/use-calc-time-left'

type Props = {
    isVisible?: boolean
    shift: number
    scale: number
    interval: [number, number]
    showTime?: boolean
}

export const CurrentTimeLine = ({ isVisible = true, shift, scale, interval, showTime = true }: Props) => {
    const currentTime = useCalcTimeLeft(
        () => getCurrentTime(new Date(), interval[0] * 60, interval[1] * 60),
        [isVisible],
    )

    return (
        <CurrentTimeLineStyled currentTime={(currentTime - shift) * scale}>
            {showTime && <CurrentTime>{getTimeFromMinutes(currentTime)}</CurrentTime>}
        </CurrentTimeLineStyled>
    )
}

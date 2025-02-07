import styled from 'styled-components'

<<<<<<<< HEAD:src/shared/ui/slider/styles.ts
import { MEDIA_QUERIES } from '../consts'
import { Size } from '../types'
========
import { MEDIA_QUERIES } from '@shared/constants'
import { Size } from '@shared/ui/types'

>>>>>>>> master:src/widgets/slider/styles.ts
import { HEIGHTS, RADIUSES } from './consts'
import { getValueFromSize } from './lib/get-value-from-size'

export const SliderWrapper = styled.div<{
    elementsVisible: number
    sliderWidth?: string
    appearance: boolean
    size: Size
}>`
    max-width: ${({ sliderWidth }) => sliderWidth ?? '100%'};
    width: 100%;
    min-height: calc(${getValueFromSize(HEIGHTS)} + 6px);
    padding: ${({ appearance }) => appearance && '3px'};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${({ appearance }) => appearance && 'var(--almostTransparent)'};
    border-radius: ${getValueFromSize(RADIUSES)};
    overflow-y: hidden;
    overflow-x: auto;
    scroll-snap-type: x proximity;
    font-size: 0.9em;

    .slider-body {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: ${getValueFromSize(HEIGHTS)};
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &:active .currentPage {
        transform: scale(0.9);
    }

    ${MEDIA_QUERIES.isTablet} {
        font-size: 11px;
        min-height: 40px;

        .slider-body {
            height: 34px;
        }
    }
`

import convertHorizontalAlign from '@shared/ui/list/lib/convert-horizontal-align'
import { Align } from '@shared/ui/types'
import styled from 'styled-components'

export const SliderPageWrapper = styled.div<{ width?: string; align: Align; maxWidth?: string }>`
    display: flex;
    align-items: ${({ align }) => convertHorizontalAlign(align)};
    flex-direction: column;
    width: ${({ width }) => width ?? '100%'};
    max-width: ${({ maxWidth }) => maxWidth ?? '100%'};
    height: 100%;

    & > .slider-content {
        display: flex;
        width: 100%;
        max-width: ${({ maxWidth }) => maxWidth ?? '100%'};
        overflow-x: auto;
        margin-top: 10px;
        scroll-snap-type: x mandatory;

        &::-webkit-scrollbar {
            display: none;
        }

        & > * + * {
            margin-left: 10px;
        }

        .slider-page {
            height: 100%;
            min-width: 100%;
            scroll-snap-align: center;
        }
    }

    @media (max-width: 1000px) {
        & > div {
            scroll-behavior: smooth;

            .slider-page {
                min-width: 100%;
                scroll-snap-align: center;
            }
        }
    }
`

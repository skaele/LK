import styled, { css } from 'styled-components'

const containerAspectRatioFallback = css`
    @supports not (aspect-ratio: 1/1) {
        height: 0;
        padding-top: 100%;

        position: relative;
        overflow: hidden;
    }
`
const imageAspectRatioFallback = css`
    @supports not (aspect-ratio: 1/1) {
        max-width: 100%;

        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }
`

export const Container = styled.div<{
    selected?: boolean
    width?: string
    height?: string
    marginRight?: string
    background?: string
    boxShadow?: string
    border?: boolean
    borderRadius?: number
    adaptive?: boolean
    centerHorizontally?: boolean
}>`
    border-radius: ${({ borderRadius }) => (borderRadius ? `${borderRadius}px` : '50%')};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ background }) => background ?? 'var(--almostTransparent)'};
    color: var(--text);
    border: ${({ selected, border }) => (selected || border) && '5px solid var(--theme)'};
    outline: ${({ selected }) => selected && '4px solid var(--reallyBlue)'};
    position: relative;

    width: ${({ width }) => width ?? '160px'};
    min-width: ${({ width }) => width ?? '160px'};
    height: ${({ height }) => height ?? '160px'};

    margin-right: ${({ marginRight }) => marginRight ?? '32px'};
    box-shadow: ${({ boxShadow }) => boxShadow ?? '0'};

    .icon {
        position: absolute;
        bottom: -2px;
        right: -5px;
        background: var(--theme);
        color: var(--text);
        padding: 2px;
        border-radius: 100%;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 12px;
            height: 12px;
        }
    }

    .checkbox {
        position: absolute;
        bottom: -9px;
        right: -9px;
    }

    .name {
        display: flex;
        height: 100%;
        width: 100%;
        color: #fff;
        font-size: ${({ width }) => (width ? parseInt(width) / 50 + 'em' : '3em')};
        align-items: center;
        justify-content: center;
        font-weight: 600;

        ${imageAspectRatioFallback}
    }

    @media (max-width: 1000px) {
        width: ${({ width }) => width ?? '75px'};
        min-width: ${({ width }) => width ?? '75px'};
        height: ${({ height }) => height ?? '75px'};
        margin-right: ${({ marginRight }) => marginRight ?? '15px'};

        .name {
            font-size: ${({ width }) => (width ? parseInt(width) / 50 + 'em' : '1.5em')};
        }
    }

    .notification {
        min-width: 30%;
        height: 30%;
    }

    ${({ centerHorizontally }) =>
        centerHorizontally &&
        css`
            position: relative;
            left: 50%;
            transform: translate3d(-50%, 0, 0);
        `}

    ${({ adaptive }) =>
        adaptive &&
        css`
            @media (max-width: 450px) {
                width: 100%;
                height: 100%;
                min-width: 75px;
                aspect-ratio: 1/1;

                ${containerAspectRatioFallback}
            }
        `}
`

export const Img = styled.img<{ round?: boolean; adaptive?: boolean }>`
    width: 100%;
    height: 100%;
    border-radius: ${({ round }) => round && '100%'};

    object-fit: cover;
    object-position: center;

    ${({ adaptive }) =>
        adaptive &&
        css`
            @media (max-width: 450px) {
                ${imageAspectRatioFallback}
            }
        `}
`

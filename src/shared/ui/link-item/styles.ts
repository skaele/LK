import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Colors, IColorPalette, MEDIA_QUERIES, ThemeType } from '@shared/constants'
import Badge from '../badge'
import { LinkItemType } from './types'
import { getBoxShadow } from './lib/get-box-shadow'

export const LinkItemLink = styled(Link)<{ orientation: LinkItemType; isDoubleSize: boolean }>`
    width: ${({ orientation, isDoubleSize }) =>
        orientation === 'horizontal' ? '100%' : isDoubleSize ? '258px' : '125px'};
    border-radius: 10px;
    border: none;

    ${MEDIA_QUERIES.isMobile} {
        width: ${({ orientation, isDoubleSize }) =>
            orientation === 'horizontal' ? '100%' : isDoubleSize ? 'calc(66vw - 23px)' : 'calc(33vw - 15px)'};
    }
`

export const ItemTitle = styled.div<{ smallInMobile: boolean; orientation: LinkItemType; showFullTitle: boolean }>`
    text-align: ${({ orientation }) => (orientation === 'horizontal' ? 'left' : 'center')};
    hyphens: auto;
    width: 100%;
    display: ${({ orientation }) => (orientation === 'horizontal' ? 'inline' : 'flex')};
    align-items: center;
    justify-content: center;
    font-size: ${({ orientation }) => (orientation === 'horizontal' ? '1rem' : '0.80rem')};
    height: ${({ orientation }) => (orientation === 'horizontal' ? 'fit-content' : '26px')};
    white-space: ${({ showFullTitle }) => (showFullTitle ? 'normal' : 'nowrap')};
    text-overflow: ${({ showFullTitle }) => (showFullTitle ? 'unset' : 'ellipsis')};
    overflow: ${({ showFullTitle }) => (showFullTitle ? 'visible' : 'hidden')};

    ${MEDIA_QUERIES.isMobile} {
        font-size: ${({ orientation, smallInMobile }) =>
            smallInMobile ? '0.6rem' : orientation === 'horizontal' ? '1rem' : '0.80rem'};
        height: ${({ orientation }) => (orientation === 'horizontal' ? 'fit-content' : '14px')};
    }
`

export const Icon = styled.div<{
    smallInMobile: boolean
    pallete: IColorPalette
    showBackground: boolean
    theme: ThemeType
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ pallete, theme }) => (theme === 'light' ? pallete.dark2 : pallete.light3)};
    padding: ${({ showBackground }) => (showBackground ? '9px' : '0')};
    position: relative;

    &::before {
        content: '';
        transition: 0.4s;
        display: block;
        position: absolute;
        padding: ${({ showBackground }) => (showBackground ? '9px' : '0')};
        border-radius: ${({ showBackground }) => (showBackground ? '15px' : '0')};
        width: ${({ showBackground }) => (!showBackground ? '19px' : '22px')};
        height: ${({ showBackground }) => (!showBackground ? '19px' : '22px')};
        background: ${({ showBackground, pallete }) => (showBackground ? pallete.transparent2 : 'transparent')};
    }

    svg {
        transition: 0.3s transform;

        width: ${({ showBackground }) => (!showBackground ? '21px' : '22px')};
        height: ${({ showBackground }) => (!showBackground ? '21px' : '22px')};
    }

    ${MEDIA_QUERIES.isMobile} {
        &::before {
            width: ${({ showBackground, smallInMobile }) =>
                !showBackground ? '19px' : smallInMobile ? '10px' : '22px'};
            height: ${({ showBackground, smallInMobile }) =>
                !showBackground ? '19px' : smallInMobile ? '10px' : '22px'};
            border-radius: ${({ showBackground, smallInMobile }) =>
                showBackground ? (smallInMobile ? '8px' : '15px') : '0'};
        }

        svg {
            width: ${({ showBackground, smallInMobile }) =>
                !showBackground ? '21px' : smallInMobile ? '17px' : '22px'};
            height: ${({ showBackground, smallInMobile }) =>
                !showBackground ? '21px' : smallInMobile ? '17px' : '22px'};
        }
    }
`

export const NotificationBadge = styled(Badge)`
    position: absolute;
    bottom: -6px;
    right: -6px;
    outline: 3px solid var(--block-content);
    transition: 0.2s transform, 0.2s opacity;
`

export const MoreIcon = styled.div<{ orientation: LinkItemType }>`
    position: absolute;
    top: ${({ orientation }) => (orientation === 'vertical' ? '10px' : '50%')};
    transform: ${({ orientation }) => (orientation === 'vertical' ? 'translateY(0)' : 'translateY(-50%)')};
    right: 8px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ orientation }) => (orientation === 'horizontal' ? 'var(--theme-2)' : 'transparent')};
    border-radius: 20px;
    opacity: 0;
    z-index: 10;

    @media (hover: hover) {
        &:hover {
            background: var(--theme-2);
        }
    }

    @media (hover: none) {
        opacity: 1;
    }
`

export const LinkItemStyled = styled.div<{
    disabled: boolean
    background: string
    color: string
    type: LinkItemType
    showBoxShadow: boolean
    height?: string
    minWidth?: string
    smallInMobile: boolean
}>`
    color: var(--text);
    font-weight: 500;
    width: 100%;
    min-width: ${({ minWidth }) => minWidth};
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    color: ${({ color }) => color};
    background: ${({ background }) => background};
    justify-content: space-between;
    align-items: center;
    opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
    box-shadow: ${getBoxShadow};
    height: ${({ type, height }) => (type === 'horizontal' ? 'fit-content' : height ?? '135px')};
    position: relative;
    padding: 10px;

    ${MEDIA_QUERIES.isMobile} {
        padding: ${({ type }) => (type === 'vertical' ? '4px' : '10px')};
        min-width: ${({ smallInMobile, minWidth }) => (smallInMobile ? '90px' : minWidth)};
    }

    @media (hover: hover) {
        &:hover {
            filter: ${({ type }) => (type === 'horizontal' ? 'brightness(0.96)' : 'none')};
        }

        &:hover ${Icon} {
            &::before {
                transform: scale(7.5);
            }

            svg {
                transform: ${({ type }) => (type === 'vertical' ? 'scale(1.3) ' : 'scale(1)')};
            }
        }

        &:hover ${NotificationBadge} {
            transform: scale(0.8);
            opacity: 0;
        }

        &:hover ${MoreIcon} {
            opacity: 1;
        }
    }

    @media (hover: none) {
        &:active ${Icon} {
            &::before {
                transform: scale(7);
            }

            svg {
                transform: ${({ type }) => (type === 'vertical' ? 'scale(1.3) ' : 'scale(1)')};
            }
        }
    }
`

export const LinkIcon = styled.div<{ isHorizontal: boolean }>`
    position: absolute;
    top: ${({ isHorizontal }) => (isHorizontal ? '4px' : '8px')};
    right: ${({ isHorizontal }) => (isHorizontal ? 'auto' : '8px')};
    left: ${({ isHorizontal }) => (!isHorizontal ? 'auto' : '28px')};
    opacity: 0.5;
    transform: scale(${({ isHorizontal }) => (isHorizontal ? '0.8' : '1')});
    z-index: 1;
`

export const NewPageIndication = styled.div<{
    orientation: LinkItemType
}>`
    position: absolute;
    left: ${({ orientation }) => (orientation === 'horizontal' ? '12px' : '4px')};
    top: ${({ orientation }) => (orientation === 'horizontal' ? '6px' : '4px')};
    background: ${Colors.red.main};
    color: #fff;
    font-weight: 600;
    padding: 2px 6px;
    font-size: 0.6rem;
    border-radius: 5px;
    transform: ${({ orientation }) => (orientation === 'horizontal' ? 'scale(0.65)' : 'scale(1)')};
`

export const AdminPageIndication = styled(NewPageIndication)`
    background: ${Colors.pink.main};
`

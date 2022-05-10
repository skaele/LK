import { Colors } from '@consts'
import { Align, MessageType } from '@ui/types'
import styled from 'styled-components'
import { getColor } from './lib/get-color'

export const MessageWrapper = styled.div<{
    type: MessageType
    align?: Align
    width?: string
    maxWidth?: string
    padding?: string
    fontSize?: string
    gap?: string
}>`
    width: ${({ width }) => width ?? '100%'};
    max-width: ${({ maxWidth }) => maxWidth ?? 'none'};
    font-size: ${({ fontSize }) => fontSize ?? '0.8em'};
    padding: ${({ padding }) => padding ?? '10px'};
    color: ${({ type }) => Colors[getColor(type)].main};
    background: ${({ type }) => Colors[getColor(type)].lightTransparent};
    border-radius: var(--brLight);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 500;
    align-items: ${({ align }) => (align === 'left' ? 'flex-start' : align === 'center' ? 'center' : 'flex-end')};

    .info-text {
        display: flex;
        flex-direction: column;
        gap: ${({ gap }) => gap ?? 0};
    }
`

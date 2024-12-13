import { Align } from '@ui/types'
import styled from 'styled-components'

const Subtext = styled.span<{
    width?: string
    maxWidth?: string
    visible?: boolean
    fontSize?: string
    align?: Align
    lineHeight?: string
    color?: string
    padding?: string
}>`
    width: ${({ width }) => width ?? 'fit-content'};
    min-width: ${({ width }) => width ?? 'fit-content'};
    max-width: ${({ maxWidth }) => maxWidth ?? 'fit-content'};
    font-size: ${({ fontSize }) => fontSize ?? '0.8em'};
    font-weight: 500;
    opacity: 0.7;
    text-align: ${({ align }) => align ?? 'left'};
    color: ${({ color }) => color};
    display: ${({ visible }) => !(visible ?? true) && 'none'};
    line-height: ${({ lineHeight }) => lineHeight};
    word-wrap: break-word;
    overflow-wrap: normal;
    padding: ${({ padding }) => padding};
`

export default Subtext

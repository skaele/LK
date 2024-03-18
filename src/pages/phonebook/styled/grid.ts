import styled from 'styled-components'

type Props = {
    columns: string
    rows: string
    rowGap?: string
    columnGap?: string
}

export const Grid = styled.div<Props>`
    width: 100%;
    display: grid;
    grid-template-columns: ${({ columns }) => columns};
    grid-template-rows: ${({ rows }) => rows};
    row-gap: ${({ rowGap }) => rowGap};
    column-gap: ${({ columnGap }) => columnGap};
`

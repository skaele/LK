import styled from 'styled-components'

export const EmptyDiv = styled.div<{ height: number }>`
    width: 100%;
    height: ${({ height }) => height}vh;

    transition: height 0.2s ease-out;
`

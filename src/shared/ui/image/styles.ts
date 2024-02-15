import styled from 'styled-components'

export const ImageWrapper = styled.img<{ width: string; height: string }>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`

import React from 'react'
import styled from 'styled-components'

export type SpacingProps = React.HTMLAttributes<HTMLDivElement> & {
    size?: number
}

const BaseSpacing = styled.div<{ size: number }>`
    height: ${({ size }) => size}px;
    padding: ${({ size }) => size / 2}px;
`

/**
 * Vertical block spacing
 */
const Spacing = ({ size = 8, ...restProps }: SpacingProps) => {
    return <BaseSpacing size={size} {...restProps} />
}

export default Spacing

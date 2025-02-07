import styled from 'styled-components'

import { Colors, IColors } from '@shared/consts'

export const ColofrulText = styled.span<{ color: keyof IColors }>`
    color: ${({ color }) => (Colors[color as keyof IColors] ? Colors[color as keyof IColors].main : (color as string))};
`

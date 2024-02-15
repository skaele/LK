import { Colors } from '@shared/constants'
import styled from 'styled-components'

const Badge = styled.div<{ visible?: boolean }>`
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    height: 16px;
    min-width: 16px;
    padding: 0 4px;
    border-radius: 12px;
    background: ${Colors.red.light1};
    color: #fff;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    font-size: 0.65rem;
`

export default Badge

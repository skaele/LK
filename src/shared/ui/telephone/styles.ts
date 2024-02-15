import { Colors } from '@shared/constants'
import styled from 'styled-components'

export const TelephoneStyled = styled.a`
    border-radius: 7px;
    font-weight: 500;
    font-style: normal;
    color: var(--blue) !important;
    width: fit-content;
    font-size: 0.85rem;
    text-decoration: none !important;
    display: inline-block;
    padding: 4px 10px;
    padding-left: 24px;
    position: relative;
    background: ${Colors.blue.transparent3};

    svg {
        position: absolute;
        width: 16px;
        height: 16px;
        left: 4px;
    }

    &:hover {
        background: ${Colors.blue.transparent2};
    }
`

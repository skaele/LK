import React from 'react'
import { HiOutlineChatAlt2 } from 'react-icons/hi'

import styled from 'styled-components'

const EmptyHereWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--text);
    opacity: 0.5;
    font-weight: 500;
    font-size: 0.86em;
    gap: 4px;

    svg {
        width: 100px;
        height: 100px;
    }
`

interface Props {
    message?: string
}

const EmptyHere = ({ message = 'Выберите чат' }: Props) => {
    return (
        <EmptyHereWrapper>
            <HiOutlineChatAlt2 />
            <span>{message}</span>
        </EmptyHereWrapper>
    )
}

export default EmptyHere

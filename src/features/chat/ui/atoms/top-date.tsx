import { Title } from '@ui/atoms'
import React from 'react'
import styled from 'styled-components'

const TopDateWrapper = styled.div`
    margin: 5px 0 10px 0;
    color: var(--text);
    position: sticky;
    top: 10px;
    z-index: 10;

    h5 {
        background: var(--search);
        padding: 6px 12px;
        border-radius: var(--brSemi);
        display: inline-block;
        font-weight: 500;
        font-size: 0.8rem;
    }
`

interface Props {
    date: string | null
}

const TopDate = ({ date }: Props) => {
    if (!date) return null

    return (
        <TopDateWrapper>
            <Title size={5}>{date}</Title>
        </TopDateWrapper>
    )
}

export default TopDate

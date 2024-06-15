import React from 'react'
import styled from 'styled-components'

const TopDateWrapper = styled.div`
    margin-top: 30px;
    margin-bottom: 10px;
    color: var(--text);
    position: sticky;
    top: 10px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        background: var(--theme);
        padding: 6px 12px;
        border-radius: var(--brSemi);
        display: inline-block;
        font-weight: 500;
        font-size: 0.8rem;
        color: var(--theme-mild-opposite);
    }
`

interface Props {
    date: string | null
}

const TopDate = ({ date }: Props) => {
    if (!date) return null

    return (
        <TopDateWrapper>
            <span>{date}</span>
        </TopDateWrapper>
    )
}

export default TopDate

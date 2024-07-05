import styled from 'styled-components'

export const ChipsStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

export const ChipItemStyled = styled.div`
    padding: 4px 8px;
    border-radius: 4px;
    background: var(--search);
    color: var(--text);
    opacity: 0.8;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;

    &.current {
        background: var(--reallyBlue);
        color: #fff;
        opacity: 1;
    }
`

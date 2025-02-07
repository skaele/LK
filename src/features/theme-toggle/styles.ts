import styled from 'styled-components'

export const IconWrapper = styled.div<{ background: string; width?: string }>`
    min-width: ${({ width }) => width ?? '35px'};
    height: ${({ width }) => width ?? '35px'};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: #fff;
    background: ${({ background }) => background ?? 'var(--almostTransparent)'};

    @media (max-width: 1000px) {
        background: none;
        color: var(--text);
        /* color: ${({ background }) => background ?? 'var(--almostTransparent)'}; */
    }
`

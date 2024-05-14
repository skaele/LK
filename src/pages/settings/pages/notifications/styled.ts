import styled from 'styled-components'

export const TogglesWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100%;
    margin-left: 8px;
    padding-left: 6px;

    &::before {
        content: '';
        position: absolute;
        display: block;
        width: 3px;
        background-color: var(--blue);
        height: 100%;
        border-radius: 2px;
    }
`

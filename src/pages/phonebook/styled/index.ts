import { MEDIA_QUERIES } from '@shared/constants'
import styled from 'styled-components'

export const Header = styled.div<{ padingLeft?: string }>`
    display: flex;
    flex-direction: column-reverse;
    color: #fff;
    padding: 10px;
    min-height: 120px;
    padding-left: ${({ padingLeft }) => padingLeft || '30px'};

    ${MEDIA_QUERIES.isNotMobile} {
        width: 500px;
    }
`

export const Wrapper = styled.div`
    width: 500px;
    padding: 40px 35px 20px 35px;
`

export const Content = styled.div<{ padingLeft?: string }>`
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-width: 100%;
    padding-bottom: 10px;
    padding-left: ${({ padingLeft }) => padingLeft};
`

export const Subtitle = styled.h4`
    opacity: 0.7;
    font-weight: 400;
    font-size: 1.17rem;
    line-height: 28px;
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 8px;

    a {
        width: 100%;
    }
    button {
        width: 100%;
    }
`

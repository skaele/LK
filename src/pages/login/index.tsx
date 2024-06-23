import React from 'react'
import styled from 'styled-components'
import LoginBlock from './ui/organisms/login-block'

const LoginWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme);
    flex-direction: column;
`

const LoginPage = () => {
    return (
        <LoginWrapper>
            <LoginBlock />
        </LoginWrapper>
    )
}

export default LoginPage

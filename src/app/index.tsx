import { releaseClear } from '@entities/release/utils'
import useTheme from '@shared/lib/hooks/use-theme'
import ErrorBoundary from '@shared/ui/error-boundary'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import styled from 'styled-components'
import { ModalProvider } from 'widgets/modal/lib'
import Router from './routers/router'

console.log('feat running')

const Background = styled.div`
    background: var(--theme);
    overflow-y: auto;
    flex: 1;
    display: flex;
    width: 100%;
`

releaseClear()

const App = () => {
    useTheme()

    return (
        <ModalProvider>
            <HashRouter basename="/">
                <Background>
                    <ErrorBoundary>
                        <Router />
                    </ErrorBoundary>
                </Background>
            </HashRouter>
        </ModalProvider>
    )
}

export default App

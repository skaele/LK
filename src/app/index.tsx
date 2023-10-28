import useTheme from '@shared/lib/hooks/use-theme'
import { appStarted } from '@shared/models/app-started'
import ErrorBoundary from '@shared/ui/error-boundary'
import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import styled from 'styled-components'
import { ModalProvider } from 'widgets/modal/lib'
import Router from './routers/router'

const Background = styled.div`
    background: var(--theme);
    overflow-y: auto;
    flex: 1;
    display: flex;
    width: 100%;
`

const App = () => {
    useTheme()

    useEffect(() => {
        appStarted()
    }, [])

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

import { appStarted } from '@shared/models/app-started'
import ErrorBoundary from '@shared/ui/error-boundary'
import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import { ModalProvider } from 'widgets/modal/lib'
import Router from './routers/router'

const App = () => {
    useEffect(() => {
        appStarted()
    }, [])

    return (
        <ModalProvider>
            <HashRouter basename="/">
                <ErrorBoundary>
                    <Router />
                </ErrorBoundary>
            </HashRouter>
        </ModalProvider>
    )
}

export default App

import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import 'react-virtualized/styles.css'

import { ModalProvider } from 'widgets/modal/lib'

import { appStarted } from '@shared/models/app-started'
import ErrorBoundary from '@shared/ui/error-boundary'

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

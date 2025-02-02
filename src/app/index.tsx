import React, { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import 'react-virtualized/styles.css'

import { appStarted } from '@shared/consts/models/app-started'
import ErrorBoundary from '@shared/ui/error-boundary'
import { ModalProvider } from '@shared/ui/modal'

import Router from './routing/router'

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

// APP
// ROUTER (ROUTES + ROUTER)
// PAGE
// WIDGET (LAYOUT + OTHER)
// ...

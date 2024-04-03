import React, { Component, ErrorInfo, ReactNode } from 'react'
import { CodeError } from '../code-error'

const hmrErrorMessage = /Cannot access 'get' before initialization/
const chunkFailedMessage = /Failed to fetch dynamically imported module/

interface Props {
    children?: ReactNode
}

interface State {
    hasError: boolean
    error: Error | null
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    }

    public static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // eslint-disable-next-line no-console
        console.error('Uncaught error:', error, errorInfo)

        if (error?.message && (chunkFailedMessage.test(error.message) || hmrErrorMessage.test(error.message))) {
            window.location.reload()
        }
    }

    public render() {
        if (this.state.hasError) {
            return <CodeError error={this.state.error!} />
        }

        return this.props.children
    }
}

export default ErrorBoundary

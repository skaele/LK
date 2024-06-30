import { trackPageVisibility } from '@withease/web-api'
import { appStarted } from './app-started'

export const pageVisibility = trackPageVisibility({
    setup: appStarted,
})

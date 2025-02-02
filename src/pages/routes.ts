import { lazy } from 'react'

import AppearanceSettings from '@pages/settings/pages/appearance'
import MainPageSettings from '@pages/settings/pages/main-page'
import MenuSettings from '@pages/settings/pages/menu'
import NotificationsSettings from '@pages/settings/pages/notifications'
import PersonalSettings from '@pages/settings/pages/personal'
import { TutorialSettings } from '@pages/settings/pages/tutorial'

import { PageRoute } from '@shared/routing'

export const ScheduleCurrent = lazy(() => import('@pages/schedule/ui/current-schedule'))
export const ScheduleSemester = lazy(() => import('@pages/schedule/ui/semestr-schedule'))
export const ScheduleSession = lazy(() => import('@pages/schedule/ui/session-schedule'))
export const ScheduleRetake = lazy(() => import('@pages/schedule/ui/retake-schedule'))

export const schedulePages: PageRoute = {
    'schedule-current': ScheduleCurrent,
    'schedule-semestr': ScheduleSemester,
    'schedule-session': ScheduleSession,
    'schedule-retake': ScheduleRetake,
}

export const settingsPages: PageRoute = {
    'settings-appearance': AppearanceSettings,
    'settings-personal': PersonalSettings,
    'settings-home-page': MainPageSettings,
    'settings-customize-menu': MenuSettings,
    'settings-notifications': NotificationsSettings,
    'settings-tutorial': TutorialSettings,
}

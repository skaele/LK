import React from 'react'

import SettingsPage from '@pages/settings'
import AppearanceSettings from '@pages/settings/pages/appearance'
import MainPageSettings from '@pages/settings/pages/main-page'
import MenuSettings from '@pages/settings/pages/menu'
import NotificationsSettings from '@pages/settings/pages/notifications'
import PersonalSettings from '@pages/settings/pages/personal'
import { TutorialSettings } from '@pages/settings/pages/tutorial'

import { PageRoute } from '@shared/routing'

import {
    AlertsPage,
    AllPages,
    AllStudentsPage,
    AllTeachersPage,
    ChatPage,
    DecreisDirectivesPage,
    ElectronicInteractionAgreementPage,
    FeedbackPage,
    HelpfulInformation,
    Home,
    InstructionsPage,
    LkNotificationsPage,
    ProfilePage,
    SafetyInformation,
    ScheduleCurrent,
    SchedulePage,
    ScheduleRetake,
    ScheduleSemester,
    ScheduleSession,
    TechnicalMaintenance,
} from './pages'

export const generalRoutes: PageRoute = {
    all: AllPages,
    doclist: DecreisDirectivesPage,
    alerts: AlertsPage,
    home: Home,
    settings: SettingsPage,
    profile: ProfilePage,
    'lk-notifications': LkNotificationsPage,
    'electronic-interaction-agreement': ElectronicInteractionAgreementPage,
    chat: ChatPage,
    'specific-chat': ChatPage,
    schedule: SchedulePage,
    'all-students': AllStudentsPage,
    feedback: FeedbackPage,
    instructions: InstructionsPage,
    vaccination: () => {
        React.useEffect(() => {
            window.location.replace('https://e.mospolytech.ru/old/index.php?p=vaccination')
        }, [])

        return null
    },
    'safety-information': SafetyInformation,
    'technical-maintenance': TechnicalMaintenance,
}

export const scheduleRoutes: PageRoute = {
    'schedule-current': ScheduleCurrent,
    'schedule-semestr': ScheduleSemester,
    'schedule-session': ScheduleSession,
    'schedule-retake': ScheduleRetake,
}

export const generalHiddenRoutes: PageRoute = {
    // 'teachers-schedule':  TeachersSchedule,
    'schedule-filter': SchedulePage,
    ...scheduleRoutes,
    'filtered-all-students': AllStudentsPage,
    // move to student's after #ASM
    'filtered-all-teachers': AllTeachersPage,

    'settings-appearance': AppearanceSettings,
    'settings-personal': PersonalSettings,
    'settings-home-page': MainPageSettings,
    'settings-customize-menu': MenuSettings,
    'settings-notifications': NotificationsSettings,
    'settings-tutorial': TutorialSettings,

    'useful-info-template': HelpfulInformation,
}

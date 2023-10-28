import { ThemeVariant, REQUIRED_LEFTSIDE_BAR_CONFIG } from '@shared/constants'
import { OldNameSettings, Param, SettingsOldType } from '../model'

const NOTIFICATIONS_DEFAULT_VALUE = {
    all: true,
    messages: true,
    newVersion: true,
    schedule: true,
    news: true,
    applications: true,
    doclist: true,
}

export type NotificationsSettingsType = typeof NOTIFICATIONS_DEFAULT_VALUE

const generateDefaultSettings = () => {
    return (Object.keys(OldNameSettings) as (keyof typeof OldNameSettings)[]).reduce((acc, el) => {
        acc[el] = {
            id: el,
            property: {},
        }
        return acc
    }, {} as Param)
}

const getDefaultSettings = (userId = ''): SettingsOldType => ({
    [userId]: {
        ...generateDefaultSettings(),
        [OldNameSettings['settings-appearance']]: {
            id: OldNameSettings['settings-appearance'],
            property: {
                theme: ThemeVariant.Dark,
                scheduledLightTheme: false,
                lightThemeRange: ['300', '1140'],
            },
        },
        [OldNameSettings['settings-home-page']]: {
            id: OldNameSettings['settings-home-page'],
            property: {
                pages: ['settings', 'profile', 'chat', 'schedule', 'payments', 'project-activity', 'all-students'],
                widgetSchedule: true,
                widgetPayment: true,
                news: true,
            },
        },
        [OldNameSettings['settings-customize-menu']]: {
            id: OldNameSettings['settings-customize-menu'],
            property: {
                pages: REQUIRED_LEFTSIDE_BAR_CONFIG,
            },
        },
        [OldNameSettings['settings-notifications']]: {
            id: OldNameSettings['settings-notifications'],
            property: NOTIFICATIONS_DEFAULT_VALUE,
        },
    },
})

export default getDefaultSettings

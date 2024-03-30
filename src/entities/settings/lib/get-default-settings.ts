import { ThemeVariant, REQUIRED_LEFTSIDE_BAR_CONFIG, REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG } from '@shared/constants'
import { UserSettings } from '../types'

// const generateDefaultSettings = () => {
//     return (Object.keys(OldNameSettings) as (keyof typeof OldNameSettings)[]).reduce((acc, el) => {
//         acc[el] = {
//             id: el,
//             property: {},
//         }
//         return acc
//     }, {} as Param)
// }

// const getDefaultSettings = (userId = ''): SettingsOldType => ({
//     [userId]: {
//         ...generateDefaultSettings(),
//         [OldNameSettings['settings-appearance']]: {
//             id: OldNameSettings['settings-appearance'],
//             property: {
//                 theme: ThemeVariant.Dark,
//                 scheduledLightTheme: false,
//                 lightThemeRange: ['300', '1140'],
//             },
//         },
//         [OldNameSettings['settings-home-page']]: {
//             id: OldNameSettings['settings-home-page'],
//             property: {
//                 pages: ['settings', 'profile', 'chat', 'schedule', 'payments', 'project-activity', 'all-students'],
//                 widgetSchedule: true,
//                 widgetPayment: true,
//                 news: true,
//             },
//         },
//         [OldNameSettings['settings-customize-menu']]: {
//             id: OldNameSettings['settings-customize-menu'],
//             property: {
//                 pages: REQUIRED_LEFTSIDE_BAR_CONFIG,
//             },
//         },
//         [OldNameSettings['settings-notifications']]: {
//             id: OldNameSettings['settings-notifications'],
//             property: NOTIFICATIONS_DEFAULT_VALUE,
//         },
//     },
// })

// TODO: default settings for employees and students should be different
export const getDefaultNewSettings = (isEmployee: boolean): UserSettings => {
    // get default theme from user preferences
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeVariant.Dark : ThemeVariant.Light

    return {
        appearance: {
            theme,
        },
        customizeMenu: {
            pages: isEmployee ? REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG : REQUIRED_LEFTSIDE_BAR_CONFIG,
        },
        homePage: {
            pages: ['settings', 'profile', 'chat', 'schedule', 'payments', 'project-activity', 'all-students'],
            hasSchedule: true,
            hasPayment: true,
            hasNews: true,
        },
        notifications: {
            all: true,
            messages: true,
            applications: true,
            doclist: true,
            newVersion: true,
            news: true,
            schedule: true,
        },
        syncAcrossAllDevices: false,
    }
}

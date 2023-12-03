import { ThemeVariant } from '@shared/constants'

// TODO: split to separate types after approval
export type UserSettings = {
    appearance: {
        theme: ThemeVariant
    }
    customizeMenu: {
        // TODO: set type as keys of paths ids
        pages: string[]
    }
    homePage: {
        pages: string[]
        hasSchedule: boolean
        hasPayment: boolean
        hasNews: boolean
    }
    notifications: {
        all: boolean
        messages: boolean
        newVersion: boolean
        schedule: boolean
        news: boolean
        applications: boolean
        doclist: boolean
    }
}

export enum OldNameSettings {
    'settings-home-page' = 'settings-home-page',
    'settings-personal' = 'settings-personal',
    'settings-appearance' = 'settings-appearance',
    'settings-customize-menu' = 'settings-customize-menu',
    'settings-notifications' = 'settings-notifications',
}

export type Param = {
    [key in OldNameSettings]: {
        id: string
        property: {
            [key: string]: ThemeVariant | string[] | boolean
        }
    }
}

export type SettingsOldType = {
    [key: string]: Param
}

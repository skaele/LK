import { ThemeVariant } from '@shared/consts'

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

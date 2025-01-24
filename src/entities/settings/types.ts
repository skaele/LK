import * as z from 'zod'

import { ThemeVariant } from '@shared/constants'

import { UserSettingsSchema } from './constants'

export type UserSettings = z.infer<typeof UserSettingsSchema>

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

import { useStore } from 'effector-react/compat'
import { createEvent, createStore } from 'effector'
import { createEffect } from 'effector'
import { ThemeVariant } from '@shared/constants'
import getDefaultSettings from '../lib/get-default-settings'
import { BrowserStorageKey } from '@shared/constants/browser-storage-key'
import './users-settings-model'

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

interface SettingsStore {
    settings: SettingsOldType
    error: string | null
    completed: boolean
}

const DEFAULT_STORE: SettingsStore = {
    settings: getDefaultSettings(),
    error: null,
    completed: false,
}

let currentUser: string

const useSettings = () => {
    return {
        settings: useStore($settingsStore).settings[currentUser],
        error: useStore($settingsStore).error,
        completed: useStore($settingsStore).completed,
    }
}

const actualizeSettings = (settings: Param | undefined, defaultSettings: Param) => {
    if (!settings) return defaultSettings
    const result = { ...settings }

    for (const key in defaultSettings) {
        if (result[key as OldNameSettings] === undefined) {
            result[key as OldNameSettings] = defaultSettings[key as OldNameSettings]
        }
    }

    return result
}

const getLocalSettingsFx = createEffect((userId: string): Param => {
    currentUser = userId
    const localSettings = JSON.parse(localStorage.getItem(BrowserStorageKey.OldSettings) ?? '{}')[currentUser] as Param
    return actualizeSettings(localSettings, getDefaultSettings(userId)[userId])
})

const updateSetting = createEvent<{
    nameSettings: keyof typeof OldNameSettings
    nameParam: string
    value: string | boolean | string[]
}>()

const changeCompleted = createEvent<{ completed: boolean }>()

const clearStore = createEvent()

const $settingsStore = createStore<SettingsStore>(DEFAULT_STORE)
    .on(changeCompleted, (oldData, newData) => ({
        ...oldData,
        completed: newData.completed,
    }))
    .on(getLocalSettingsFx.doneData, (oldData, newData) => ({
        ...oldData,
        settings: {
            [currentUser]: newData,
        },
    }))
    .on(updateSetting, (oldData, { nameSettings, nameParam, value }) => ({
        ...oldData,
        settings: {
            [currentUser]: {
                ...oldData.settings[currentUser],
                [nameSettings]: {
                    ...oldData.settings[currentUser][nameSettings],
                    property: {
                        ...oldData.settings[currentUser][nameSettings].property,
                        [nameParam]: value,
                    },
                },
            },
        },
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

$settingsStore.watch((state) => {
    if (state !== DEFAULT_STORE && !!currentUser) {
        const allSettings = JSON.parse(localStorage.getItem(BrowserStorageKey.OldSettings) ?? JSON.stringify({}))
        allSettings[currentUser] = state.settings[currentUser]
        localStorage.setItem(BrowserStorageKey.OldSettings, JSON.stringify(allSettings))
    }
})

export const selectors = {
    useSettings,
}

export const events = {
    updateSetting,
    changeCompleted,
    clearStore,
}

export const effects = {
    getLocalSettingsFx,
}

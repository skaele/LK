import { useStore } from 'effector-react/compat'
import { attach, createEvent, createStore, sample } from 'effector'
import { ThemeType } from '@shared/constants'
import getDefaultSettings from '../lib/get-default-settings'
import { BrowserStorageKey } from '@shared/constants/browser-storage-key'
import { userModel } from '@entities/user'
import { $userStore } from '@entities/user/model'

export enum NameSettings {
    'settings-home-page' = 'settings-home-page',
    'settings-personal' = 'settings-personal',
    'settings-appearance' = 'settings-appearance',
    'settings-customize-menu' = 'settings-customize-menu',
    'settings-notifications' = 'settings-notifications',
}

export type Param = {
    [key in NameSettings]: {
        id: string
        property: {
            [key: string]: ThemeType | string[] | boolean
        }
    }
}

export type SettingsType = {
    [key: string]: Param
}

interface SettingsStore {
    settings: SettingsType
    error: string | null
    completed: boolean
}

const DEFAULT_STORE: SettingsStore = {
    settings: getDefaultSettings(),
    error: null,
    completed: false,
}

const useSettings = () => {
    const { currentUser } = useStore(userModel.stores.$userStore)
    return {
        settings: useStore($settingsStore).settings[currentUser?.id ?? ''],
        error: useStore($settingsStore).error,
        completed: useStore($settingsStore).completed,
    }
}

const actualizeSettings = (settings: Param | undefined, defaultSettings: Param) => {
    if (!settings) return defaultSettings
    const result = { ...settings }

    for (const key in defaultSettings) {
        if (result[key as NameSettings] === undefined) {
            result[key as NameSettings] = defaultSettings[key as NameSettings]
        }
    }

    return result
}

const getLocalSettingsFx = attach({
    source: $userStore,
    effect: ({ currentUser }): Param => {
        const userId = currentUser?.id ?? ''
        const localSettings = JSON.parse(localStorage.getItem(BrowserStorageKey.NewSettings) ?? '{}')[userId] as Param
        return actualizeSettings(localSettings, getDefaultSettings(userId)[userId])
    },
})

sample({
    clock: $userStore,
    target: getLocalSettingsFx,
})

const updateSetting = createEvent<{
    nameSettings: keyof typeof NameSettings
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
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))

sample({
    clock: getLocalSettingsFx.doneData,
    source: {
        settings: $settingsStore,
        user: userModel.stores.$userStore,
    },
    fn: ({ settings: oldData, user }, newData) => {
        const currentUser = user.currentUser?.id ?? ''

        return {
            ...oldData,
            settings: {
                [currentUser]: newData,
            },
        }
    },
    target: $settingsStore,
})

sample({
    clock: updateSetting,
    source: {
        settings: $settingsStore,
        user: userModel.stores.$userStore,
    },
    fn: ({ settings: oldData, user }, { nameSettings, nameParam, value }) => {
        const currentUser = user.currentUser?.id ?? ''

        return {
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
        }
    },
    target: $settingsStore,
})

sample({
    source: {
        settings: $settingsStore,
        user: userModel.stores.$userStore,
    },
    fn: ({ settings: state, user }) => {
        const currentUser = user?.currentUser?.id ?? ''
        if (state !== DEFAULT_STORE && !!currentUser) {
            const allSettings = JSON.parse(localStorage.getItem(BrowserStorageKey.NewSettings) ?? JSON.stringify({}))
            allSettings[currentUser] = state.settings[currentUser]
            localStorage.setItem(BrowserStorageKey.NewSettings, JSON.stringify(allSettings))
        }
    },
})

$settingsStore.watch(console.log)

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

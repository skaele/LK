import { $userStore } from '@entities/user/model'
import { BrowserStorageKey } from '@shared/constants/browser-storage-key'
import { attach, createEffect, createEvent, createStore, sample } from 'effector'
import { getDefaultNewSettings } from '../lib/get-default-settings'
import { SettingsOldType, UserSettings } from '../types'
import { getSettingsKey } from '../lib/get-settings-key'

const updateUserSetting = createEvent<RequireOnlyOne<UserSettings>>()

const saveUsersSettingsLocalFx = createEffect(({ settings, userId }: { settings: UserSettings; userId: string }) => {
    localStorage.setItem(getSettingsKey(userId), JSON.stringify(settings))
})

const getLocalSettingsFx = attach({
    source: $userStore,
    effect: ({ currentUser }): UserSettings => {
        const userId = currentUser?.guid
        const newSettings = localStorage.getItem(BrowserStorageKey.Settings)
        const defaultSettings = getDefaultNewSettings()

        // TODO: remove this
        if (!newSettings) {
            const oldSettingsString = localStorage.getItem(BrowserStorageKey.OldSettings)

            if (!oldSettingsString) return defaultSettings

            const oldSettings = JSON.parse(oldSettingsString) as SettingsOldType
            const value = oldSettings[userId ?? '']

            if (!value) {
                return defaultSettings
            }

            return {
                appearance: value?.['settings-appearance']?.property ?? defaultSettings.appearance,
                customizeMenu: value?.['settings-customize-menu'].property ?? defaultSettings.customizeMenu,
                homePage: value?.['settings-home-page'].property ?? defaultSettings.homePage,
                notifications: value?.['settings-notifications'].property ?? defaultSettings.notifications,
            } as UserSettings
        }

        const localSettings = JSON.parse(newSettings) as UserSettings
        return localSettings
    },
})

const $userSettings = createStore<UserSettings | null>(null).on(getLocalSettingsFx.doneData, (_, settings) => settings)

sample({
    source: { settings: $userSettings, user: $userStore },
    filter: ({ user, settings }) => Boolean(user) && Boolean(settings),
    fn: ({ settings, user }) => {
        return { settings: settings!, userId: user!.currentUser?.guid ?? '' }
    },
    target: saveUsersSettingsLocalFx,
})

sample({
    clock: updateUserSetting,
    source: $userSettings,
    filter: Boolean,
    fn: (settings, newSettings) => {
        return { ...settings, ...newSettings }
    },
    target: $userSettings,
})

export const stores = {
    userSettings: $userSettings,
}

export const events = {
    updateUserSetting,
}

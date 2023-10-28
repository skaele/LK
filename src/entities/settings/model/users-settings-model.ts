import { $userStore } from '@entities/user/model'
import { User } from '@shared/api/model'
import { BrowserStorageKey } from '@shared/constants/browser-storage-key'
import { appStarted } from '@shared/models/app-started'
import { combine, createEffect, createEvent, createStore, sample } from 'effector'
import { SettingsOldType } from '.'
import { UserSettings, UsersSettings } from '../types'

const updateUserSetting = createEvent<RequireOnlyOne<UserSettings>>()

const saveUsersSettingsFx = createEffect((settings: UsersSettings) => {
    localStorage.setItem(BrowserStorageKey.NewSettings, JSON.stringify(settings))
})

const getLocalSettingsFx = createEffect((): UsersSettings => {
    const newSettings = localStorage.getItem(BrowserStorageKey.NewSettings)

    // TODO: remove this
    if (!newSettings) {
        const oldSettingsString = localStorage.getItem(BrowserStorageKey.OldSettings)
        if (!oldSettingsString) return {}

        const oldSettings = JSON.parse(oldSettingsString) as SettingsOldType

        return Object.entries(oldSettings).reduce((acc, [key, value]) => {
            acc[key] = {
                appearance: value['settings-appearance'].property as UserSettings['appearance'],
                customizeMenu: value['settings-customize-menu'].property as UserSettings['customizeMenu'],
                homePage: value['settings-home-page'].property as UserSettings['homePage'],
                notifications: value['settings-notifications'].property as UserSettings['notifications'],
            }
            return acc
        }, {} as UsersSettings)
    }

    const localSettings = JSON.parse(newSettings) as UsersSettings
    return localSettings
})

sample({
    clock: appStarted,
    target: getLocalSettingsFx,
})

const $usersSettings = createStore<UsersSettings>({}).on(getLocalSettingsFx.doneData, (_, settings) => settings)

sample({
    source: $usersSettings,
    target: saveUsersSettingsFx,
})

sample({
    clock: updateUserSetting,
    source: { user: $userStore, settings: $usersSettings },
    filter: ({ user }) => Boolean(user?.currentUser),
    fn: ({ settings, user }, newSettings) => {
        const userGuid = (user.currentUser as User).guid
        return {
            ...settings,
            [userGuid]: { ...settings[userGuid], ...newSettings },
        }
    },
    target: $usersSettings,
})

const $userSettings = combine($usersSettings, $userStore, (usersSettings, user) => {
    if (!user.currentUser) return null

    return usersSettings[user.currentUser.guid] ?? null
})

export const stores = {
    usersSettings: $usersSettings,
    userSettings: $userSettings,
}

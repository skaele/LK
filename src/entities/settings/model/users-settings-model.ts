import { userModel } from '@entities/user'
import { BrowserStorageKey } from '@shared/constants/browser-storage-key'
import { attach, createEffect, createEvent, createStore, sample } from 'effector'
import { getDefaultNewSettings } from '../lib/get-default-settings'
import { SettingsOldType, UserSettings } from '../types'
import { getSettingsKey } from '../lib/get-settings-key'
import { ThemeVariant } from '@shared/constants'
import { setServerSettings } from '@shared/api/settings'
import { serverSettingsQuery } from './server-settings'

const update = createEvent<RequireOnlyOne<UserSettings>>()

const saveUsersSettingsLocalFx = createEffect(({ settings, userId }: { settings: UserSettings; userId: string }) => {
    localStorage.setItem(getSettingsKey(userId), JSON.stringify(settings))
})

const saveSettingsGlobalFx = createEffect((settings: UserSettings) => {
    return setServerSettings(settings)
})

const getSettingsFx = attach({
    source: { userStore: userModel.stores.user, serverSettingsQueryData: serverSettingsQuery.$data },
    effect: ({ userStore: { currentUser }, serverSettingsQueryData }): UserSettings => {
        const userGuid = currentUser?.guid
        const newSettings = localStorage.getItem(getSettingsKey(userGuid ?? ''))
        const defaultSettings = getDefaultNewSettings(currentUser?.user_status === 'staff')

        if (serverSettingsQueryData?.syncAcrossAllDevices) {
            return serverSettingsQueryData
        }

        // migrating from old settings
        if (!newSettings) {
            const oldSettingsString = localStorage.getItem(BrowserStorageKey.OldSettings)

            if (!oldSettingsString) return defaultSettings

            const oldSettings = JSON.parse(oldSettingsString) as SettingsOldType
            // old settings uses php user id, new using guid
            const value = oldSettings[currentUser?.id ?? '']

            if (!value) {
                return defaultSettings
            }

            const homePage = {
                pages: value?.['settings-home-page'].property.pages ?? defaultSettings.homePage.pages,
                hasNews: value?.['settings-home-page'].property.news ?? defaultSettings.homePage.hasNews,
                hasSchedule:
                    value?.['settings-home-page'].property.widgetSchedule ?? defaultSettings.homePage.hasPayment,

                hasPayment: value?.['settings-home-page'].property.widgetPayment ?? defaultSettings.homePage.hasPayment,
            } as UserSettings['homePage']

            return {
                homePage,
                appearance: value?.['settings-appearance']?.property ?? defaultSettings.appearance,
                customizeMenu: value?.['settings-customize-menu'].property ?? defaultSettings.customizeMenu,
                notifications: value?.['settings-notifications'].property ?? defaultSettings.notifications,
                syncAcrossAllDevices: defaultSettings.syncAcrossAllDevices,
            } as UserSettings
        }

        const localSettings = JSON.parse(newSettings) as UserSettings

        // if load from local storage - syncAcrossAllDevices is false
        return { ...localSettings, syncAcrossAllDevices: false }
    },
})

sample({
    source: { userStore: userModel.stores.user, isServerSettingsLoaded: serverSettingsQuery.$finished },
    filter: ({ userStore, isServerSettingsLoaded }) => Boolean(userStore.currentUser && isServerSettingsLoaded),
    fn: ({ userStore }) => {
        return userStore
    },
    target: getSettingsFx,
})

const $userSettings = createStore<UserSettings | null>(null)
    .on(getSettingsFx.doneData, (_, settings) => settings)
    .reset(userModel.stores.userGuid)

const $theme = $userSettings.map((settings) => {
    return settings?.appearance.theme
})

const setThemeToDocument = createEffect((theme: ThemeVariant) => {
    document.documentElement.setAttribute('data-theme', theme)
})

sample({ clock: $theme, filter: Boolean, target: setThemeToDocument })

sample({
    source: { settings: $userSettings, userStore: userModel.stores.user },
    filter: ({ userStore, settings }) => Boolean(userStore.currentUser) && Boolean(settings),
    fn: ({ settings, userStore: user }) => {
        return { settings: settings!, userId: user!.currentUser?.guid ?? '' }
    },
    target: saveUsersSettingsLocalFx,
})

sample({
    source: {
        settings: $userSettings,
        userStore: userModel.stores.user,
        isSettingsLoadedFromServer: serverSettingsQuery.$succeeded,
    },
    filter: ({ userStore, settings, isSettingsLoadedFromServer }) =>
        Boolean(userStore.currentUser && settings?.syncAcrossAllDevices && isSettingsLoadedFromServer),
    fn: ({ settings }) => {
        return settings!
    },
    target: saveSettingsGlobalFx,
})

sample({
    clock: update,
    source: $userSettings,
    filter: Boolean,
    fn: (settings, newSettings) => {
        return { ...settings, ...newSettings }
    },
    target: $userSettings,
})

// toggle sync across all devices
sample({
    clock: update,
    source: $userSettings,
    filter: (settings, newSettings) => {
        return 'syncAcrossAllDevices' in newSettings && Boolean(settings)
    },
    fn: (settings, newSettings) => {
        return { ...settings!, ...newSettings }
    },
    target: saveSettingsGlobalFx,
})

export const stores = {
    userSettings: $userSettings,
    theme: $theme,
}

export const events = {
    update,
}

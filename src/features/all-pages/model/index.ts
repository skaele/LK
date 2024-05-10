import { adminLinksModel } from '@entities/admin-links'
import { userSettingsModel } from '@entities/settings'
import { userModel } from '@entities/user'
import {
    REQUIRED_HOME_PAGES_CONFIG,
    REQUIRED_LEFTSIDE_BAR_CONFIG,
    REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG,
    SIDEBAR_ITEMS_LIMIT_SIZE,
} from '@shared/constants'
import { combine, createEvent, sample } from 'effector'

export const addPageToHome = createEvent<{ pageId: string }>()
export const deletePageFromHome = createEvent<{ pageId: string }>()
export const $homePages = combine(userSettingsModel.stores.userSettings, (settings) => [
    ...REQUIRED_HOME_PAGES_CONFIG,
    ...(settings?.homePage.pages ?? []),
])

sample({
    clock: addPageToHome,
    source: userSettingsModel.stores.userSettings,
    filter: (settings) => Boolean(settings),
    fn: (settings, { pageId }) => {
        return {
            homePage: {
                ...settings!.homePage,
                pages: [...settings!.homePage.pages, pageId],
            },
        }
    },
    target: userSettingsModel.events.update,
})

sample({
    clock: deletePageFromHome,
    source: userSettingsModel.stores.userSettings,
    filter: (settings) => Boolean(settings),
    fn: (settings, { pageId }) => {
        return {
            homePage: {
                ...settings!.homePage,
                pages: settings!.homePage.pages.filter((id) => id !== pageId),
            },
        }
    },
    target: userSettingsModel.events.update,
})

export const addPageToSidebar = createEvent<{ pageId: string }>()
export const deletePageFromSidebar = createEvent<{ pageId: string }>()
export const $requiredSidebarItems = combine(
    userModel.stores.user,
    adminLinksModel.store,
    ({ currentUser }, { data }) => {
        if (currentUser?.status === '') {
            return REQUIRED_LEFTSIDE_BAR_CONFIG
        }

        const config = REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG

        return Object.keys(data ?? {}).length ? [...config, 'download-agreements'] : config
    },
)
export const $sidebarItems = combine(
    $requiredSidebarItems,
    userSettingsModel.stores.userSettings,
    (required, settings) => {
        return [...required, ...(settings?.customizeMenu.pages || [])]
    },
)

sample({
    clock: addPageToSidebar,
    source: userSettingsModel.stores.userSettings,
    filter: (settings) => Boolean(settings) && settings!.customizeMenu.pages.length < SIDEBAR_ITEMS_LIMIT_SIZE,
    fn: (settings, { pageId }) => {
        return {
            customizeMenu: {
                ...settings!.homePage,
                pages: [...settings!.customizeMenu.pages, pageId],
            },
        }
    },
    target: userSettingsModel.events.update,
})

sample({
    clock: deletePageFromSidebar,
    source: {
        settings: userSettingsModel.stores.userSettings,
        requiredSidebarItems: $requiredSidebarItems,
    },
    filter: ({ settings, requiredSidebarItems }, { pageId }) =>
        Boolean(settings) && !requiredSidebarItems.includes(pageId),
    fn: ({ settings }, { pageId }) => {
        return {
            customizeMenu: {
                ...settings!.homePage,
                pages: settings!.customizeMenu.pages.filter((id) => id !== pageId),
            },
        }
    },
    target: userSettingsModel.events.update,
})

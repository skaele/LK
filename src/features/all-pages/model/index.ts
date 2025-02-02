import { combine, createEvent, sample } from 'effector'

import { adminLinksModel } from '@entities/admin-links'
import { userSettingsModel } from '@entities/settings'

import {
    REQUIRED_HOME_PAGES_CONFIG,
    REQUIRED_LEFTSIDE_BAR_CONFIG,
    REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG,
    SIDEBAR_ITEMS_LIMIT_SIZE,
} from '@shared/consts'
import { userModel } from '@shared/session'
import { popUpMessageModel } from '@shared/ui/pop-up-message'

export const addPageToHome = createEvent<{ pageId: string }>()
export const deletePageFromHome = createEvent<{ pageId: string }>()
export const $homePages = combine(userSettingsModel.stores.userSettings, (settings) =>
    Array.from(new Set([...REQUIRED_HOME_PAGES_CONFIG, ...(settings?.homePage.pages ?? [])])),
)

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
export const $requiredSidebarItems = combine(userModel.stores.user, adminLinksModel.store, (currentUser, { data }) => {
    if (currentUser?.status === '') {
        return REQUIRED_LEFTSIDE_BAR_CONFIG
    }

    const config = REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG

    return Object.values(data ?? {}).some((l) => l.length) ? [...config, 'download-agreements'] : config
})

export const $sidebarItems = combine(
    $requiredSidebarItems,
    userSettingsModel.stores.userSettings,
    (required, settings) => {
        return Array.from(new Set([...required, ...(settings?.customizeMenu.pages || [])]))
    },
)

sample({
    clock: addPageToSidebar,
    source: $sidebarItems,
    filter: (sidebarItems) => sidebarItems.length >= SIDEBAR_ITEMS_LIMIT_SIZE,
    fn: () => ({
        message: 'Вы достигли максимального количества страниц в боковом меню',
        type: 'failure' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: addPageToSidebar,
    source: {
        settings: userSettingsModel.stores.userSettings,
        sidebarItems: $sidebarItems,
        requiredSidebarItems: $requiredSidebarItems,
    },
    filter: ({ settings, sidebarItems, requiredSidebarItems }, { pageId }) => {
        return (
            Boolean(settings) &&
            sidebarItems.length < SIDEBAR_ITEMS_LIMIT_SIZE &&
            !requiredSidebarItems.includes(pageId)
        )
    },
    fn: ({ settings }, { pageId }) => {
        return {
            customizeMenu: {
                ...settings!.customizeMenu,
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
                ...settings!.customizeMenu,
                pages: settings!.customizeMenu.pages.filter((id) => id !== pageId),
            },
        }
    },
    target: userSettingsModel.events.update,
})

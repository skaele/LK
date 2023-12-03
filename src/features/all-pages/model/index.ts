import { userSettingsModel } from '@entities/settings'
import { REQUIRED_LEFTSIDE_BAR_CONFIG, SIDEBAR_ITEMS_LIMIT_SIZE } from '@shared/constants'
import { createEvent, sample } from 'effector'

export const addPageToHome = createEvent<{ pageId: string }>()
export const deletePageFromHome = createEvent<{ pageId: string }>()

sample({
    clock: addPageToHome,
    source: userSettingsModel.stores.userSettings,
    filter: (settings, { pageId }) => Boolean(settings) && !REQUIRED_LEFTSIDE_BAR_CONFIG.includes(pageId),
    fn: (settings, { pageId }) => {
        return {
            homePage: {
                ...settings!.homePage,
                pages: [...settings!.homePage.pages, pageId],
            },
        }
    },
    target: userSettingsModel.events.updateUserSetting,
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
    target: userSettingsModel.events.updateUserSetting,
})

export const addPageToSidebar = createEvent<{ pageId: string }>()
export const deletePageFromSidebar = createEvent<{ pageId: string }>()

sample({
    clock: addPageToSidebar,
    source: userSettingsModel.stores.userSettings,
    filter: (settings, { pageId }) =>
        Boolean(settings) &&
        !REQUIRED_LEFTSIDE_BAR_CONFIG.includes(pageId) &&
        settings!.customizeMenu.pages.length < SIDEBAR_ITEMS_LIMIT_SIZE,
    fn: (settings, { pageId }) => {
        return {
            homePage: {
                ...settings!.homePage,
                pages: [...settings!.homePage.pages, pageId],
            },
        }
    },
    target: userSettingsModel.events.updateUserSetting,
})

sample({
    clock: deletePageFromSidebar,
    source: userSettingsModel.stores.userSettings,
    filter: (settings, { pageId }) => Boolean(settings) && !REQUIRED_LEFTSIDE_BAR_CONFIG.includes(pageId),
    fn: (settings, { pageId }) => {
        return {
            homePage: {
                ...settings!.homePage,
                pages: settings!.homePage.pages.filter((id) => id !== pageId),
            },
        }
    },
    target: userSettingsModel.events.updateUserSetting,
})

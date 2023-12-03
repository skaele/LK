import { AdminLinks, User } from '@api/model'
import { IRoute, IRoutes } from '@app/routes/general-routes'
import { hiddenRoutes, privateRoutes } from '@app/routes/routes'
import { teachersHiddenRoutes, teachersPrivateRoutes } from '@app/routes/teacher-routes'
import { MenuType, REQUIRED_LEFTSIDE_BAR_CONFIG, REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG } from '@shared/constants'
import { useStore } from 'effector-react/compat'
import { createEvent, createStore, sample } from 'effector'
import findRoutesByConfig from '../lib/find-routes-by-config'
import { BrowserStorageKey } from '@shared/constants/browser-storage-key'
import { $userStore } from '@entities/user/model'
import { userSettingsModel } from '@entities/settings'
import { UserSettings } from '@entities/settings/types'
import { adminLinksModel } from '@entities/admin-links'

export interface Menu {
    allRoutes: IRoutes | null
    visibleRoutes: IRoutes | null
    homeRoutes: IRoutes | null
    currentPage: IRoute | null
    isOpen: boolean
}

const DEFAULT_HOME_CONFIG = ['settings', 'profile', 'chat', 'schedule', 'payments', 'project-activity', 'all-students']

export const DEFAULT_STUDENT_MOBILE_CONFIG = ['home', 'schedule', 'acad-performance', 'all', 'profile']
export const DEFAULT_PPS_MOBILE_CONFIG = ['home', 'schedule', 'alerts', 'all', 'profile']
export const DEFAULT_STAFF_MOBILE_CONFIG = ['home', 'doclist', 'alerts', 'all', 'profile']

const getLeftsideBarConfig = (user: User | null, settings: UserSettings): MenuType => {
    if (!user) return []

    const settingsMenuData = settings.customizeMenu.pages ?? REQUIRED_LEFTSIDE_BAR_CONFIG

    const uniqueRequiredTeacherMenuItems = REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG.filter(
        (item) => !settingsMenuData.includes(item),
    )

    const settingsDataToBeSet =
        user?.user_status === 'staff' && settingsMenuData.some((item) => !uniqueRequiredTeacherMenuItems.includes(item))
            ? [...settingsMenuData, ...uniqueRequiredTeacherMenuItems]
            : settingsMenuData

    return settingsDataToBeSet
}

const DEFAULT_STORE: Menu = {
    allRoutes: null,
    visibleRoutes: null,
    homeRoutes: null,
    currentPage: null,
    isOpen: false,
}

const useMenu = () => {
    return useStore($menu)
}

const changeOpen = createEvent<{ isOpen: boolean; currentPage?: string }>()
const clearStore = createEvent()
const defineMenu = createEvent<{ user: User | null; adminLinks: AdminLinks | null; homeRoutes?: string[] }>()
const changeNotifications = createEvent<{ page: string; notifications: ((prev: number) => number) | number }>()

const getNewNotifications = (page: string, notifications: number, routes: IRoutes | null) => {
    const newRoutes = { ...routes }
    if (!!newRoutes[page]) newRoutes[page].notifications = notifications
    else return null

    return newRoutes
}

const filterTeachersPrivateRoutes = (adminLinks: AdminLinks | null): IRoutes => {
    if (!adminLinks) {
        return teachersPrivateRoutes()
    }

    const { accepts, agreements, checkdata, studLogins } = adminLinks

    const hasAdminLinks = !!accepts.length || !!agreements.length || !!checkdata.length || !!studLogins?.length

    const adminRoute = 'download-agreements'

    const filteredRoutes = Object.entries(teachersPrivateRoutes()).filter(
        ([key]) => key !== adminRoute || (key === adminRoute && hasAdminLinks),
    )

    return Object.fromEntries(filteredRoutes)
}

const $leftSidebar = createStore<IRoutes | null>(null)

sample({
    source: {
        user: $userStore,
        settings: userSettingsModel.stores.userSettings,
        adminLinks: adminLinksModel.store,
    },
    filter: ({ user, settings }) => {
        return Boolean(user) && Boolean(settings)
    },
    fn: ({ settings, user, adminLinks }) => {
        return findRoutesByConfig(
            getLeftsideBarConfig(user.currentUser, settings!),
            user.currentUser?.user_status === 'staff' ? filterTeachersPrivateRoutes(adminLinks.data) : privateRoutes(),
        )
    },
    target: $leftSidebar,
})

const $menu = createStore<Menu>(DEFAULT_STORE)
    .on(changeOpen, (oldState, { isOpen, currentPage }) => ({
        ...oldState,
        currentPage: oldState.allRoutes && currentPage ? oldState.allRoutes?.[currentPage] : oldState.currentPage,
        isOpen: isOpen,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))
    .on(defineMenu, (oldData, { user, adminLinks, homeRoutes }) => ({
        ...oldData,
        currentPage:
            user?.user_status === 'staff'
                ? filterTeachersPrivateRoutes(adminLinks)[window.location.hash.slice(2, window.location.hash.length)]
                : privateRoutes()[window.location.hash.slice(2, window.location.hash.length)],
        allRoutes:
            user?.user_status === 'staff'
                ? { ...filterTeachersPrivateRoutes(adminLinks), ...teachersHiddenRoutes() }
                : { ...privateRoutes(), ...hiddenRoutes(user) },
        visibleRoutes: user?.user_status === 'staff' ? filterTeachersPrivateRoutes(adminLinks) : privateRoutes(),
        homeRoutes: findRoutesByConfig(
            homeRoutes ??
                (JSON.parse(
                    localStorage.getItem(BrowserStorageKey.HomeRoutes) ?? JSON.stringify(DEFAULT_HOME_CONFIG),
                ) as string[]),
            user?.user_status === 'staff'
                ? { ...filterTeachersPrivateRoutes(adminLinks), ...teachersHiddenRoutes() }
                : { ...privateRoutes(), ...hiddenRoutes(user) },
        ),
    }))
    .on(changeNotifications, (oldData, { page, notifications }) => ({
        ...oldData,
        visibleRoutes: getNewNotifications(
            page,
            typeof notifications === 'number'
                ? notifications
                : notifications(oldData.visibleRoutes?.[page].notifications ?? 0),
            oldData.visibleRoutes,
        ),
    }))

export const selectors = {
    useMenu,
}

export const events = {
    changeOpen,
    clearStore,
    defineMenu,
    changeNotifications,
}

export const stores = {
    leftSidebar: $leftSidebar,
}

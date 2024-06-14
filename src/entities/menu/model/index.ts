import { AdminLinks, User } from '@api/model'
import { IRoute, IRoutes } from '@app/routes/general-routes'
import { hiddenRoutes, privateRoutes } from '@app/routes/routes'
import { teachersHiddenRoutes, teachersPrivateRoutes } from '@app/routes/teacher-routes'
import { adminLinksModel } from '@entities/admin-links'
import { userSettingsModel } from '@entities/settings'
import { UserSettings } from '@entities/settings/types'
import { userModel } from '@entities/user'
import { MenuType, REQUIRED_LEFTSIDE_BAR_CONFIG, REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG } from '@shared/constants'
import { combine, createEvent, createStore, sample } from 'effector'
import { useUnit } from 'effector-react'
import findRoutesByConfig from '../lib/find-routes-by-config'
import { Role } from '@entities/salary-supplements/types'
import { salarySupplementsModel } from '@entities/salary-supplements'

export interface Menu {
    allRoutes: IRoutes | null
    visibleRoutes: IRoutes | null
    currentPage: IRoute | null
    isOpen: boolean
}

const DEFAULT_HOME_CONFIG = ['settings', 'profile', 'chat', 'schedule', 'payments', 'project-activity', 'all-students']

export const DEFAULT_STUDENT_MOBILE_CONFIG = ['home', 'schedule', 'acad-performance', 'all', 'profile']
export const DEFAULT_PPS_MOBILE_CONFIG = ['home', 'schedule', 'alerts', 'all', 'profile']
export const DEFAULT_STAFF_MOBILE_CONFIG = ['home', 'doclist', 'alerts', 'all', 'profile']

const getLeftsideBarConfig = (user: User | null, settings: UserSettings, adminLinks: AdminLinks | null): MenuType => {
    if (!user) return []

    const settingsMenuData = settings.customizeMenu.pages ?? REQUIRED_LEFTSIDE_BAR_CONFIG

    const uniqueRequiredTeacherMenuItems = REQUIRED_TEACHER_LEFTSIDE_BAR_CONFIG.filter(
        (item) => !settingsMenuData.includes(item),
    )

    const settingsDataToBeSet =
        user?.user_status === 'staff'
            ? Array.from(
                  new Set([
                      ...uniqueRequiredTeacherMenuItems,
                      ...(Object.values(adminLinks ?? {}).some((l) => l.length) ? ['download-agreements'] : []),
                      ...settingsMenuData,
                  ]),
              )
            : settingsMenuData

    return settingsDataToBeSet
}

const DEFAULT_STORE: Menu = {
    allRoutes: null,
    visibleRoutes: null,
    currentPage: null,
    isOpen: false,
}

const useMenu = () => {
    const menu = useUnit($menu)
    const homeRoutes = useUnit($homeRoutes)
    return { ...menu, homeRoutes }
}

const changeOpen = createEvent<{ isOpen: boolean; currentPage?: string }>()
const clearStore = createEvent()
const defineMenu = createEvent<{
    user: User | null
    adminLinks: AdminLinks | null
    supplementRole: Role | null
    homeRoutes?: string[]
}>()
const changeNotifications = createEvent<{ page: string; notifications: ((prev: number) => number) | number }>()

const getNewNotifications = (page: string, notifications: number, routes: IRoutes | null) => {
    const newRoutes = { ...routes }
    if (!!newRoutes[page]) newRoutes[page].notifications = notifications
    else return null

    return newRoutes
}

const filterTeachersPrivateRoutes = (adminLinks: AdminLinks | null, supplementsRole: Role | null): IRoutes => {
    if (!adminLinks) {
        return teachersPrivateRoutes()
    }

    const { accepts, agreements, checkdata, studLogins } = adminLinks

    const hasAdminLinks = !!accepts.length || !!agreements.length || !!checkdata.length || !!studLogins?.length

    const adminRoute = 'download-agreements'
    const filteredRoutes = Object.entries(teachersPrivateRoutes()).filter(
        ([key, value]) =>
            (key !== adminRoute && !value.isSupplementApprover && !value.isSupplementInitiator) ||
            (key === adminRoute && hasAdminLinks) ||
            (value.isSupplementApprover && supplementsRole === 'approver') ||
            (value.isSupplementInitiator && supplementsRole === 'initiator'),
    )

    return Object.fromEntries(filteredRoutes)
}

const $leftSidebar = combine(
    userModel.stores.user,
    userSettingsModel.stores.userSettings,
    adminLinksModel.store,
    salarySupplementsModel.stores.role,
    (user, settings, adminLinks, role) => {
        if (!user || !settings) return null

        return findRoutesByConfig(
            getLeftsideBarConfig(user.currentUser, settings!, adminLinks.data),
            user.currentUser?.user_status === 'staff'
                ? { ...filterTeachersPrivateRoutes(adminLinks.data, role), ...teachersHiddenRoutes() }
                : { ...privateRoutes(), ...hiddenRoutes(user.currentUser) },
        )
    },
)

const $homeRoutes = combine(
    userModel.stores.user,
    userSettingsModel.stores.userSettings,
    adminLinksModel.store,
    salarySupplementsModel.stores.role,
    (user, settings, adminLinks, role) => {
        if (!user || !settings) return null

        return findRoutesByConfig(
            settings?.homePage.pages ?? DEFAULT_HOME_CONFIG,
            user.currentUser?.user_status === 'staff'
                ? { ...filterTeachersPrivateRoutes(adminLinks.data, role), ...teachersHiddenRoutes() }
                : { ...privateRoutes(), ...hiddenRoutes(user.currentUser) },
        )
    },
)

sample({
    source: {
        userStore: userModel.stores.user,
        settings: userSettingsModel.stores.userSettings,
        adminLinks: adminLinksModel.store,
        supplementRole: salarySupplementsModel.stores.role,
    },
    filter: ({ settings, userStore }) => {
        return Boolean(settings) && Boolean(userStore.currentUser)
    },
    fn: ({ settings, adminLinks, userStore, supplementRole }) => ({
        homeRoutes: settings!.homePage.pages,
        user: userStore.currentUser!,
        adminLinks: adminLinks.data!,
        supplementRole: supplementRole,
    }),
    target: defineMenu,
})

// todo: split to stores
const $menu = createStore<Menu>(DEFAULT_STORE)
    .on(changeOpen, (oldState, { isOpen, currentPage }) => ({
        ...oldState,
        currentPage: oldState.allRoutes && currentPage ? oldState.allRoutes?.[currentPage] : oldState.currentPage,
        isOpen: isOpen,
    }))
    .on(clearStore, () => ({
        ...DEFAULT_STORE,
    }))
    .on(defineMenu, (oldData, { user, adminLinks, supplementRole }) => ({
        ...oldData,
        currentPage:
            user?.user_status === 'staff'
                ? filterTeachersPrivateRoutes(adminLinks, supplementRole)[
                      window.location.hash.slice(2, window.location.hash.length)
                  ]
                : privateRoutes()[window.location.hash.slice(2, window.location.hash.length)],
        allRoutes:
            user?.user_status === 'staff'
                ? { ...filterTeachersPrivateRoutes(adminLinks, supplementRole), ...teachersHiddenRoutes() }
                : { ...privateRoutes(), ...hiddenRoutes(user) },
        visibleRoutes:
            user?.user_status === 'staff' ? filterTeachersPrivateRoutes(adminLinks, supplementRole) : privateRoutes(),
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
    menu: $menu,
    homeRoutes: $homeRoutes,
}

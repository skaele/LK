import { menuModel } from '@entities/menu'
import { UserSettings } from '@entities/settings/types'
import { userModel } from '@entities/user'
import { lkNotificationApi } from '@shared/api'
import { createEffect, createEvent, createStore, sample } from 'effector'
import createNotification from '../lib/create-notification'
import { filterNotificationsViaSettings } from '../lib/filter-notifications-via-settings'
import { TNotification } from '../types'

type TStore = {
    notifications: TNotification[]
    visibleNotifications: TNotification[]
    loading: boolean
    error: string | null
    removeNotificationError: string | null
    removeNotificationLoading: boolean
    clearAllLoading: boolean
    clearAllError: string | null
    loaded: boolean
}

const DEFAULT_STORE: TStore = {
    notifications: [] as TNotification[],
    visibleNotifications: [] as TNotification[],
    loading: false,
    error: null,
    removeNotificationError: null,
    removeNotificationLoading: false,
    clearAllLoading: false,
    clearAllError: null,
    loaded: false,
}

const fetchNotifications = createEffect(async ({ settings }: { settings: UserSettings['notifications'] }) => {
    try {
        const { data } = await lkNotificationApi.get()

        return filterNotificationsViaSettings(settings, data).map(({ id, type, title, text }) =>
            createNotification(type, id, title, text),
        )
    } catch (error) {
        throw new Error(`Не удалось загрузить уведомления. Ошибка: ${error}`)
    }
})

const addNotificationsToPagesFx = createEffect(({ notifications }: { notifications: TNotification[] }) => {
    notifications.forEach(({ pageId }) => {
        if (pageId) menuModel.events.changeNotifications({ page: pageId, notifications: 1 })
    })
})

const addNotificationToPageFx = createEffect(({ notifications }: { notifications: TNotification[] }) => {
    const { pageId } = notifications[0]
    if (pageId) menuModel.events.changeNotifications({ page: pageId, notifications: 1 })
})

const clearNotificationByIdFx = createEffect(async ({ id, pageId }: { id: string; pageId?: string }) => {
    try {
        await lkNotificationApi.clearNotificationById(id)
        return { id, pageId }
    } catch (error) {
        throw new Error('Не удалось скрыть уведомление')
    }
})

const clearAllNotificationsFx = createEffect(async () => {
    try {
        await lkNotificationApi.clearAllNotifications()
    } catch (error) {
        throw new Error('Не удалось скрыть все уведомления')
    }
})

const removeNotificationFromPageFx = (pageId?: string) => {
    if (pageId) menuModel.events.changeNotifications({ page: pageId, notifications: 0 })
}

const add = createEvent<TNotification>()
const initialize = createEvent<{ settings: UserSettings['notifications'] }>()
const clearVisibleById = createEvent<string>()
const clearById = createEvent<{ id: string; pageId?: string }>()
const clearAll = createEvent()
const clearAllVisible = createEvent()

const $$lkNotifications = createStore<TStore>(DEFAULT_STORE).reset(userModel.stores.userGuid)

sample({
    clock: initialize,
    target: fetchNotifications,
})

sample({
    clock: fetchNotifications.pending,
    source: $$lkNotifications,
    fn: (store, clk) => ({ ...store, loading: clk }),
    target: $$lkNotifications,
})

sample({
    clock: fetchNotifications.failData,
    source: $$lkNotifications,
    fn: (store, clk) => ({ ...store, error: clk.message }),
    target: $$lkNotifications,
})

sample({
    clock: fetchNotifications.doneData,
    source: $$lkNotifications,
    fn: (store, clk) => ({
        ...store,
        notifications: [...clk, ...store.notifications],
        visibleNotifications: [...store.visibleNotifications, ...clk].slice(0, 2),
        error: null,
        loaded: true,
    }),
    target: [$$lkNotifications, addNotificationsToPagesFx],
})

sample({
    clock: add,
    source: $$lkNotifications,
    fn: (src, clk) => ({
        notifications: [...src.notifications, clk],
        visibleNotifications: [...src.visibleNotifications, clk],
    }),
    target: [$$lkNotifications, addNotificationToPageFx],
})

sample({
    clock: clearById,
    target: clearNotificationByIdFx,
})

sample({
    clock: clearNotificationByIdFx.doneData,
    source: $$lkNotifications,
    fn: ({ notifications, visibleNotifications, ...store }, { id, pageId }) => {
        removeNotificationFromPageFx(pageId)

        return {
            ...store,
            notifications: notifications.filter((n) => n.id !== id),
            visibleNotifications: visibleNotifications.filter((n) => n.id !== id),
        }
    },
    target: $$lkNotifications,
})

sample({
    clock: clearNotificationByIdFx.failData,
    source: $$lkNotifications,
    fn: (store, err) => ({ ...store, removeNotificationError: err.message }),
    target: $$lkNotifications,
})

sample({
    clock: clearNotificationByIdFx.pending,
    source: $$lkNotifications,
    fn: (store, loading) => ({ ...store, removeNotificationLoading: loading }),
    target: $$lkNotifications,
})

sample({
    clock: clearAll,
    target: clearAllNotificationsFx,
})

sample({
    clock: clearAllNotificationsFx.pending,
    source: $$lkNotifications,
    fn: (store, clk) => ({ ...store, clearAllLoading: clk, clearAllError: null }),
    target: $$lkNotifications,
})

sample({
    clock: clearAllNotificationsFx.failData,
    source: $$lkNotifications,
    fn: (store, clk) => ({ ...store, clearAllError: clk.message }),
    target: $$lkNotifications,
})

sample({
    clock: clearAllNotificationsFx.doneData,
    source: $$lkNotifications,
    fn: (store) => ({ ...store, notifications: [], visibleNotifications: [] }),
    target: $$lkNotifications,
})

sample({
    clock: clearVisibleById,
    source: $$lkNotifications,
    fn: ({ notifications, visibleNotifications, ...store }, id) => ({
        ...store,
        notifications,
        visibleNotifications: visibleNotifications.filter((n) => n.id !== id),
    }),
    target: $$lkNotifications,
})

sample({
    clock: clearAllVisible,
    source: $$lkNotifications,
    fn: ({ notifications, ...store }) => ({ ...store, notifications, visibleNotifications: [] }),
    target: $$lkNotifications,
})

export const events = { initialize, add, clearById, clearVisibleById, clearAll, clearAllVisible }
export const stores = { lkNotifications: $$lkNotifications }

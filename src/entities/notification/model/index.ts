import { notificationApi, docsApi } from '@api'
import { createEffect, createEvent, createStore } from 'effector'
import { Notifications } from '@api/model/notification'
import { userModel } from '@entities/user'

const changeCompleted = createEvent<{ completed: boolean }>()

const setNotificationsType = createEffect((type: 'notifications' | 'docs') => type)

const getPersonalNotificationsFx = createEffect(async (): Promise<Notifications> => {
    const type = $type.getState()

    if (type === 'notifications') {
        try {
            const response = await notificationApi.get()

            return response.data
        } catch (error) {
            throw new Error(error as string)
        }
    }

    try {
        const response = await docsApi.get()

        return {
            docs: response.data,
        }
    } catch (error) {
        throw new Error(error as string)
    }
})

const viewPersonalNotificationsFx = createEffect(async (notificationId: string): Promise<string> => {
    const api = $type.getState() === 'notifications' ? notificationApi : docsApi

    try {
        await api.view(notificationId)
        return 'ok'
    } catch (error) {
        throw new Error('Ошибка загрузки данных')
    }
})

const $personalNotifications = createStore<Notifications | null>(null)
    .on(getPersonalNotificationsFx.doneData, (_, newData) => newData)
    .reset(userModel.stores.userGuid)

const $type = createStore<'notifications' | 'docs' | null>(null)
    .on(setNotificationsType, (_, newData) => newData)
    .reset(userModel.stores.userGuid)

const $error = createStore<string | null>(null)
    .on(getPersonalNotificationsFx, () => null)
    .on(getPersonalNotificationsFx.failData, (_, { message }) => message)
    .on(viewPersonalNotificationsFx.failData, (_, { message }) => message)
    .reset(userModel.stores.userGuid)

const $completed = createStore<boolean>(false)
    .on(changeCompleted, (_, { completed }) => completed)
    .reset(userModel.stores.userGuid)

viewPersonalNotificationsFx.doneData.watch(() => getPersonalNotificationsFx())

export const stores = {
    notifications: $personalNotifications,
    loading: getPersonalNotificationsFx.pending,
    completed: $completed,
    error: $error,
    type: $type,
}

export const effects = {
    setNotificationsType,
    getPersonalNotificationsFx,
    viewPersonalNotificationsFx,
}
export const events = {
    changeCompleted,
}

import { createEvent, sample } from 'effector'

import { userSettingsModel } from '@entities/settings'

export const turnOnAllNotifications = createEvent()
export const turnOffAllNotifications = createEvent()

sample({
    clock: turnOnAllNotifications,
    fn: () => ({
        notifications: {
            all: true,
            messages: true,
            newVersion: true,
            schedule: true,
            news: true,
            applications: true,
            doclist: true,
        },
    }),
    target: userSettingsModel.events.update,
})

sample({
    clock: turnOffAllNotifications,
    fn: () => ({
        notifications: {
            all: false,
            messages: false,
            newVersion: false,
            schedule: false,
            news: false,
            applications: false,
            doclist: false,
        },
    }),
    target: userSettingsModel.events.update,
})

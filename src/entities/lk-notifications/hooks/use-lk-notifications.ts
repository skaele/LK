import { electronicInteractionModel } from '@entities/electronic-interaction'
import { menuModel } from '@entities/menu'
import { userSettingsModel } from '@entities/settings'
import { userModel } from '@entities/user'
import { NotificationsResponse } from '@shared/api/lk-notification-api'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'
import { lkNotificationModel } from '..'
import createNotification from '../lib/create-notification'
import { filterNotificationsViaSettings } from '../lib/filter-notifications-via-settings'

// todo: move logic to effector
const useLkNotifications = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const { notifications, loading, loaded } = lkNotificationModel.selectors.useLkNotifications()
    const settings = useUnit(userSettingsModel.stores.userSettings)

    const [preparedData] = useUnit([electronicInteractionModel.stores.$electronicInteractionStore])

    const notificationSettings = settings?.notifications

    useEffect(() => {
        electronicInteractionModel.events.getElectronicInteraction()
        if (preparedData && !preparedData.status) {
            lkNotificationModel.events.add(createNotification('electronic-interaction', 'electronic-interaction'))
        }
    }, [preparedData?.status])

    useEffect(() => {
        if (!preparedData) {
            electronicInteractionModel.events.getElectronicInteraction()
        }
    }, [preparedData])

    useEffect(() => {
        if (!!user && !!notificationSettings) {
            if (notificationSettings.all !== false && !loaded && !loading) {
                const scheduleNotification: NotificationsResponse = [
                    { id: 'schedule', type: 'schedule', title: 'Скоро пара!', text: 'Осталось меньше 15 мин.' },
                ]

                if (filterNotificationsViaSettings(notificationSettings, scheduleNotification).length) {
                    // if (calcNextSubjectTime(schedule?.today) <= 15) {
                    //     lkNotificationModel.events.add(
                    //         createNotification(
                    //             scheduleNotification[0].type,
                    //             scheduleNotification[0].id,
                    //             scheduleNotification[0].title,
                    //             scheduleNotification[0].text,
                    //         ),
                    //     )
                    // }
                }

                lkNotificationModel.events.initialize({
                    settings: notificationSettings,
                })
            }
        }
    }, [user, notificationSettings, loading, loaded])

    useEffect(() => {
        menuModel.events.changeNotifications({ page: 'lk-notifications', notifications: notifications.length })
    }, [notifications])
}

export default useLkNotifications

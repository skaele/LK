import { electronicInteractionModel } from '@entities/electronic-interaction'
import { menuModel } from '@entities/menu'
import { settingsModel } from '@entities/settings'
import { NotificationsSettingsType } from '@entities/settings/lib/get-default-settings'
import { userModel } from '@entities/user'
import { useUnit } from 'effector-react'
import { useEffect, useMemo } from 'react'
import { lkNotificationModel } from '..'
import createNotification from '../lib/create-notification'

const useLkNotifications = () => {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    // const {
    //     data: { schedule },
    // } = scheduleModel.selectors.useSchedule()
    const { notifications, loading, loaded } = lkNotificationModel.selectors.useLkNotifications()
    const { settings } = settingsModel.selectors.useSettings()
    const [preparedData] = useUnit([electronicInteractionModel.stores.$electronicInteractionStore])
    const notificationSettings = useMemo(
        () => settings?.['settings-notifications'].property as NotificationsSettingsType,
        [settings?.['settings-notifications']],
    )

    useEffect(() => {
        electronicInteractionModel.events.getElectronicInteraction()
        if (preparedData && !preparedData.status && notificationSettings?.all) {
            lkNotificationModel.events.add(createNotification('electronic-interaction', 'electronic-interaction'))
        }
    }, [preparedData?.status, notificationSettings])

    useEffect(() => {
        if (!preparedData) {
            electronicInteractionModel.events.getElectronicInteraction()
        }
    }, [preparedData])

    useEffect(() => {
        if (!!user && !!notificationSettings) {
            if (notificationSettings.all !== false && !loaded && !loading) {
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

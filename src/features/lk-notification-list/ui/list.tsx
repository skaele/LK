import React from 'react'

<<<<<<<< HEAD:src/features/lk-notification-list/ui/list.tsx
import NotificationItem from '@features/notifications/notification-item'

import { TNotification, lkNotificationModel } from '@entities/lk-notifications'

import Flex from '@shared/ui/flex'
========
import { TNotification, lkNotificationModel } from '@entities/lk-notifications'

import Flex from '@shared/ui/flex'

import NotificationItem from './notification-item'
>>>>>>>> master:src/widgets/lk-notification-list/ui/list.tsx

type Props = {
    notifications: TNotification[] | null
    loadingRemove: boolean
}

const NotificationList = ({ notifications, loadingRemove }: Props) => {
    if (!notifications || notifications.length === 0) return null

    const handleClose = (id: string, pageId?: string, close?: () => void) => {
        return () => {
            lkNotificationModel.events.clearById({ id, pageId })
            close?.()
        }
    }

    const onClose = (notification: TNotification) =>
        notification.canClose !== false
            ? handleClose(notification.id, notification.pageId, notification.onClose)
            : undefined

    return (
        <Flex d="column">
            {notifications.map((notification, index) => (
                <NotificationItem
                    size="big"
                    loadingRemove={loadingRemove}
                    bottomMargin={index !== notifications.length - 1}
                    {...notification}
                    key={notification.id}
                    onClose={onClose(notification)}
                />
            ))}
        </Flex>
    )
}

export default NotificationList

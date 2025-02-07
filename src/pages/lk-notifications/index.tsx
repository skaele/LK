import React, { useEffect } from 'react'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import LkNotificationList from '@features/lk-notification-list'

import { lkNotificationModel } from '@entities/lk-notifications'

import { SETTINGS_NOTIFICATIONS } from '@shared/routing'
import { Button, CenterPage, Loading } from '@shared/ui/atoms'
import { confirmModel } from '@shared/ui/confirm'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import { popUpMessageModel } from '@shared/ui/pop-up-message'

const LkNotificationsPage = () => {
    const { notifications, clearAllError, clearAllLoading } = lkNotificationModel.selectors.useLkNotifications()

    const handleClearAll = () => {
        confirmModel.events.evokeConfirm({
            message: 'Вы уверены, что хотите очистить все уведомления?',
            onConfirm: () => lkNotificationModel.events.clearAll(),
        })
    }

    useEffect(() => {
        if (clearAllError) {
            popUpMessageModel.events.evokePopUpMessage({ type: 'failure', message: clearAllError })
        }
    }, [clearAllError])

    return (
        <CenterPage padding="10px">
            <PageBlock
                topRightCornerElement={
                    <Link to={SETTINGS_NOTIFICATIONS}>
                        <Button icon={<FiSettings />} height="35px" width="35px" />
                    </Link>
                }
            >
                <LkNotificationList />
                {notifications.length > 0 ? (
                    !clearAllLoading ? (
                        <Button text="Очистить все" onClick={handleClearAll} width="100%" />
                    ) : (
                        <Flex jc="center">
                            <Loading width="40px" height="40px" />
                        </Flex>
                    )
                ) : null}
            </PageBlock>
        </CenterPage>
    )
}

export default LkNotificationsPage

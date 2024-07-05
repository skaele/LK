import { lkNotificationModel } from '@entities/lk-notifications'
import React from 'react'
import NotificationItem from 'widgets/lk-notification-list/ui/notification-item'
import usePopUpNotifications from './hooks/use-pop-up-notifications'
import { PopUpNotificationsItem, PopUpNotificationsStyled } from './styles'
import { useUnit } from 'effector-react'

const PopUpNotifications = () => {
    const { visibleNotifications } = useUnit(lkNotificationModel.stores.lkNotifications)
    const { closing, handleClose } = usePopUpNotifications()
    return (
        <PopUpNotificationsStyled>
            {visibleNotifications.map((notification) => {
                return (
                    <PopUpNotificationsItem
                        onClick={handleClose(notification.id)}
                        key={notification.id}
                        open={closing !== notification.id}
                    >
                        <NotificationItem
                            {...notification}
                            fullText={false}
                            maxLetters={19}
                            closeAnimation={false}
                            onClose={handleClose(notification.id)}
                        />
                    </PopUpNotificationsItem>
                )
            })}
        </PopUpNotificationsStyled>
    )
}

export default PopUpNotifications

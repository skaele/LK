import { baseNotification, businesstripNotification, docsNotification, ItemNotification } from '@api/model/notification'
import { personalNotificationModel } from '@entities/notification'
import Flex from '@shared/ui/flex'
import { Error } from '@ui/error'
import React from 'react'
import { CardDocument, CardNotification } from './index'
import { useUnit } from 'effector-react'

interface Props {
    listNotification: ItemNotification[]
}

const ListNotifications = ({ listNotification }: Props) => {
    const type = useUnit(personalNotificationModel.stores.type)

    return (
        <Flex d="column" gap="8px">
            {listNotification.length ? (
                listNotification.map((notification) =>
                    type === 'notifications' ? (
                        <CardNotification
                            key={notification.id}
                            data={notification as baseNotification | businesstripNotification}
                        />
                    ) : (
                        <CardDocument key={notification.id} data={notification as docsNotification} />
                    ),
                )
            ) : (
                <Error text={'У вас нет приказов, с которыми вы еще не ознакомились'} />
            )}
        </Flex>
    )
}

export default ListNotifications

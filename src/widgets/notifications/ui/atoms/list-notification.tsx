import React from 'react'

import { personalNotificationModel } from '@entities/notification'

import {
    ItemNotification,
    baseNotification,
    businesstripNotification,
    docsNotification,
} from '@shared/api/model/notification'
import { Error } from '@shared/ui/error'
import Flex from '@shared/ui/flex'

import { CardDocument, CardNotification } from './index'

interface Props {
    listNotification: ItemNotification[]
}

const ListNotifications = ({ listNotification }: Props) => {
    const type = personalNotificationModel.selectors.useType()

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

import { $api } from '@api/config'
import { ItemNotification, viewNotificationResponse } from '@api/model/notification'

import token from '@utils/token'

export const get = () => {
    return $api.get<ItemNotification[]>(`?getDocList&token=${token()}`).then((res) => {
        return {
            ...res,
            data: res.data.map((item) => ({ ...item, document: true })),
        }
    })
}

export const view = (notificationId: string) => {
    return $api.get<viewNotificationResponse>(`?viewDoc=${notificationId}&token=${token()}`)
}

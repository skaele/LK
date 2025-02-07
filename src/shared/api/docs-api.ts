import { $api } from '@shared/api/config'
import { ItemNotification, viewNotificationResponse } from '@shared/api/model/notification'
import token from '@shared/lib/token'

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

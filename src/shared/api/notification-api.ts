import { $api } from '@shared/api/config'
import { Notifications, viewNotificationResponse } from '@shared/api/model/notification'
import token from '@shared/lib/token'

export const get = () => {
    return $api.get<Notifications>(`?getNotification&token=${token()}`)
}

export const view = (notificationId: string) => {
    return $api.get<viewNotificationResponse>(`?viewNotification=${notificationId}&token=${token()}`)
}

import { $api } from '@api/config'
import { Notifications, viewNotificationResponse } from '@api/model/notification'
import token from '@utils/token'

export const get = () => {
    return $api.get<Notifications>(`?getNotification&token=${token()}`)
}

export const view = (notificationId: string) => {
    return $api.get<viewNotificationResponse>(`?viewNotification=${notificationId}&token=${token()}`)
}

import { NotificationsResponse } from '@shared/api/notifications/lk-notification-api'
import { UserSettings } from '@shared/api/settings'

const typeSettingsDictionary: Record<string, keyof UserSettings['notifications']> = {
    message: 'messages',
    'doc-for-review': 'doclist',
    'version-update': 'newVersion',
    'digital-services': 'applications',
    alert: 'news',
    schedule: 'schedule',
}

export const filterNotificationsViaSettings = (settings: UserSettings['notifications'], data: NotificationsResponse) =>
    data.filter(({ type }) => settings[typeSettingsDictionary[type]])

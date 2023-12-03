import { UserSettings } from '@entities/settings/types'
import { NotificationsResponse } from '@shared/api/lk-notification-api'

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

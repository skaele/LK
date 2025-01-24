import { UserSettingsSchema } from '@entities/settings/constants'
import { UserSettings } from '@entities/settings/types'

import { $settingsApi } from './config/settings-config'

export const getServerSettings = async () => {
    const { data } = await $settingsApi.get<UserSettings>('', { signal: AbortSignal.timeout(5000) })

    const parsed = UserSettingsSchema.parse(data)

    return parsed
}

export const setServerSettings = async (settings: UserSettings) => {
    const { data } = await $settingsApi.post('', settings)

    return data
}

import { UserSettings } from '@entities/settings/types'
import { $settingsApi } from './config/settings-config'
import { UserSettingsSchema } from '@entities/settings/constants'

export const getServerSettings = async () => {
    const { data } = await $settingsApi.get<UserSettings>('')

    const parsed = UserSettingsSchema.parse(data)

    return parsed
}

export const setServerSettings = async (settings: UserSettings) => {
    const { data } = await $settingsApi.post('', settings)

    return data
}

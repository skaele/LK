import { userSettingsModel } from '@entities/settings'
import { ThemeVariant } from '@shared/constants'
import { createEvent, sample } from 'effector'

export const switchTheme = createEvent<{ isDark: boolean }>()

sample({
    clock: switchTheme,
    source: userSettingsModel.stores.userSettings,
    filter: (settings) => Boolean(settings),
    fn: (settings, { isDark }) => {
        return {
            appearance: {
                ...settings!.appearance,
                theme: !isDark ? ThemeVariant.Light : ThemeVariant.Dark,
            },
        }
    },
    target: userSettingsModel.events.update,
})

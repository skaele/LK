import { userSettingsModel } from '@entities/settings'
import { UserSettings } from '@entities/settings/types'
import { createEvent, sample } from 'effector'

export const setHomePageWidgetView = createEvent<RequireOnlyOne<Omit<UserSettings['homePage'], 'pages'>>>()

sample({
    clock: setHomePageWidgetView,
    source: userSettingsModel.stores.userSettings,
    fn: (settings, widgetView) => ({
        homePage: {
            ...settings!.homePage,
            ...widgetView,
        },
    }),
    target: userSettingsModel.events.update,
})

import React from 'react'

import { userSettingsModel } from '@entities/settings'
import { switchTheme } from '@features/theme-toggle/model'
import { ThemeVariant } from '@shared/constants'
import { Title } from '@shared/ui/title'
import ToggleItem from '@shared/ui/toggle-item'
import { useUnit } from 'effector-react'

import { TITLE_CONFIG } from '../constants'

const AppearanceSettings = () => {
    const settings = useUnit(userSettingsModel.stores.userSettings)
    const theme = settings?.appearance.theme
    const isLight = theme === ThemeVariant.Light

    return (
        <>
            <Title {...TITLE_CONFIG}>Вид</Title>
            <ToggleItem title={'Темная тема'} state={!isLight} action={(isDark) => switchTheme({ isDark })} />
        </>
    )
}

export default AppearanceSettings

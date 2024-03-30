import { userSettingsModel } from '@entities/settings'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React from 'react'
import { TITLE_CONFIG } from '../constants'
import ToggleItem from '@shared/ui/toggle-item'
import { ThemeVariant } from '@shared/constants'
import { FiMoon, FiSun } from 'react-icons/fi'
import { switchTheme } from '@features/theme-toggle/model'

const AppearanceSettings = () => {
    const settings = useUnit(userSettingsModel.stores.userSettings)
    const theme = settings?.appearance.theme
    const isLight = theme === ThemeVariant.Light

    const icon = isLight ? <FiSun /> : <FiMoon />

    return (
        <>
            <Title {...TITLE_CONFIG}>Вид</Title>
            <ToggleItem
                title={(<>Темная тема {icon}</>) as unknown as string}
                state={!isLight}
                action={(isDark) => switchTheme({ isDark })}
            />
        </>
    )
}

export default AppearanceSettings

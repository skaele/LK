import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

import { useUnit } from 'effector-react'

import { userSettingsModel } from '@entities/settings'

import { Colors, ThemeVariant } from '@shared/consts'
import { Button } from '@shared/ui/button'
import ToggleItem from '@shared/ui/toggle-item'
import { IconWrapper } from '@shared/widgets/notifications/ui/styles'

import { switchTheme } from './model'

type Props = {
    type: 'toggle' | 'h-button' | 'v-button'
    onClick?: () => void
}

const ThemeToggle = ({ type, onClick }: Props) => {
    const settings = useUnit(userSettingsModel.stores.userSettings)
    const theme = settings?.appearance.theme
    const isLight = theme === ThemeVariant.Light

    const icon = isLight ? <FiSun /> : <FiMoon />
    const themeWord = isLight ? 'Светлая' : 'Темная'
    const text = `Тема: ${themeWord}`

    const changeTheme = () => {
        switchTheme({ isDark: isLight })
        onClick?.()
    }

    if (type === 'toggle')
        return (
            <ToggleItem title={'Темная тема'} state={!isLight} action={(isDark: boolean) => switchTheme({ isDark })} />
        )

    if (type === 'h-button') {
        return (
            <Button text={text} background="var(--block)" icon={icon} width="100%" align="left" onClick={changeTheme} />
        )
    }

    return (
        <Button
            padding="0"
            background={Colors.white.transparent2}
            icon={
                <IconWrapper width="30px" background={Colors.green.main}>
                    {icon}
                </IconWrapper>
            }
            onClick={changeTheme}
            text={text}
            width="calc(50% - 5px)"
            height="73px"
            direction="vertical"
            shrinkTextInMobile
        />
    )
}

export default ThemeToggle

import { userSettingsModel } from '@entities/settings'
import { IconWrapper } from '@pages/profile/ui/top/styles'
import { Colors, ThemeVariant } from '@shared/constants'
import { Button } from '@shared/ui/button'
import ToggleItem from '@shared/ui/toggle-item'
import { useUnit } from 'effector-react'
import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
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

    // const [toggles, setToggles] = useState<ToggleItem[]>([
    //     {
    //         title: '',
    //         state: !isLight,
    //         action: (isDark: boolean) => switchTheme({ isDark }),
    //     },
    // ])

    // useEffect(() => {
    //     setToggles([
    //         {
    //             title: 'Темная тема',
    //             state: !isLight,
    //             action: (isDark: boolean) => switchTheme({ isDark }),
    //         },
    //     ])
    // }, [theme])

    const changeTheme = () => {
        switchTheme({ isDark: !isLight })
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

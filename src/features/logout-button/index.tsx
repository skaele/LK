import { confirmModel } from '@entities/confirm'
import { contextMenuModel } from '@entities/context-menu'
import { userModel } from '@entities/user'
import { IconWrapper } from '@pages/profile/ui/top/styles'
import { Colors } from '@shared/constants'
import useTheme from '@shared/lib/hooks/use-theme'
import { Button } from '@shared/ui/button'
import React from 'react'
import { FiLogOut } from 'react-icons/fi'

type Props = {
    type?: 'h-button' | 'v-button'
}

const LogoutButton = ({ type = 'h-button' }: Props) => {
    const { theme } = useTheme()
    const handleClick = () => {
        confirmModel.events.evokeConfirm({
            message: 'Вы точно хотите выйти из аккаунта?',
            onConfirm: userModel.events.logout,
        })
        contextMenuModel.events.close()
    }

    if (type === 'v-button') {
        return (
            <Button
                background={Colors.white.transparent2}
                icon={
                    <IconWrapper
                        color={Colors.red[theme === 'light' ? 'dark2' : 'light3']}
                        background={Colors.red.transparent3}
                    >
                        <FiLogOut />
                    </IconWrapper>
                }
                text="Выйти"
                height="73px"
                onClick={handleClick}
                width="calc(50% - 5px)"
                direction="vertical"
                shrinkTextInMobile
            />
        )
    }

    return (
        <Button
            align="left"
            icon={<FiLogOut />}
            onClick={handleClick}
            text="Выйти"
            width="100%"
            background="var(--block)"
        />
    )
}

export default LogoutButton

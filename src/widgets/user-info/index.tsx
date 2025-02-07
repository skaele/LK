import React from 'react'

import styled from 'styled-components'

import UserContextMenu from '@widgets/user-context-menu'

import GlobalAppSearch from '@features/global-app-search'

import { contextMenuModel } from '@entities/context-menu'

import { userModel } from '@shared/session'
import Avatar from '@shared/ui/avatar'

import { NotificationBellTutorial } from './notification-bell'

const UserInfoStyled = styled.div`
    padding: 4px;
    border-radius: var(--brLight);
    display: flex;
    align-items: center;
    gap: 12px;

    &:hover {
        background-color: var(--theme-1t);
    }
`

type Props = {
    showSearch?: boolean
}

const UserInfo = ({ showSearch = false }: Props) => {
    const {
        data: { user },
    } = userModel.selectors.useUser()

    if (!user) return null

    const handleUserClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        e.stopPropagation()
        contextMenuModel.events.open({
            e,
            height: 143,
            content: <UserContextMenu />,
        })
    }
    return (
        <UserInfoStyled>
            {showSearch && <GlobalAppSearch size="icon" />}
            <NotificationBellTutorial tutorialModule={{ id: 'home', step: 3, params: { position: 'bottom' } }} />
            <Avatar
                onClick={handleUserClick}
                width="30px"
                height="30px"
                avatar={user.avatar}
                name={user.fullName}
                marginRight="0"
            />
        </UserInfoStyled>
    )
}

export default UserInfo

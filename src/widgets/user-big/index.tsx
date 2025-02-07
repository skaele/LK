import React from 'react'
import { FiMoreVertical } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

import UserContextMenu from '@widgets/user-context-menu'

import { contextMenuModel } from '@entities/context-menu'

import { PROFILE_ROUTE } from '@shared/routing'
import { withTutorial } from '@shared/tutorial/lib/with-tutorial'
import Avatar from '@shared/ui/avatar'
import { Button } from '@shared/ui/button'
import { SkeletonShape } from '@shared/ui/skeleton-shape'
import { Title } from '@shared/ui/title'
import { TutorialComponent } from '@shared/ui/types'

const UserBigWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: fit-content;
    border-radius: var(--brSemi);
    padding: 20px;
    transition: 0.2s;
    cursor: pointer;
    color: var(--text);
    position: relative;

    .more-button {
        top: 0;
        right: 0;
        position: absolute;
    }
    &:hover {
        background: var(--theme-1);
    }
`

interface Props extends TutorialComponent {
    name: string
    avatar?: string
    loading?: boolean
    size?: string
    notifications?: number
    selected?: boolean
}

const UserBig = ({ name, avatar, loading, size, notifications, selected, forwardedRef }: Props) => {
    if (loading)
        return (
            <SkeletonShape
                shape={'circle'}
                size={{
                    width: '40px',
                    height: '40px',
                }}
            />
        )

    const handleContextMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        e.stopPropagation()
        contextMenuModel.events.open({
            e,
            height: 143,
            content: <UserContextMenu />,
        })
    }

    return (
        <UserBigWrapper to={PROFILE_ROUTE} ref={forwardedRef}>
            <Button
                icon={<FiMoreVertical />}
                className="more-button"
                background="transparent"
                onClick={handleContextMenu}
            />
            <Avatar
                notifications={notifications}
                width={size ?? '70px'}
                height={size ?? '70px'}
                avatar={avatar}
                name={name}
                marginRight="0"
                selected={selected}
            />
            <Title size={5}>{name}</Title>
        </UserBigWrapper>
    )
}

export default React.memo(UserBig)
export const UserBigTutorial = withTutorial(UserBig)

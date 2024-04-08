import { PROFILE_ROUTE, SETTINGS_ROUTE } from '@app/routes/general-routes'
import { contextMenuModel } from '@entities/context-menu'
import { lkNotificationModel } from '@entities/lk-notifications'
import LogoutButton from '@features/logout-button'
import ThemeToggle from '@features/theme-toggle'
import { NotificationsModal } from '@features/user-info/notification-bell'
import { MEDIA_QUERIES, OLD_LK_URL } from '@shared/constants'
import { Divider } from '@shared/ui/atoms'
import { Button } from '@shared/ui/button'
import NewVersionMessage from '@shared/ui/new-version-message'
import Notification from '@ui/notification'
import React from 'react'
import { FiArrowLeftCircle, FiBell, FiSettings } from 'react-icons/fi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AvailableAccounts, WhatsNew, useModal } from 'widgets'

const NotificationButtonWrapper = styled.div`
    position: relative;
`

const UserContextMenuStyled = styled.div`
    .icon {
        margin-right: 10px;
    }
    ${MEDIA_QUERIES.isMobile} {
        display: flex;
        flex-direction: column;
        gap: 10px;

        button {
            padding: 0;
            font-size: 0.9rem;
            background: transparent;
            transition: 0.2s background;

            &:hover {
                background: transparent;
            }

            &:active {
                background: var(--theme-1);
            }

            .icon {
                max-width: none;
                min-width: none;
                width: fit-content;
                min-width: 30px;
                height: 30px;
                margin-right: 12px;

                svg {
                    width: 18px;
                    height: 18px;
                    opacity: 0.6;
                    max-width: none;
                    max-height: none;
                    min-width: none;
                }
            }
        }
    }
`

const UserContextMenu = () => {
    const { open } = useModal()
    const { notifications } = lkNotificationModel.selectors.useLkNotifications()

    const handleClose = () => contextMenuModel.events.close()

    const handleWhatsNew = () => {
        contextMenuModel.events.close()
        open(<WhatsNew />, 'Что нового')
    }

    const handleOpenNotificationModal = () => {
        open(<NotificationsModal />, 'Уведомления')
        contextMenuModel.events.close()
    }

    return (
        <UserContextMenuStyled>
            <AvailableAccounts padding="8px" size="small" />
            <Divider />
            <ThemeToggle type="h-button" />
            <Divider />
            <Link to={PROFILE_ROUTE}>
                <Button
                    text="Профиль"
                    background="var(--block)"
                    icon={<HiOutlineUserCircle />}
                    width="100%"
                    align="left"
                    onClick={handleClose}
                    padding="10px"
                />
            </Link>
            <NotificationButtonWrapper>
                <Button
                    onClick={handleOpenNotificationModal}
                    icon={<FiBell />}
                    text="Уведомления"
                    width="100%"
                    background="var(--block)"
                    align="left"
                    padding="10px"
                />
                <Notification visible={notifications.length > 0} top="50%" right="0px" pulsing shadow>
                    {notifications.length}
                </Notification>
            </NotificationButtonWrapper>
            <Link to={SETTINGS_ROUTE}>
                <Button
                    text="Настройки"
                    background="var(--block)"
                    icon={<FiSettings />}
                    width="100%"
                    align="left"
                    onClick={handleClose}
                    padding="10px"
                />
            </Link>
            <a href={`${OLD_LK_URL}/index.php`}>
                <Button
                    text="Старый дизайн"
                    icon={<FiArrowLeftCircle />}
                    width="100%"
                    background="var(--block)"
                    align="left"
                    padding="10px"
                />
            </a>
            <Divider />
            <LogoutButton type="h-button" />
            <Divider />
            <Button
                align="left"
                icon={<NewVersionMessage />}
                onClick={handleWhatsNew}
                text="Что нового"
                width="100%"
                background="var(--block)"
                padding="10px"
            />
        </UserContextMenuStyled>
    )
}

export default UserContextMenu

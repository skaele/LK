import React from 'react'
import { useLocation } from 'react-router-dom'

import { UserBigTutorial } from '@widgets/user-big'

import ThemeToggle from '@features/theme-toggle'
import { GlobalAppSearchTutorial } from '@features/tutorials/global-app-search-tutorial'
import { LinkTutoiral } from '@features/tutorials/link-tutorial'

import { menuModel } from '@entities/menu'

import useResize from '@shared/lib/hooks/use-resize'
import { HOME_ROUTE } from '@shared/routing'
import { userModel } from '@shared/session'
import { withTutorial } from '@shared/tutorial/lib/with-tutorial'
import { Logo } from '@shared/ui/logo'
import { TutorialComponent } from '@shared/ui/types'

import { CloseMenuButton, LeftsideBarWrapper } from './ui'
import { LeftSideBarListTutorial } from './ui/organisms/leftside-bar-list'

const LeftsideBar = ({ forwardedRef }: TutorialComponent) => {
    const { isOpen } = menuModel.selectors.useMenu()
    const { width, height } = useResize()
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const { visibleRoutes } = menuModel.selectors.useMenu()
    const location = useLocation()

    return (
        <LeftsideBarWrapper ref={forwardedRef} isOpen={isOpen} height={height}>
            <div className="top-wrapper">
                <LinkTutoiral
                    // tutorialModule={{ id: 'sidebar', step: 4 }}
                    to={HOME_ROUTE}
                >
                    <Logo width="165px" />
                </LinkTutoiral>
                <UserBigTutorial
                    notifications={visibleRoutes?.profile.notifications}
                    avatar={user?.avatar}
                    name={user?.fullName ?? ''}
                    loading={!user}
                    selected={location.pathname === '/profile'}
                    // tutorialModule={{ id: 'sidebar', step: 1 }}
                />
                <GlobalAppSearchTutorial
                    size="small"
                    // tutorialModule={{ id: 'sidebar', step: 2 }}
                />
                <LeftSideBarListTutorial
                // tutorialModule={{ id: 'sidebar', step: 3 }}
                />
            </div>
            <ThemeToggle type="toggle" />
            {width < 1000 && <CloseMenuButton />}
        </LeftsideBarWrapper>
    )
}

export default LeftsideBar

export const LeftSideBarTutorial = withTutorial(LeftsideBar)

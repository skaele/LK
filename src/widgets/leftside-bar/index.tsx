import { HOME_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import ThemeToggle from '@features/theme-toggle'
import { Logo } from '@ui/logo'
import useResize from '@utils/hooks/use-resize'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { CloseMenuButton, LeftsideBarWrapper } from './ui'
import { GlobalAppSearchTutorial } from 'widgets/tutorial/tutorials/global-app-search-tutorial'
import { LinkTutoiral } from 'widgets/tutorial/tutorials/link-tutorial'
import { TutorialComponent } from 'widgets/tutorial/lib/with-tutorial'
import { LeftSideBarListTutorial } from 'widgets/tutorial/tutorials/left-sidebar-list-tutorial'
import { UserBigTutorial } from 'widgets/tutorial/tutorials/user-big-tutoria'
import { useUnit } from 'effector-react'

const LeftsideBar = ({ forwardedRef }: TutorialComponent) => {
    const { isOpen } = menuModel.selectors.useMenu()
    const { width, height } = useResize()
    const { currentUser: user } = useUnit(userModel.stores.user)

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

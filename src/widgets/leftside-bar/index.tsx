import { HOME_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import { GlobalAppSearchTutorial } from '@features/global-app-search'
import ThemeToggle from '@features/theme-toggle'
import { Logo } from '@ui/logo'
import useResize from '@utils/hooks/use-resize'
import React from 'react'
import { useLocation } from 'react-router-dom'
import UserBig from 'widgets/user-big'
import { CloseMenuButton, LeftsideBarList, LeftsideBarWrapper } from './ui'
import { withTutorial } from 'widgets/tutorial/lib/with-tutorial'
import { TutorialLink } from '@shared/ui/link'

const LeftsideBar = withTutorial(({ forwardedRef }) => {
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
                <TutorialLink tutorialModule={{ id: 'sidebar', step: 4 }} to={HOME_ROUTE}>
                    <Logo width="165px" />
                </TutorialLink>
                <UserBig
                    notifications={visibleRoutes?.profile.notifications}
                    avatar={user?.avatar}
                    name={user?.fullName ?? ''}
                    loading={!user}
                    selected={location.pathname === '/profile'}
                    tutorialModule={{ id: 'sidebar', step: 1 }}
                />
                <GlobalAppSearchTutorial size="small" tutorialModule={{ id: 'sidebar', step: 2 }} />
                <LeftsideBarList tutorialModule={{ id: 'sidebar', step: 3 }} />
            </div>
            <ThemeToggle type="toggle" />
            {width < 1000 && <CloseMenuButton />}
        </LeftsideBarWrapper>
    )
})

export default LeftsideBar

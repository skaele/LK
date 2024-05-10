import React from 'react'
import { TutorialActionPlate } from 'widgets/tutorial/ui/tutorial-action-plate'
import { menuModel } from '@entities/menu'
import GlobalAppSearch from '@features/global-app-search'
import Links from '@features/home/ui/links'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import UserInfo from '@features/user-info'
import Block from '@shared/ui/block'
import Flex from '@shared/ui/flex'
import styled from 'styled-components'
import AlertsWidget from 'widgets/alerts-widget'
import { CenterPage, Title } from '@ui/atoms'
import { settingsModel } from '@entities/settings'
import { withTutorial } from 'widgets/tutorial/lib/with-tutorial'

const HomePageStyled = styled.div`
    width: 100%;
    padding-top: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    @media (max-width: 1000px) {
        padding-top: 153px;
    }
`
export const HomePage = withTutorial(({ forwardedRef }) => {
    const { homeRoutes } = menuModel.selectors.useMenu()
    const { news } = settingsModel.selectors.useSettings().settings['settings-home-page'].property
    if (!homeRoutes) return null
    return (
        <HomePageStyled>
            <GlobalAppSearch tutorialModule={{ id: 'intro', step: 6, params: { position: 'bottom' } }} />
            <Links tutorialModule={{ id: 'intro', step: 7, params: { position: 'bottom' } }} links={homeRoutes} />
            <TutorialActionPlate />
            <CenterPage>
                <Block
                    forwardedRef={forwardedRef}
                    noAppearanceInMobile
                    maxWidth="750px"
                    minHeight="100%"
                    height="100%"
                    orientation="vertical"
                    gap="20px"
                >
                    <Flex>
                        <Title size={2} align="left" width="100%">
                            Главная
                        </Title>
                        <UserInfo />
                    </Flex>
                    <ScheduleAndNotification />
                    {!!news && <AlertsWidget />}
                </Block>
            </CenterPage>
        </HomePageStyled>
    )
})

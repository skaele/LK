import React, { useEffect } from 'react'
import { TutorialActionPlate } from 'widgets/tutorial/ui/tutorial-action-plate'
import { menuModel } from '@entities/menu'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import UserInfo from '@features/user-info'
import Block from '@shared/ui/block'
import Flex from '@shared/ui/flex'
import styled from 'styled-components'
import AlertsWidget from 'widgets/alerts-widget'
import { CenterPage, Title } from '@ui/atoms'
import { TutorialComponent } from 'widgets/tutorial/lib/with-tutorial'
import { useUnit } from 'effector-react'
import { userSettingsModel } from '@entities/settings'
import { paymentsModel } from '@entities/payments'
import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import { GlobalAppSearchTutorial } from 'widgets/tutorial/tutorials/global-app-search-tutorial'
import { LinksTutorial } from 'widgets/tutorial/tutorials/links-tutorial'

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
export const HomePage = ({ forwardedRef }: TutorialComponent) => {
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const { homeRoutes } = menuModel.selectors.useMenu()
    const settings = useUnit(userSettingsModel.stores.userSettings)
    const news = settings?.homePage.hasNews

    const payments = useUnit(paymentsModel.stores.$paymentsStore)
    const {
        data: { schedule },
    } = useUnit(scheduleModel.stores.schedule)

    useEffect(() => {
        if (!payments) {
            paymentsModel.events.getPayments()
        }
    }, [payments])

    useEffect(() => {
        if (!schedule) {
            scheduleModel.effects.getScheduleFx(user)
        }
    }, [schedule])

    if (!homeRoutes) return null
    return (
        <HomePageStyled>
            <GlobalAppSearchTutorial tutorialModule={{ id: 'home', step: 1, params: { position: 'bottom' } }} />
            <LinksTutorial
                tutorialModule={{ id: 'home', step: 2, params: { position: 'bottom' } }}
                links={homeRoutes}
            />
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
}

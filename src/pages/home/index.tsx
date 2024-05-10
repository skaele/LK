import { menuModel } from '@entities/menu'
import { paymentsModel } from '@entities/payments'
import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import GlobalAppSearch from '@features/global-app-search'
import Links from '@features/home/ui/links'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import UserInfo from '@features/user-info'
import Block from '@shared/ui/block'
import Flex from '@shared/ui/flex'
import { CenterPage, Title, Wrapper } from '@ui/atoms'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import AlertsWidget from 'widgets/alerts-widget'
import HomeTopPlate from './ui/home-top-plate'
import { useUnit } from 'effector-react'
import { userSettingsModel } from '@entities/settings'

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

const Home = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()

    const payments = useUnit(paymentsModel.stores.$paymentsStore)
    const {
        data: { schedule },
    } = scheduleModel.selectors.useSchedule()

    const { homeRoutes } = menuModel.selectors.useMenu()

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

    const settings = useUnit(userSettingsModel.stores.userSettings)

    if (!user || !homeRoutes) return null

    return (
        <Wrapper loading={!user} load={() => null} error={error} data={user}>
            <HomeTopPlate />
            <HomePageStyled>
                <GlobalAppSearch />
                {Boolean(Object.keys(homeRoutes).length) && <Links links={homeRoutes} />}
                <CenterPage>
                    <Block
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
                        {!!settings?.homePage.hasNews && <AlertsWidget />}
                    </Block>
                </CenterPage>
            </HomePageStyled>
        </Wrapper>
    )
}

export default Home

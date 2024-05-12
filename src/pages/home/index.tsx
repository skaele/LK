import { paymentsModel } from '@entities/payments'
import { scheduleModel } from '@entities/schedule'
import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import { Wrapper } from '@ui/atoms'
import React, { useEffect } from 'react'
import HomeTopPlate from './ui/home-top-plate'
import { useUnit } from 'effector-react'
import { HomePage } from './ui/home-page'

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

    if (!user || !homeRoutes) return null
    return (
        <Wrapper loading={!user} load={() => null} error={error} data={user}>
            <HomeTopPlate />
            <HomePage tutorialModule={{ id: 'home', step: 0, params: { position: 'top' } }} />
        </Wrapper>
    )
}

export default Home

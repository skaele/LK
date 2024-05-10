import { menuModel } from '@entities/menu'
import { userModel } from '@entities/user'
import { Wrapper } from '@ui/atoms'
import React from 'react'
import HomeTopPlate from './ui/home-top-plate'
import { HomePage } from './ui/home-page'

const Home = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()

    const { homeRoutes } = menuModel.selectors.useMenu()

    if (!user || !homeRoutes) return null
    return (
        <Wrapper loading={!user} load={() => null} error={error} data={user}>
            <HomeTopPlate />
            <HomePage tutorialModule={{ id: 'intro', step: 5, params: { position: 'top' } }} />
        </Wrapper>
    )
}

export default Home

import React from 'react'

import { userModel } from '@entities/user'
import { Wrapper } from '@ui/atoms'
import { HomePageTutorial } from 'widgets/tutorial/tutorials/home-page-tutorial'

import HomeTopPlate from './ui/home-top-plate'

const Home = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()

    if (!user) return null
    return (
        <Wrapper loading={!user} load={() => null} error={error} data={user}>
            <HomeTopPlate />
            <HomePageTutorial tutorialModule={{ id: 'home', step: 0, params: { position: 'top' } }} />
        </Wrapper>
    )
}

export default Home

import React from 'react'

import { userModel } from '@shared/session'
import { Wrapper } from '@shared/ui/atoms'

import { HomePageTutorial } from './ui/home-page'
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

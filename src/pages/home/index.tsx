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

    if (!user) return null
    return (
        <Wrapper loading={!user} load={() => null} error={error} data={user}>
            <HomeTopPlate />
            <HomePage tutorialModule={{ id: 'home', step: 0, params: { position: 'top' } }} />
        </Wrapper>
    )
}

export default Home

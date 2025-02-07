import React from 'react'
import { AiOutlineReload } from 'react-icons/ai'

import { userModel } from '@entities/user'

import { Colors } from '@shared/constants'
import { BrowserStorageKey } from '@shared/constants/browser-storage-key'
import getLettersColors from '@shared/lib/get-letters-colors'

import { Button } from '@ui/button'
import { Error } from '@ui/error'
import { Loading } from '@ui/loading'
import { Logo } from '@ui/logo'

import Flex from '../flex'
import { InitialLoaderWrapper } from './styles'

interface Props {
    loading: boolean
}

const InitialLoader = ({ loading }: Props) => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()
    const color = user ? getLettersColors(user?.fullName) : Colors.blue.main

    const loadUser = () =>
        userModel.effects.getUserFx({
            token: localStorage.getItem(BrowserStorageKey.Token) ?? '',
            jwt: localStorage.getItem(BrowserStorageKey.JWT),
        })

    const handleLogout = () => userModel.events.logout()

    if (!!error)
        return (
            <InitialLoaderWrapper $loading={true} color={color}>
                <Error text={error}>
                    <Flex d="column" gap="8px">
                        <Button onClick={loadUser} text="Попробовать снова" icon={<AiOutlineReload />} width="200px" />
                        <Button
                            onClick={handleLogout}
                            textColor="var(--theme-mild-opposite)"
                            text="Выйти"
                            width="200px"
                            background="var(--theme)"
                        />
                    </Flex>
                </Error>
            </InitialLoaderWrapper>
        )

    return (
        <InitialLoaderWrapper color={color} $loading={loading}>
            <Logo short width="100px" />
            {loading && <Loading />}
        </InitialLoaderWrapper>
    )
}

export default InitialLoader

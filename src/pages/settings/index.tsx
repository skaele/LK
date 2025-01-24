import React from 'react'
import { FiLogOut } from 'react-icons/fi'

import styled from 'styled-components'

import { confirmModel } from '@entities/confirm'
import { userModel } from '@entities/user'

import { MEDIA_QUERIES } from '@shared/constants'
import { Button, CenterPage } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'

import { SettingsContent } from './ui/settings-content'
import { SettingsList } from './ui/settings-list'

const SettingsPage = () => {
    return (
        <CenterPage padding="10px">
            <PageBlock
                topRightCornerElement={
                    <LogoutButton
                        icon={<FiLogOut />}
                        text={'Выйти из аккаунта'}
                        onClick={() => {
                            confirmModel.events.evokeConfirm({
                                message: 'Вы точно хотите выйти из аккаунта?',
                                onConfirm: userModel.events.logout,
                            })
                        }}
                        textColor="var(--red)"
                        background="var(--block)"
                    />
                }
            >
                <Flex ai="flex-start">
                    <SettingsList />
                    <SettingsContent />
                </Flex>
            </PageBlock>
        </CenterPage>
    )
}

export default SettingsPage

const LogoutButton = styled(Button)`
    ${MEDIA_QUERIES.isMobile} {
        .text {
            display: none;
        }
        .icon {
            margin-right: 0;
        }
    }
`

import React from 'react'
import { useHistory } from 'react-router'

import { tutorialModel } from '@entities/tutorial'
import { userModel } from '@entities/user'
import { getEntries } from '@shared/lib/typescript/getEntries'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { TITLE_CONFIG } from '../constants'
import { CompletableLinkField } from './ui/completable-link-field'

export const StartTutorialLinks = () => {
    const history = useHistory()
    const [tutorials, state, tutorialEnabled, moduleRestarted, user] = useUnit([
        tutorialModel.stores.tutorials,
        tutorialModel.stores.tutorialState,
        tutorialModel.events.tutorialEnabled,
        tutorialModel.events.moduleRestarted,
        userModel.stores.user,
    ])

    if (!tutorials) return null
    return (
        <div>
            <Title {...TITLE_CONFIG} bottomGap={'8px'}>
                Запустить программу обучения
            </Title>
            <Container>
                {getEntries(tutorials)
                    .sort((a, b) => a[1].index - b[1].index)
                    .filter(([, value]) => value.roles.includes(user?.currentUser?.user_status || ''))
                    .map(([key, value]) => {
                        if (value.name)
                            return (
                                <CompletableLinkField
                                    completed={value.completed}
                                    key={key}
                                    action={() => {
                                        if (value.completed) moduleRestarted(key)
                                        if (!state) tutorialEnabled(true)
                                        history.push(value.path)
                                    }}
                                    title={value.name}
                                    type="link"
                                />
                            )
                    })}
            </Container>
        </div>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

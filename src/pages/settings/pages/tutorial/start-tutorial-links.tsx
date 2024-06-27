import { Title } from '@shared/ui/title'
import React from 'react'
import { TITLE_CONFIG } from '../constants'
import { useUnit } from 'effector-react'
import { tutorialModel } from '@entities/tutorial'
import { useHistory } from 'react-router'
import { CompletableLinkField } from './ui/completable-link-field'
import styled from 'styled-components'
import { getEntries } from '@shared/lib/typescript/getEntries'

export const StartTutorialLinks = () => {
    const history = useHistory()
    const [tutorials, state, tutorialEnabled, moduleRestarted] = useUnit([
        tutorialModel.stores.tutorials,
        tutorialModel.stores.tutorialState,
        tutorialModel.events.tutorialEnabled,
        tutorialModel.events.moduleRestarted,
    ])
    if (!tutorials) return null
    return (
        <div>
            <Title {...TITLE_CONFIG} bottomGap={'8px'}>
                Запустить программу обучения
            </Title>
            <Container>
                {getEntries(tutorials).map(([key, value]) => (
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
                ))}
            </Container>
        </div>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

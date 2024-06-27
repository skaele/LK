import { tutorialModel } from '@entities/tutorial'
import { Colors } from '@shared/constants'
import { Button, Title } from '@shared/ui/atoms'
import ToggleItem from '@shared/ui/toggle-item'
import { useUnit } from 'effector-react'
import React from 'react'
import { TITLE_CONFIG } from '../constants'
import styled from 'styled-components'
import { Wrapper } from '../styled'
import { confirmModel } from '@entities/confirm'
import { TutorialProgressBar } from './tutorial-progress-bar'
import { StartTutorialLinks } from './start-tutorial-links'

export const TutorialSettings = () => {
    const [tutorialEnabled, setTutorialState, clearProgress, clearAll] = useUnit([
        tutorialModel.stores.tutorialState,
        tutorialModel.events.tutorialEnabled,
        tutorialModel.events.clearProgress,

        tutorialModel.events.clearAll,
    ])
    const evokeConfirm = useUnit(confirmModel.events.evokeConfirm)
    return (
        <Wrapper>
            <div>
                <Title {...TITLE_CONFIG} bottomGap={'4px'}>
                    Общее
                </Title>
                <ToggleItem
                    title={'Обучение'}
                    state={Boolean(tutorialEnabled)}
                    action={(newValue) => setTutorialState(newValue)}
                />
                <TutorialProgressBar />
            </div>
            <StartTutorialLinks />
            <div>
                <Title {...TITLE_CONFIG} bottomGap={'4px'}>
                    Необратимые действия
                </Title>
                <ButtonStyled
                    onClick={() => {
                        evokeConfirm({
                            message: 'Прогресс обучения будет сброшен. Вы хотите продолжить?',
                            onConfirm: () => {
                                clearProgress()
                                confirmModel.events.closeConfirm()
                            },
                        })
                    }}
                    text="Сбросить прогресс"
                    background={Colors.red.main}
                    textColor="white"
                />
                <ButtonStyled
                    onClick={() => {
                        evokeConfirm({
                            message: 'Ваш аккаунт будет удален из базы обучния. Продолжить?',
                            onConfirm: () => {
                                clearAll()
                                confirmModel.events.closeConfirm()
                            },
                        })
                    }}
                    text="Сбросить все (для теста)"
                    background={Colors.red.main}
                    textColor="white"
                />
            </div>
        </Wrapper>
    )
}

const ButtonStyled = styled(Button)`
    margin: 8px;
`

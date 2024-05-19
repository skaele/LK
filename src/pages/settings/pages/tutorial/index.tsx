import { tutorialModel } from '@entities/tutorial'
import { Colors } from '@shared/constants'
import { Button, Title } from '@shared/ui/atoms'
import ToggleItem from '@shared/ui/toggle-item'
import { useUnit } from 'effector-react'
import React from 'react'
import { TITLE_CONFIG } from '../constants'
import { LinkField } from '@pages/settings/ui'
import styled from 'styled-components'
import { Wrapper } from '../styled'
import { useHistory } from 'react-router'
import { APPLICATIONS_ROUTE } from '@app/routes/routes'
import { HOME_ROUTE, PAYMENTS_ROUTE } from '@app/routes/general-routes'
import { confirmModel } from '@entities/confirm'

export const TutorialSettings = () => {
    const history = useHistory()
    const [tutorialEnabled, setTutorialState, clearProgress] = useUnit([
        tutorialModel.stores.tutorialState,
        tutorialModel.events.tutorialEnabled,
        tutorialModel.events.clearProgress,
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
            </div>
            <div>
                <Title {...TITLE_CONFIG} bottomGap={'4px'}>
                    Запустить программу обучения
                </Title>
                <LinkField action={() => history.push(HOME_ROUTE)} title="Главная" type="link" />
                <LinkField action={() => history.push(APPLICATIONS_ROUTE)} title="Цифровые сервисы" type="link" />
                <LinkField action={() => history.push(PAYMENTS_ROUTE)} title="Договоры и оплаты" type="link" />
            </div>
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
            </div>
        </Wrapper>
    )
}

const ButtonStyled = styled(Button)`
    margin-left: 8px;
`

import { tutorialModel } from '@entities/tutorial'
import { Colors } from '@shared/constants'
import { Button, Title } from '@shared/ui/atoms'
import ToggleItem from '@shared/ui/toggle-item'
import { useUnit } from 'effector-react'
import React, { useEffect, useState } from 'react'
import { TITLE_CONFIG } from '../constants'
import styled, { keyframes } from 'styled-components'
import { Wrapper } from '../styled'
import { confirmModel } from '@entities/confirm'
import { TutorialProgressBar } from './tutorial-progress-bar'
import { StartTutorialLinks } from './start-tutorial-links'
import { IoCheckmarkCircleOutline, IoSync } from 'react-icons/io5'

export const TutorialSettings = () => {
    const [tutorialEnabled, setTutorialState, clearProgress, sync, pending] = useUnit([
        tutorialModel.stores.tutorialState,
        tutorialModel.events.tutorialEnabled,
        tutorialModel.events.clearProgress,
        tutorialModel.events.sync,
        tutorialModel.mutations.syncMutation.$pending,

        tutorialModel.events.clearAll,
    ])
    const evokeConfirm = useUnit(confirmModel.events.evokeConfirm)

    const [isOnline, setIsOnline] = useState(navigator.onLine)
    const [syncVisible, setSyncVisible] = useState(false)

    const updateOnlineStatus = () => {
        setSyncVisible(true)
        setIsOnline(navigator.onLine)

        if (navigator.onLine) {
            console.log('sync')
            sync()
        }
    }
    useEffect(() => {
        window.addEventListener('online', updateOnlineStatus)
        window.addEventListener('offline', updateOnlineStatus)

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('online', updateOnlineStatus)
            window.removeEventListener('offline', updateOnlineStatus)
        }
    }, [])

    return (
        <Wrapper>
            {syncVisible &&
                (isOnline ? (
                    pending ? (
                        <Title
                            icon={<Sync />}
                            size={4}
                            align="left"
                            iconColor={Colors.orange.main}
                            style={{ color: Colors.orange.main }}
                        >
                            Синхронизация
                        </Title>
                    ) : (
                        <Title
                            icon={<IoCheckmarkCircleOutline />}
                            iconColor="var(--greenMain)"
                            size={4}
                            align="left"
                            style={{ color: 'var(--greenMain)' }}
                        >
                            Синхронизировано
                        </Title>
                    )
                ) : (
                    <Title size={4} align="left" style={{ color: Colors.red.main }}>
                        Нет подключения к интернету
                    </Title>
                ))}
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
                {/* <ButtonStyled
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
                /> */}
            </div>
        </Wrapper>
    )
}

const ButtonStyled = styled(Button)`
    margin: 8px;
`
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const Sync = styled(IoSync)`
    animation: ${rotate} 1s infinite linear;
`

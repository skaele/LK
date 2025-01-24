import React, { useState } from 'react'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { tutorialModel } from '@entities/tutorial'
import { userModel } from '@entities/user'

import { Colors } from '@shared/constants'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { Button } from '@shared/ui/button'

import TrainingPic from '../../shared/images/tutorial-picture.jpg'
import { Buttons, Hero, Text, Title, TutorialHeroLayout, TutorialHeroText } from './ui/welcome-text'

export const TutorialHero = () => {
    const [isDeleted, setIsDeleted] = useState(false)
    const [heroVisited, tutorialState, tutorialEnabled, setHeroVisited] = useUnit([
        tutorialModel.stores.heroVisited,
        tutorialModel.stores.tutorialState,
        tutorialModel.events.tutorialEnabled,
        tutorialModel.events.setHeroVisited,
    ])
    const {
        data: { user },
    } = userModel.selectors.useUser()

    const { isMobile, isTablet } = useCurrentDevice()
    if (tutorialState !== null || (heroVisited && !isDeleted)) return null

    return (
        <TutorialHeroLayout onMouseUp={() => setHeroVisited(true)}>
            <Hero onMouseUp={(e) => e.stopPropagation()} deleted={isDeleted}>
                <Img src={TrainingPic} />
                <TutorialHeroText>
                    {user?.user_status === 'staff' ? (
                        <>
                            <Text>
                                В Личном кабинете есть обучение, которое знакомит с основными разделами и рассказывает
                                о возможностях Личного кабинета.
                            </Text>
                            <Text>
                                Следить за прогрессом прохождения можно в настройках Личного кабинета. Также
                                в настройках можно напрямую запусить обучение по разделу.
                            </Text>
                            {!isMobile && !isTablet && (
                                <Text>
                                    Связь со студентами и сотрудниками, доступ к корпоративным контактным данным,
                                    цифровые сервисы - все в одном месте.
                                </Text>
                            )}
                        </>
                    ) : (
                        <>
                            <Title>Привет!</Title>
                            <Text>
                                В Личном кабинете есть обучение. Пройдя его, ты познакомишься с основными разделами
                                и возможностями Личного кабинета, которые сделают твое обучение удобнее.
                            </Text>
                            <Text>
                                Следить за прогрессом прохождения можно в настройках Личного кабинета. Также
                                в настройках можно напрямую запустить обучение по разделу.
                            </Text>
                            {!isMobile && !isTablet && (
                                <Text>
                                    Отслеживай расписание, заказывай справки, проводи оплаты, общайся с сотрудниками,
                                    преподавателями и студентами - все в одном месте.
                                </Text>
                            )}
                        </>
                    )}

                    <Buttons>
                        <Button
                            padding="16px 24px"
                            background="none"
                            height="52px"
                            fontSize="16px"
                            textColor="#B5BDFF"
                            hoverTextColor="#9EA8F8"
                            text="Отказаться"
                            onClick={() => {
                                tutorialEnabled(false)
                                setHeroVisited(true)
                                setIsDeleted(true)

                                setTimeout(() => {
                                    setIsDeleted(false)
                                }, 150)
                            }}
                        />
                        <Button
                            padding="16px 36px"
                            text="Поехали!"
                            fontSize="16px"
                            height="52px"
                            background={Colors.blue.light1}
                            hoverBackground="#6E7AE0"
                            textColor="white"
                            onClick={() => {
                                tutorialEnabled(true)
                                setHeroVisited(true)
                                setIsDeleted(true)

                                setTimeout(() => {
                                    setIsDeleted(false)
                                }, 150)
                            }}
                        />
                    </Buttons>
                </TutorialHeroText>
            </Hero>
        </TutorialHeroLayout>
    )
}

const Img = styled.img`
    object-fit: cover;
    aspect-ratio: 1;
    position: absolute;
    width: 72px;
    border-radius: 50%;
    right: 24px;
    top: 24px;
    background-size: 20%;

    @media (min-width: 1000px) {
        scale: 1;
        position: relative;
        width: 50%;
        max-width: 500px;
        border-radius: 0;
        height: auto;
        top: 0;
        right: 0;
    }
`

import React from 'react'

import TrainingPic from '../../shared/images/tutorial-picture.jpg'
import { Button } from '@shared/ui/button'
import { Colors } from '@shared/constants'
import { useUnit } from 'effector-react'
import { tutorialModel } from '@entities/tutorial'
import { Buttons, Text, Title, Hero, TutorialHeroLayout, TutorialHeroText } from './ui/welcome-text'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import styled from 'styled-components'

export const TutorialHero = () => {
    const [heroVisited, setTutorialState, setHeroVisited] = useUnit([
        tutorialModel.stores.heroVisited,
        tutorialModel.events.setTutorialState,
        tutorialModel.events.setHeroVisited,
    ])

    const { isMobile, isTablet } = useCurrentDevice()
    if (heroVisited) return null

    return (
        <TutorialHeroLayout onMouseUp={() => setHeroVisited(true)}>
            <Hero onMouseUp={(e) => e.stopPropagation()}>
                <Img src={TrainingPic} />
                <TutorialHeroText>
                    <Title>Привет!</Title>
                    <Text>
                        В Личном кабинете появилось обучение. Пройдя его, ты познакомишься с основными моментами и
                        возможностями, которые сделают твое обучение более удобным.
                    </Text>
                    {!isMobile && !isTablet && (
                        <Text>
                            Отслеживай расписание, заказывай справки, проводи оплаты, общайся с сотрудниками,
                            преподавателями и студентами - все в одном месте.
                        </Text>
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
                                setTutorialState(false)
                                setHeroVisited(true)
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
                                setTutorialState(true)
                                setHeroVisited(true)
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

    @media (min-width: 1000px) {
        position: relative;
        width: 50%;
        max-width: 500px;
        border-radius: 0;
        height: auto;
        top: 0;
        right: 0;
    }
`

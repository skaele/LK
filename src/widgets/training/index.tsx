import React from 'react'

import TrainingPic from '../../shared/images/training-picture.jpg'
import { Buttons, Text, Title, TrainingLayout, TrainingWelcome, TrainingWelcomeText } from './ui/welcome-text'
import { Button } from '@shared/ui/button'
import { Colors } from '@shared/constants'
import { useUnit } from 'effector-react'
import { $trStore, setTrainingVisible } from '@pages/home/ui/bright-plate'

export const Training = () => {
    const trainingVisible = useUnit($trStore)

    if (!trainingVisible) {
        return null
    }

    return (
        <TrainingLayout onMouseUp={() => setTrainingVisible(false)}>
            <TrainingWelcome onMouseUp={(e) => e.stopPropagation()}>
                <img height="440px" src={TrainingPic} />
                <TrainingWelcomeText>
                    <Title>Привет!</Title>
                    <Text>
                        В Личном кабинете появилось обучение. Пройдя его, ты познакомишься с основными моментами и
                        возможностями, которые сделают твое обучение более удобным.
                        <br />
                        <br />
                        Отслеживай расписание, заказывай справки, проводи оплаты, общайся с сотрудниками,
                        преподавателями и студентами - все в одном месте.
                    </Text>
                    <Buttons>
                        <Button
                            padding="16px 24px"
                            background="none"
                            height="52px"
                            fontSize="16px"
                            textColor="#B5BDFF"
                            hoverTextColor="#9EA8F8"
                            text="Отказаться"
                            onClick={() => setTrainingVisible(false)}
                        />
                        <Button
                            padding="16px 36px"
                            text="Поехали!"
                            fontSize="16px"
                            height="52px"
                            background={Colors.blue.light1}
                            hoverBackground="#6E7AE0"
                            textColor="white"
                            onClick={() => setTrainingVisible(false)}
                        />
                    </Buttons>
                </TrainingWelcomeText>
            </TrainingWelcome>
        </TrainingLayout>
    )
}

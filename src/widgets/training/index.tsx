import React, { useState } from 'react'

import TrainingPic from '../../shared/images/training-picture.jpg'
import { Buttons, Text, Title, TrainingLayout, TrainingWelcome, TrainingWelcomeText } from './ui/welcome-text'
import { Button } from '@shared/ui/button'
import { Colors } from '@shared/constants'

export const Training = () => {
    const [trainingVisible, setTrainingVisible] = useState(true)

    if (!trainingVisible) {
        return null
    }

    return (
        <TrainingLayout onClick={() => setTrainingVisible(false)}>
            <TrainingWelcome onClick={(e) => e.stopPropagation()}>
                <img height="390px" src={TrainingPic} />
                <TrainingWelcomeText>
                    <Title>Привет!</Title>
                    <Text>
                        Являясь всего лишь частью общей картины, непосредственные участники технического прогресса
                        объединены в целые кластеры себе подобных. В целом, конечно, дальнейшее развитие различных форм
                        деятельности требует определения и уточнения инновационных методов управления процессами.
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
                            color="white"
                            onClick={() => setTrainingVisible(false)}
                        />
                    </Buttons>
                </TrainingWelcomeText>
            </TrainingWelcome>
        </TrainingLayout>
    )
}

import { Title } from '@shared/ui/title'
import React from 'react'
import { TITLE_CONFIG } from '../constants'
import { LinkField } from '@pages/settings/ui'
import { useUnit } from 'effector-react'
import { tutorialModel } from '@entities/tutorial'
import { useHistory } from 'react-router'

export const StartTutorialLinks = () => {
    const history = useHistory()
    const tutorials = useUnit(tutorialModel.stores.tutorials)
    if (!tutorials) return null

    return (
        <div>
            <Title {...TITLE_CONFIG} bottomGap={'4px'}>
                Запустить программу обучения
            </Title>
            {Object.entries(tutorials).map(([key, value]) => (
                <LinkField key={key} action={() => history.push(value.path)} title={value.name} type="link" />
            ))}
        </div>
    )
}

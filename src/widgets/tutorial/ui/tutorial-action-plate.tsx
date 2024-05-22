import { tutorialModel } from '@entities/tutorial'
import { BrightPlate } from '@pages/home/ui/bright-plate'
import { useUnit } from 'effector-react'
import React from 'react'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'

export const TutorialActionPlate = () => {
    const [tutorialState, setHeroVisited, interactions] = useUnit([
        tutorialModel.stores.tutorialState,
        tutorialModel.events.setHeroVisited,
        tutorialModel.stores.interactions,
    ])

    return (
        <BrightPlate
            onClick={() => {
                setHeroVisited(false)
            }}
            show={tutorialState === null && interactions < 5}
        >
            Начать обучение <BsArrowUpRightCircleFill size={25} />
        </BrightPlate>
    )
}

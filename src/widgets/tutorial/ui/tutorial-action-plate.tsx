import { tutorialModel } from '@entities/tutorial'
import { BrightPlate } from '@pages/home/ui/bright-plate'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'

export const TutorialActionPlate = () => {
    const [tutorialState, setHeroVisited, increasedInteractions, interactions] = useUnit([
        tutorialModel.stores.tutorialState,
        tutorialModel.events.setHeroVisited,
        tutorialModel.events.increasedInteractions,
        tutorialModel.stores.interactions,
    ])

    useEffect(() => {
        if (tutorialState === null && interactions < 5) {
            increasedInteractions()
        }
    }, [])

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

import React, { useEffect } from 'react'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'

import { useUnit } from 'effector-react'

<<<<<<<< HEAD:src/shared/tutorial/ui/tutorial-action-plate.tsx
import { BrightPlate } from '@shared/ui/bright-plate/bright-plate'

import { tutorialModel } from '..'
========
import { BrightPlate } from '@pages/home/ui/bright-plate'

import { tutorialModel } from '@entities/tutorial'
>>>>>>>> master:src/widgets/tutorial/ui/tutorial-action-plate.tsx

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

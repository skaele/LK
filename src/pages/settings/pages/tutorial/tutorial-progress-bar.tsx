import { tutorialModel } from '@entities/tutorial'
import ProgressBar from '@shared/ui/progress-bar'
import { useUnit } from 'effector-react'
import React from 'react'

export const TutorialProgressBar = () => {
    const tutorials = useUnit(tutorialModel.stores.tutorials)
    if (!tutorials) return null
    const length = Object.keys(tutorials).length
    const completed = Object.entries(tutorials).reduce((acc, [, module]) => {
        if (module.completed) {
            return acc + 1
        }
        return acc
    }, 0)

    const value = Math.round((completed / length) * 100)

    return (
        <ProgressBar
            value={value}
            size="small"
            title={`Пройдено: ${completed}/${length}`}
            coloring={false}
            color="green"
        />
    )
}

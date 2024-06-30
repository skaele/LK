import { tutorialModel } from '@entities/tutorial'
import ProgressBar from '@shared/ui/progress-bar'
import { useUnit } from 'effector-react'
import React from 'react'

export const TutorialProgressBar = () => {
    const tutorials = useUnit(tutorialModel.stores.tutorials)
    if (!tutorials) return null

    const tutorialsFiltered = Object.values(tutorials).filter((module) => module.name)

    const length = Object.keys(tutorialsFiltered).length
    const completed = Object.values(tutorialsFiltered).reduce((acc, module) => {
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

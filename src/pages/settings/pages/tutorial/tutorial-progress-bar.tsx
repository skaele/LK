import React from 'react'

import ProgressBar from '@s@shared/sessiongress-bar'
import { useUnit } from 'effector-react'

import { tutorialModel } from '@entities/tutorial'

import { userModel } from '@shared/session'

export const TutorialProgressBar = () => {
    const [tutorials, user] = useUnit([tutorialModel.stores.tutorials, userModel.stores.user])
    if (!tutorials) return null

    const tutorialsFiltered = Object.values(tutorials)
        .filter((module) => module.roles.includes(user?.currentUser?.user_status || ''))
        .filter((module) => module.name)

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

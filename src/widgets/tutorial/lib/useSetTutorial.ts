import { tutorialModel } from '@entities/tutorial'
import { useUnit } from 'effector-react'
import { useLocation } from 'react-router'

export const useSetTutorial = () => {
    const location = useLocation()
    const path = location.pathname

    const [tutorials, setCurrentTutorial] = useUnit([
        tutorialModel.stores.tutorials,
        tutorialModel.events.setCurrentTutorial,
    ])

    tutorials.forEach((tutorial) => {
        if (tutorial.path === path) {
            setCurrentTutorial(tutorial.id)
        }
    })
}

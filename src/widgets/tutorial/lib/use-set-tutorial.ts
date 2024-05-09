import { tutorialModel } from '@entities/tutorial'
import { TutorialId } from '@entities/tutorial/lib/tutorials'
import { useUnit } from 'effector-react'
import { useLocation } from 'react-router'

export const useSetTutorial = () => {
    const location = useLocation()
    const path = location.pathname

    const [tutorials, setCurrentTutorial] = useUnit([
        tutorialModel.stores.tutorials,
        tutorialModel.events.setCurrentTutorial,
    ])

    Object.keys(tutorials).forEach((key) => {
        const tutorial = tutorials[key as TutorialId]
        if (tutorial.path === path) {
            setCurrentTutorial(tutorial.id)
        }
    })
}

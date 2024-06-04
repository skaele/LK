import { tutorialModel } from '@entities/tutorial'
import { TutorialId } from '@entities/tutorial/lib/tutorials'
import { useUnit } from 'effector-react'
import { useLocation } from 'react-router'

export const useSetTutorial = () => {
    const location = useLocation()
    const path = location.pathname

    const [tutorials, currentModule, setCurrentTutorial, resetStep] = useUnit([
        tutorialModel.stores.tutorials,
        tutorialModel.stores.currentModule,
        tutorialModel.events.setCurrentTutorial,
        tutorialModel.events.resetStep,
    ])
    if (tutorials)
        Object.keys(tutorials).forEach((key) => {
            const tutorial = tutorials[key as TutorialId]
            if (tutorial.path === path) {
                setCurrentTutorial(tutorial.id)
                if (currentModule?.id !== tutorial.id) resetStep()
            }
        })
}

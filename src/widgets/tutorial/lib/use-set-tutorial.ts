import { tutorialModel } from '@entities/tutorial'
import { getKeys } from '@shared/lib/typescript/getKeys'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'
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

    useEffect(() => {
        if (tutorials)
            getKeys(tutorials).forEach((key) => {
                const tutorial = tutorials[key]
                if (tutorial.path === path) {
                    setCurrentTutorial(tutorial.id)
                    if (currentModule?.id !== tutorial.id) resetStep()
                }
            })
    }, [tutorials, path])
}

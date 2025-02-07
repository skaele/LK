import { useEffect } from 'react'
import { useLocation } from 'react-router'

import { useUnit } from 'effector-react'

<<<<<<<< HEAD:src/shared/tutorial/lib/use-set-tutorial.ts
import { tutorialModel } from '..'
========
import { tutorialModel } from '@entities/tutorial'
>>>>>>>> master:src/widgets/tutorial/lib/use-set-tutorial.ts

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
        if (tutorials) {
            const tutorial = Object.values(tutorials).find((tutorial) => tutorial.path === path)
            if (!tutorial) {
                setCurrentTutorial(null)
                return
            }
            if (currentModule?.id !== tutorial.id) {
                setCurrentTutorial(tutorial.id)
                resetStep()
            }
        }
    }, [tutorials, path])
}

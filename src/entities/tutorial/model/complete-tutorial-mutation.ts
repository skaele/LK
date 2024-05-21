import { createMutation } from '@farfetched/core'
import { TutorialId } from '../lib/tutorials'
import { tutorialModel } from '..'
import { sample } from 'effector'
import { getKeys } from '@shared/lib/typescript/getKeys'

type ModuleStatuses = { [key in TutorialId]: boolean }

export const completeTutorialMutation = createMutation({
    handler: async (data: ModuleStatuses | null) => {
        if (!data) return null
        localStorage.setItem('tutorials', JSON.stringify(data))
    },
})

sample({
    clock: tutorialModel.events.moduleCompleted,
    source: tutorialModel.stores.tutorials,
    fn: (tutorials, tutorialId): ModuleStatuses | null => {
        if (!tutorials) return null
        return getKeys(tutorials).reduce((acc, id) => {
            acc[id] = tutorials[id].completed
            if (id === tutorialId) acc[id] = true
            return acc
        }, {} as ModuleStatuses)
    },
    target: completeTutorialMutation.start,
})

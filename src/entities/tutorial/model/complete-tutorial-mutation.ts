import { createMutation } from '@farfetched/core'
import { TutorialId } from '../lib/tutorials'
import { tutorialModel } from '..'
import { sample } from 'effector'

export const completeTutorialMutation = createMutation({
    handler: async (data: { [key in TutorialId]: boolean } | null) => {
        if (!data) return null
        localStorage.setItem('tutorials', JSON.stringify(data))
    },
})

sample({
    clock: tutorialModel.events.moduleCompleted,
    source: tutorialModel.stores.tutorials,
    fn: (tutorials, tutorialId): { [key in TutorialId]: boolean } | null => {
        if (!tutorials) return null
        return Object.keys(tutorials).reduce((acc, id) => {
            acc[id as TutorialId] = tutorials[id as TutorialId].completed
            if (id === tutorialId) acc[id as TutorialId] = true
            return acc
        }, {} as { [key in TutorialId]: boolean })
    },
    target: completeTutorialMutation.start,
})

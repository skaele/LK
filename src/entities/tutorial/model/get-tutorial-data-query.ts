import { createQuery } from '@farfetched/core'
import { getUserTutorials } from '@shared/api/tutorail-api'
import { tutorialModel } from '..'
import { sample } from 'effector'

export const getTutorialDataQuery = createQuery({
    handler: getUserTutorials,
})

sample({
    clock: tutorialModel.events.getTutorialData,
    target: getTutorialDataQuery.start,
})

sample({
    clock: getTutorialDataQuery.finished.success,
    fn: ({ result: { tutorialState } }) => tutorialState,
    target: tutorialModel.stores.tutorialState,
})

sample({
    clock: getTutorialDataQuery.finished.success,
    fn: ({ result: { tutorials } }) => tutorials,
    target: tutorialModel.stores.tutorials,
})

sample({
    clock: getTutorialDataQuery.finished.success,
    fn: ({ result: { interactions } }) => interactions,
    target: tutorialModel.stores.interactions,
})

import { createMutation } from '@farfetched/core'
import { callUserInteraction } from '@shared/api/tutorail-api'
import { tutorialModel } from '..'
import { sample } from 'effector'

export const callInteractionMutation = createMutation({
    handler: callUserInteraction,
})

sample({
    clock: tutorialModel.events.increasedInteractions,
    target: callInteractionMutation.start,
})

import { createMutation } from '@farfetched/core'
import { changeTutorialState } from '@shared/api/tutorail-api'
import { tutorialModel } from '..'
import { sample } from 'effector'
import { popUpMessageModel } from '@entities/pop-up-message'

export const changeTutorialStateMutation = createMutation({
    handler: changeTutorialState,
})

sample({
    clock: tutorialModel.events.tutorialEnabled,
    target: changeTutorialStateMutation.start,
})

sample({
    clock: changeTutorialStateMutation.$succeeded,
    source: changeTutorialStateMutation.__.$latestParams,
    filter: Boolean,
    target: tutorialModel.stores.tutorialState,
})

sample({
    clock: changeTutorialStateMutation.$failed,
    fn: () => ({
        message: 'Не удалось сохранить данные о прохождении',
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

import { createMutation } from '@farfetched/core'
import { resetTutorial } from '@shared/api/tutorial-api'
import { tutorialModel } from '..'
import { popUpMessageModel } from '@entities/pop-up-message'
import { sample } from 'effector'

export const resetTutorialMutation = createMutation({
    handler: resetTutorial,
})

sample({
    clock: tutorialModel.events.clearProgress,
    target: resetTutorialMutation.start,
})

sample({
    clock: resetTutorialMutation.$succeeded,
    target: tutorialModel.queries.getTutorialDataQuery.start,
})

sample({
    clock: resetTutorialMutation.$succeeded,
    fn: () => ({
        message: 'Прогресс успешно сброшен',
        type: 'success' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: resetTutorialMutation.$failed,
    fn: () => ({
        message: 'Не удалось сбросить данные о прохождении',
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

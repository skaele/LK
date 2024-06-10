import { createMutation } from '@farfetched/core'
import { resetTutorial } from '@shared/api/tutorail-api'
import { tutorialModel } from '..'
import { popUpMessageModel } from '@entities/pop-up-message'
import { sample } from 'effector'
import { getTutorialDataQuery } from './get-tutorial-data-query'

export const resetTutorialMutation = createMutation({
    handler: resetTutorial,
})

sample({
    clock: tutorialModel.events.clearProgress,
    target: resetTutorialMutation.start,
})

sample({
    clock: resetTutorialMutation.$succeeded,
    target: getTutorialDataQuery.start,
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

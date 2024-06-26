import { createMutation } from '@farfetched/core'
import { tutorialModel } from '..'
import { sample } from 'effector'
import { completeModule } from '@shared/api/tutorial-api'
import { popUpMessageModel } from '@entities/pop-up-message'

export const completeModuleMutation = createMutation({
    handler: completeModule,
})

sample({
    clock: tutorialModel.events.moduleCompleted,
    target: completeModuleMutation.start,
})

sample({
    clock: completeModuleMutation.$succeeded,
    target: tutorialModel.queries.getTutorialDataQuery.start,
})

sample({
    clock: completeModuleMutation.$failed,
    fn: () => ({
        message: 'Не удалось сохранить данные о прохождении',
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

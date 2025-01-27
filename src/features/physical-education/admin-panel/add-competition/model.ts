import { peStudentCompetitionModel } from '@entities/pe-student/model'
import { popUpMessageModel } from '@entities/pop-up-message'
import { peApi } from '@shared/api'
import { getPeErrorMsg } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'

import { AddCompetition } from './types'

export const addCompetition = createEvent<AddCompetition>()

const addCompetitionFx = createEffect((payload: AddCompetition) => {
    return peApi.createCompetition(payload.competitionName)
})

sample({ clock: addCompetition, target: addCompetitionFx })

sample({
    clock: addCompetitionFx.failData,
    fn: (err) => {
        return {
            message: getPeErrorMsg(err, 'Не удалось добавить соревнование'),
            type: 'failure' as const,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: addCompetitionFx.doneData,
    fn: () => {
        return {
            message: 'Соревнование добавлено',
            type: 'success' as const,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({ clock: addCompetitionFx.doneData, target: peStudentCompetitionModel.events.load })

sample({
    clock: addCompetitionFx.doneData,
    target: modalModel.events.close,
})

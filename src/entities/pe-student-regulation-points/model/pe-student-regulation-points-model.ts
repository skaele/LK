import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'

import { popUpMessageModel } from '@entities/pop-up-message'

import { peApi } from '@shared/api'
import { getPeErrorMsg } from '@shared/api/config/pe-config'

import { AddStudentRegulationPoints } from '../types'

const addRegulationPoints = createEvent<AddStudentRegulationPoints>()
const removeRegulationPoints = createEvent<{ id: string }>()

const removeRegulationPointsFx = createEffect(async ({ id }: { id: string }) => {
    await peApi.removeRegulationPoints(id)
})

sample({ clock: removeRegulationPoints, target: removeRegulationPointsFx })

const $pendingRemoveRegulationPoints = removeRegulationPointsFx.pending

const addRegulationPointsFx = createEffect(async (payload: AddStudentRegulationPoints) => {
    await peApi.addRegulationPoints(payload)

    return payload
})

sample({ clock: addRegulationPoints, target: addRegulationPointsFx })
sample({ clock: addRegulationPointsFx.doneData, target: modalModel.events.close })

sample({
    clock: addRegulationPointsFx.doneData,
    fn: () => ({
        message: 'Норматив добавлен',
        type: 'success' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: addRegulationPointsFx.failData,
    fn: (err) => ({
        message: getPeErrorMsg(err, 'Не удалось добавить норматив'),
        type: 'failure' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: removeRegulationPointsFx.doneData,
    fn: () => ({
        message: 'Норматив удален',
        type: 'success' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: removeRegulationPointsFx.failData,
    fn: () => ({
        message: 'Не удалось удалить норматив',
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const events = {
    addRegulationPoints,
    removeRegulationPoints,
}

export const effects = {
    addRegulationPointsFx,
    removeRegulationPointsFx,
}

export const stores = {
    pendingRemoveRegulationPoints: $pendingRemoveRegulationPoints,
}

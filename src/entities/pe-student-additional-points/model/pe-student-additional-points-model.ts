import { popUpMessageModel } from '@entities/pop-up-message'

import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'
import { AddStudentAdditionalPoints } from '../types'

import { peApi } from '@shared/api'
import { getPeErrorMsg } from '@shared/api/config/pe-config'

const addAdditionPoints = createEvent<AddStudentAdditionalPoints>()
const removeAdditionPoints = createEvent<{ id: string }>()

const removeAdditionPointsFx = createEffect(async ({ id }: { id: string }) => {
    await peApi.removeAdditionalPoints(id)
})

sample({ clock: removeAdditionPoints, target: removeAdditionPointsFx })

const $pendingRemoveAdditionPoints = removeAdditionPointsFx.pending

const addAdditionPointsFx = createEffect(async (payload: AddStudentAdditionalPoints) => {
    await peApi.addAdditionalPoints(payload)

    return payload
})

sample({ clock: addAdditionPoints, target: addAdditionPointsFx })
sample({ clock: addAdditionPointsFx.doneData, target: modalModel.events.close })

sample({
    clock: addAdditionPointsFx.doneData,
    fn: () => ({
        message: 'Баллы добавлены',
        type: 'success' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: addAdditionPointsFx.failData,
    fn: (err) => ({
        message: getPeErrorMsg(err, 'Не удалось добавить баллы'),
        type: 'failure' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: removeAdditionPointsFx.doneData,
    fn: () => ({
        message: 'Баллы удалены',
        type: 'success' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: removeAdditionPointsFx.failData,
    fn: () => ({
        message: 'Не удалось удалить баллы',
        type: 'failure' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const events = {
    addAdditionPoints,
    removeAdditionPoints,
}

export const effects = {
    addAdditionPointsFx,
    removeAdditionPointsFx,
}

export const stores = {
    pendingRemoveAdditionPoints: $pendingRemoveAdditionPoints,
}

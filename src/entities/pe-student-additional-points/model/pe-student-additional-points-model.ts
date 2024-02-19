import { popUpMessageModel } from '@entities/pop-up-message'
import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'
import { AddStudentAdditionalPoints } from '../types'
import { getAddPEStudentAdditionalPoints, getRemovePEStudentAdditionalPoints } from '../utils'

const addAdditionPoints = createEvent<AddStudentAdditionalPoints>()
const removeAdditionPoints = createEvent<{ id: string }>()

const removeAdditionPointsFx = createEffect(async ({ id }: { id: string }) => {
    await pERequest(getRemovePEStudentAdditionalPoints(id))
})

sample({ clock: removeAdditionPoints, target: removeAdditionPointsFx })

const $pendingRemoveAdditionPoints = removeAdditionPointsFx.pending

const addAdditionPointsFx = createEffect(async (payload: AddStudentAdditionalPoints) => {
    await pERequest(getAddPEStudentAdditionalPoints(payload))

    return payload
})

sample({ clock: addAdditionPoints, target: addAdditionPointsFx })
sample({ clock: addAdditionPointsFx.doneData, target: modalModel.events.close })

sample({
    clock: addAdditionPointsFx.doneData,
    fn: () => ({
        message: 'Не удалось добавить баллы',
        type: 'success' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: addAdditionPointsFx.failData,
    fn: () => ({
        message: 'Не удалось добавить баллы',
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

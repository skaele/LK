import { popUpMessageModel } from '@entities/pop-up-message'
import { peApi } from '@shared/api'
import { getPeErrorMsg } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'

import { AddStudentVisits } from '../types/add-student-visits'

const addVisit = createEvent<AddStudentVisits>()
const removeVisit = createEvent<{ id: string }>()

const addVisitFx = createEffect(async (payload: AddStudentVisits) => {
    await peApi.addVisit(payload)

    return payload
})

const removeVisitFx = createEffect(async ({ id }: { id: string }) => {
    await peApi.removeVisit(id)

    return id
})

const $pendingRemoveVisit = removeVisitFx.pending
const $pendingAddVisit = addVisitFx.pending

sample({ clock: addVisit, target: addVisitFx })
sample({ clock: addVisitFx.doneData, target: modalModel.events.close })

sample({
    clock: addVisitFx.failData,
    fn: (err) => ({
        message: getPeErrorMsg(err, 'Не удалось добавить посещение'),
        type: 'failure' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: addVisitFx.doneData,
    fn: () => ({
        message: 'Посещение добавлено',
        type: 'success' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({ clock: removeVisit, target: removeVisitFx })

sample({
    clock: removeVisitFx.doneData,
    fn: () => ({
        message: 'Посещение удалено',
        type: 'success' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: removeVisitFx.failData,
    fn: (err) => ({
        message: getPeErrorMsg(err, 'Не удалось удалить посещение'),
        type: 'failure' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const events = {
    addVisit,
    removeVisit,
}

export const effects = {
    addVisitFx,
    removeVisitFx,
}

export const stores = {
    pendingRemoveVisit: $pendingRemoveVisit,
    pendingAddVisit: $pendingAddVisit,
}

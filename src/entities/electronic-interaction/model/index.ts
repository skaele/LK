import { pepApi } from '@api'
import { ElectronicInteraction } from '@api/model'
import { popUpMessageModel } from '@entities/pop-up-message'
import { userModel } from '@entities/user'
import { MessageType } from '@shared/ui/types'
import { createEffect, createEvent, createStore, sample } from 'effector'

const getElectronicInteraction = createEvent()
const postElectronicInteraction = createEvent()
const changeDone = createEvent<boolean>()
const changeCompleted = createEvent<boolean>()

const postElectronicInteractionFx = createEffect(async () => {
    const response = await pepApi.set()

    const preparedData = response[0]

    if (preparedData?.result !== 'ok') throw new Error()
})

sample({
    clock: postElectronicInteractionFx.doneData,
    fn: () => ({
        message: `Форма отправлена успешно`,
        type: 'success' as MessageType,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: postElectronicInteractionFx.doneData,
    fn: () => true,
    target: changeDone,
})

sample({
    clock: postElectronicInteractionFx.failData,
    fn: () => {
        return { message: 'Не удалось подписать', type: 'failure' as MessageType }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

const getElectronicInteractionFx = createEffect(async (): Promise<ElectronicInteraction> => {
    try {
        const response = await pepApi.get()
        return response[0]
    } catch (error) {
        throw new Error(error as string)
    }
})

sample({ clock: postElectronicInteraction, target: postElectronicInteractionFx })
sample({ clock: getElectronicInteraction, target: getElectronicInteractionFx })

const $loading = getElectronicInteractionFx.pending
const $workerLoading = postElectronicInteractionFx.pending
const $completed = createStore<boolean>(false).on(changeCompleted, (_, completed) => completed)
const $done = createStore<boolean>(false).on(changeDone, (_, done) => done)
const $error = createStore<string | null>(null)
    .on(getElectronicInteractionFx, () => null)
    .on(getElectronicInteractionFx.failData, (_, newData) => newData.message)
const $electronicInteractionStore = createStore<ElectronicInteraction | null>(null)
    .on(getElectronicInteractionFx.doneData, (_, newData) => newData)
    .on(userModel.stores.userGuid, () => null)

export const stores = {
    $error,
    $electronicInteractionStore,
    $completed,
    $done,
    $loading,
    $workerLoading,
}

export const events = {
    getElectronicInteraction,
    postElectronicInteraction,
    changeCompleted,
}

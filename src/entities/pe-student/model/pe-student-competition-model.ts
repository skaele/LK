import { popUpMessageModel } from '@entities/pop-up-message'
import { peApi } from '@shared/api'
import { getPeErrorMsg } from '@shared/api/config/pe-config'
import { createEffect, createEvent, createStore, sample } from 'effector'

const load = createEvent()
const remove = createEvent<string>()

const loadFx = createEffect(async () => {
    const { data } = await peApi.getCompetitions()

    return data.competitions
})

const removeFx = createEffect(async (compName: string) => {
    await peApi.removeCompetition(compName)

    return compName
})

sample({ clock: remove, target: removeFx })

sample({
    clock: removeFx.failData,
    fn: (err) => ({
        message: getPeErrorMsg(err, 'Не удалось удалить соревнование'),
        type: 'failure' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: removeFx.doneData,
    fn: () => ({
        message: 'Соревнование удалено',
        type: 'success' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({ clock: load, target: loadFx })

const $competitions = createStore<string[]>([])
    .on(loadFx.doneData, (_, competitions) => competitions)
    .on(removeFx.doneData, (state, competitionName) => state.filter((c) => c !== competitionName))

export const events = {
    load,
    remove,
}

export const stores = {
    $competitions,
}

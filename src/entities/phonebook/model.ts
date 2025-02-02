import { createEffect, createEvent, createStore, sample } from 'effector'

import { phonebookApi } from '@shared/api'
import { Subdivision } from '@shared/api/model/phonebook'
import { userModel } from '@shared/session'

const setSubdivisionPath = createEvent<Subdivision[] | null>()

const getSubdivisions = createEvent()
const getSubdivisionsFx = createEffect(async (): Promise<Subdivision[]> => {
    let attempts = 0

    // По этому эндпоинту часто срабатывавает Anti-DDoS защита, API отадает ответ, но обрезает его
    while (attempts < 3) {
        const { data } = await phonebookApi.get()
        const isDataCorrupted = !data?.map
        if (data && !isDataCorrupted) return data

        attempts++
    }
    throw new Error('Не удалось загрузить подразделения')
})

sample({
    clock: userModel.events.authenticated,
    source: userModel.stores.userRole,
    filter: (role) => role === 'staff',
    target: getSubdivisions,
})

sample({ clock: getSubdivisions, target: getSubdivisionsFx })

const $pedningGetSubdividions = getSubdivisionsFx.pending

const clearSubdivisionData = createEvent()
const $subdivisionPath = createStore<Subdivision[] | null>(null).on(
    setSubdivisionPath,
    (_, subdivisions) => subdivisions,
)
const $subdivisions = createStore<Subdivision[] | null>(null).on(
    getSubdivisionsFx.doneData,
    (_, subdivisions) => subdivisions,
)
const $error = createStore<string | null>(null)
    .on(getSubdivisionsFx.failData, (_, error) => error.message)
    .on(getSubdivisionsFx, () => null)

export const events = {
    setSubdivisionPath,
    getSubdivisions,
    clearSubdivisionData,
}

export const stores = {
    subdivisionPath: $subdivisionPath,
    subdivisions: $subdivisions,
    error: $error,
    pedningGetSubdividions: $pedningGetSubdividions,
}

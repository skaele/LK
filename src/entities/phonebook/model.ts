import { phonebookApi } from '@shared/api'
import { Subdivision } from '@shared/api/model/phonebook'
import { createEffect, createEvent, createStore, sample } from 'effector'

const setChosenSubdivision = createEvent<Subdivision | null>()

const getSubdivisions = createEvent()
const getSubdivisionsFx = createEffect(async (): Promise<Subdivision[]> => {
    const { data } = await phonebookApi.get()

    return data
})
sample({ clock: getSubdivisions, target: getSubdivisionsFx })

const clearSubdivisionData = createEvent()

const $chosenSubdivision = createStore<Subdivision | null>(null).on(
    setChosenSubdivision,
    (_, subdivision) => subdivision,
)
const $subdivisions = createStore<Subdivision[] | null>(null).on(
    getSubdivisionsFx.doneData,
    (_, subdivisions) => subdivisions,
)
const $error = createStore<string | null>(null)
    .on(getSubdivisionsFx.failData, (_, error) => error.message)
    .on(getSubdivisionsFx, () => null)

export const events = {
    setChosenSubdivision,
    getSubdivisions,
    clearSubdivisionData,
}

export const stores = {
    $chosenSubdivision,
    $subdivisions,
    $error,
}

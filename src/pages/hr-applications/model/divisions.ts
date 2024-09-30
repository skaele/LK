import { createQuery } from '@farfetched/core'
import { getDivisions, getKEDO } from '@shared/api/application-api'
import { combine, createEffect, createEvent, createStore, sample } from 'effector'

export const loadDivisions = createEvent()
export const hrPageMounted = createEvent()

const loadDivisionsFx = createEffect(getDivisions)

sample({ clock: loadDivisions, target: loadDivisionsFx })

const hasKEDOQuery = createQuery({ handler: getKEDO })
export const $hrDivisions = createStore<{ divisionGuid: string; divisionName: string }[]>([])
export const $hrDivisionsSuggestions = combine($hrDivisions, (divisions) => {
    return divisions.map((d) => d.divisionName)
})
sample({ clock: loadDivisionsFx.doneData, target: $hrDivisions })

sample({
    clock: hrPageMounted,
    target: hasKEDOQuery.start,
})

export const hasKEDO = hasKEDOQuery.$data

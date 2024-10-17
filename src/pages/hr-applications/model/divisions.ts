import { createQuery } from '@farfetched/core'
import { getDivisions, getKEDO, getWorkWeeks } from '@shared/api/application-api'
import { combine, createEffect, createEvent, createStore, sample } from 'effector'

export const loadDivisions = createEvent()
export const hrPageMounted = createEvent()

const loadDivisionsFx = createEffect(getDivisions)

sample({ clock: loadDivisions, target: loadDivisionsFx })

const hasKEDOQuery = createQuery({ handler: getKEDO })
const workWeekQuery = createQuery({ handler: getWorkWeeks })
export const $hrDivisions = createStore<{ divisionGuid: string; divisionName: string }[]>([])
export const $hrDivisionsSuggestions = combine($hrDivisions, (divisions) => {
    return divisions.map((d) => d.divisionName)
})
sample({ clock: loadDivisionsFx.doneData, target: $hrDivisions })

sample({
    clock: hrPageMounted,
    target: [hasKEDOQuery.start, workWeekQuery.start],
})

export const hasKEDO = hasKEDOQuery.$data
export const workWeeks = workWeekQuery.$data

import { createQuery } from '@farfetched/core'
import { getDivisions, getKEDO, getWorkWeeks } from '@shared/api/application-api'
import { staffAppStarted } from '@shared/effector'
import { combine, createEffect, createStore, sample } from 'effector'

const loadDivisionsFx = createEffect(getDivisions)

const hasKEDOQuery = createQuery({ handler: getKEDO })
const workWeekQuery = createQuery({ handler: getWorkWeeks })
export const $hrDivisions = createStore<{ divisionGuid: string; divisionName: string }[]>([])
export const $hrDivisionsSuggestions = combine($hrDivisions, (divisions) => {
    return divisions.map((d) => d.divisionName)
})
sample({ clock: loadDivisionsFx.doneData, target: $hrDivisions })

sample({
    clock: staffAppStarted,
    target: [hasKEDOQuery.start, workWeekQuery.start, loadDivisionsFx],
})

export const hasKEDO = hasKEDOQuery.$data
export const workWeeks = workWeekQuery.$data

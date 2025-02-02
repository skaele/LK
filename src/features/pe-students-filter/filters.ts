import { attach, combine, createEvent, createStore, sample } from 'effector'
import { debounce, reset } from 'patronum'

import { pEStudentModel } from '@entities/pe-student/model'

import { peApi } from '@shared/api'

import { pEStudentSearchModel } from '.'

const addFilter = createEvent<{ name: string; value: string | number; strict?: boolean }>()
const resetFilters = createEvent()

const $filters = createStore<Record<string, { value: string | number }>>({})
    .on(pEStudentSearchModel.stores.$search, (state, search) => {
        return { ...state, fullName: { value: search } }
    })
    .on(addFilter, (state, { name, value, strict }) => {
        const data = { ...state }
        if (!value) {
            delete data[name]
            return data
        }
        return { ...data, [name]: { value, strict } }
    })

sample({ clock: resetFilters, target: $filters.reinit! })
sample({ clock: resetFilters, fn: () => '', target: pEStudentSearchModel.events.update })

const loadPageFx = attach({
    source: { page: pEStudentModel.stores.$pEStudentsPage, filters: $filters },
    effect: async ({ filters, page }) => {
        const { data } = await peApi.getStudents(page, filters)

        return data.data
    },
})

debounce({
    source: combine(pEStudentModel.stores.$pEStudentsPage, $filters),
    timeout: 200,
    target: pEStudentModel.events.load,
})

sample({ clock: pEStudentModel.events.load, target: loadPageFx })

reset({
    clock: $filters,
    target: pEStudentModel.stores.$pEStudentsPage,
})

sample({
    clock: loadPageFx.doneData,
    fn: ({ students }) => students,
    target: pEStudentModel.stores.$pEStudents,
})
sample({
    clock: loadPageFx.doneData,
    fn: ({ totalCount }) => totalCount,
    target: pEStudentModel.stores.$pEStudentsTotalCount,
})

const $loading = combine(loadPageFx.pending, Boolean)

export const stores = { $loading, $filters }

export const events = {
    addFilter,
    resetFilters,
}

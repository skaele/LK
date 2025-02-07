import { createMutation, createQuery } from '@farfetched/core'
import { createEvent, createStore, sample } from 'effector'

import { popUpMessageModel } from '@entities/pop-up-message'

import { deleteChildren, getChildrens, saveChildrens } from '@shared/api/childrens-api'
import { createCheckboxField } from '@shared/effector/form/create-checkbox-field'
import { isNumber } from '@shared/lib/is-number'

import { Children } from '../types'

const getChildrensQuery = createQuery({
    handler: getChildrens,
})
const saveChildrensMutation = createMutation({
    handler: saveChildrens,
})
const deleteChildrenMutation = createMutation({
    handler: deleteChildren,
})

const pageMounted = createEvent()
const addChildren = createEvent()
const editChildren = createEvent<{ id: string; data: { fio: string; birthdate: string } }>()
const childrensSaved = createEvent()
const childrenDeleted = createEvent<{ id: string }>()

const $counter = createStore(0)
    .on(addChildren, (state) => state + 1)
    .reset(pageMounted)
const $newChildrens = createStore<Children[]>([
    { fio: '', birthdate: '', id: 'n0', created: new Date().toISOString() },
]).reset([pageMounted, saveChildrensMutation.finished.success])
const $isActive = createStore(false).reset(pageMounted)

const $allChildrens = createStore<Children[]>([]).reset(pageMounted)
const $minDate = createStore(getMinBirthdateForUnderAge(14)).reset(pageMounted)
const $maxDate = createStore(getMaxBirthdateForAge(2)).reset(pageMounted)
const confirmed = createCheckboxField({ reset: pageMounted })

sample({
    clock: pageMounted,
    target: getChildrensQuery.start,
})
sample({
    clock: addChildren,
    source: { newChildrens: $newChildrens, counter: $counter },
    fn: ({ newChildrens, counter }) => [
        ...newChildrens,
        { fio: '', birthdate: '', id: 'n' + counter.toString(), created: new Date().toISOString() },
    ],
    target: $newChildrens,
})
sample({
    clock: childrenDeleted,
    filter: ({ id }) => isNumber(id),
    target: deleteChildrenMutation.start,
})
sample({
    clock: childrenDeleted,
    filter: (_, { id }) => !isNumber(id),
    source: $newChildrens,
    fn: (state, { id }) => state.filter((child) => child.id !== id),
    target: $newChildrens,
})
sample({
    clock: editChildren,
    source: $newChildrens,
    fn: (newChildrens, { id, data }) => newChildrens.map((child) => (child.id === id ? { ...child, ...data } : child)),
    target: $newChildrens,
})

sample({
    clock: [getChildrensQuery.$data, $newChildrens],
    source: {
        saved: getChildrensQuery.$data,
        newChildrens: $newChildrens,
    },
    fn: ({ saved, newChildrens }) => [...(saved || []), ...newChildrens],
    target: $allChildrens,
})

sample({
    clock: childrensSaved,
    source: $newChildrens,
    target: saveChildrensMutation.start,
})

sample({
    clock: [$newChildrens, confirmed.value],
    source: { newChildrens: $newChildrens, confirmed: confirmed.value, minDate: $minDate, maxDate: $maxDate },
    fn: ({ newChildrens, confirmed, minDate, maxDate }) =>
        newChildrens.every(
            (child) =>
                child.birthdate &&
                new Date(child.birthdate) >= new Date(minDate) &&
                new Date(child.birthdate) <= new Date(maxDate) &&
                child.fio,
        ) && confirmed,
    target: $isActive,
})

sample({
    clock: [saveChildrensMutation.$succeeded, deleteChildrenMutation.$succeeded],
    target: getChildrensQuery.start,
})

sample({
    clock: saveChildrensMutation.$succeeded,
    fn: () => ({
        type: 'success' as const,
        message: 'Данные сохранены',
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})
sample({
    clock: deleteChildrenMutation.$succeeded,
    fn: () => ({
        type: 'success' as const,
        message: 'Данные сохранены',
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const stores = {
    childrens: $allChildrens,
    confirmed: confirmed.value,
    loading: getChildrensQuery.$pending,
    saving: saveChildrensMutation.$pending,
    isActive: $isActive,
    minDate: $minDate,
    maxDate: $maxDate,
}

export const events = {
    pageMounted,
    addChildren,
    saveChildrens: childrensSaved,
    deleteChildren: childrenDeleted,
    editChildren,
    confirm: confirmed.setValue,
}

function getMaxBirthdateForAge(age: number) {
    const today = new Date()
    const maxBirthdate = new Date(today.getFullYear() - age, today.getMonth(), today.getDate() + 1)
    return maxBirthdate.toISOString().split('T')[0]
}

function getMinBirthdateForUnderAge(age: number) {
    const today = new Date()
    const minBirthdate = new Date(today.getFullYear() - age, today.getMonth(), today.getDate() + 2)
    return minBirthdate.toISOString().split('T')[0]
}

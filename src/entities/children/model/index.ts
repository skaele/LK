import { createMutation, createQuery } from '@farfetched/core'
import { deleteChildren, getChildrens, saveChildrens } from '@shared/api/childrens-api'
import { createEvent, createStore, sample } from 'effector'
import { Children } from '../types'
import { isNumber } from '@shared/lib/is-number'
import { popUpMessageModel } from '@entities/pop-up-message'

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
    clock: $newChildrens,
    fn: (newChildrens) => newChildrens.every((child) => child.birthdate && child.fio),
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
    loading: getChildrensQuery.$pending,
    saving: saveChildrensMutation.$pending,
    isActive: $isActive,
}

export const events = {
    pageMounted,
    addChildren,
    saveChildrens: childrensSaved,
    deleteChildren: childrenDeleted,
    editChildren,
}

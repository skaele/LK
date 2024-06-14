import { createEvent, createStore, sample } from 'effector'
import { Role, SalarySupplement } from '../types'
import { createAllowance, initRequest } from '@shared/api/model/salary-supplements'
import { createMutation, createQuery } from '@farfetched/core'
import { IInputArea } from '@shared/ui/input-area/model'
import { parseInputArea } from '@shared/lib/forms/parse-input-area'

const pageMounted = createEvent()
const appStarted = createEvent()
const createSupplement = createEvent<{ form: IInputArea; employees: IInputArea }>()

const createSupplementMutation = createMutation({
    handler: createAllowance,
})

const $role = createStore<Role | null>(null)
const $chosen = createStore<SalarySupplement | null>(null)
const supplementsStateQuery = createQuery({
    handler: initRequest,
})

sample({
    clock: createSupplement,
    fn: ({ form, employees }) => {
        const parsed = parseInputArea([form, employees])
        return parsed
    },
    target: createSupplementMutation.start,
})

sample({
    clock: appStarted,
    target: supplementsStateQuery.start,
})
sample({
    clock: supplementsStateQuery.finished.success,
    fn: () => 'initiator' as const,
    target: $role,
})
sample({
    clock: supplementsStateQuery.finished.finally,
    fn: () => 'initiator' as const,
    target: $role,
})

export const events = {
    pageMounted,
    appStarted,
    createSupplement,
}

export const queries = {
    supplements: supplementsStateQuery,
}

export const mutations = {
    createSupplement: createSupplementMutation,
}

export const stores = {
    role: $role,
    chosen: $chosen,
}

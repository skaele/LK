import { createEvent, createStore, sample } from 'effector'
import { Role, Allowance } from '../types'
import { createAllowance, getHandbook, initRequest } from '@shared/api/model/allowances'
import { createMutation, createQuery } from '@farfetched/core'
import { IInputArea } from '@shared/ui/input-area/model'
import { parseInputArea } from '@shared/lib/forms/parse-input-area'

const pageMounted = createEvent<{ role: Role; userId: string }>()
const appStarted = createEvent()
const createSupplement = createEvent<{ form: IInputArea; employees: IInputArea }>()

const createSupplementMutation = createMutation({
    handler: createAllowance,
})

const $role = createStore<Role | null>(null)
const $chosen = createStore<Allowance | null>(null)
const supplementsStateQuery = createQuery({
    handler: initRequest,
})
const allowanceTypesQuery = createQuery({
    handler: getHandbook,
})
const fundingSourcesQuery = createQuery({
    handler: getHandbook,
})
const activityAreasQuery = createQuery({
    handler: getHandbook,
})

sample({
    clock: createSupplement,
    fn: ({ form, employees }) => {
        console.log(employees)
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

sample({
    clock: pageMounted,
    fn: () => 'AllowanceType' as const,
    target: allowanceTypesQuery.start,
})
sample({
    clock: pageMounted,
    fn: () => 'FundingSource' as const,
    target: fundingSourcesQuery.start,
})
sample({
    clock: pageMounted,
    fn: () => 'ActivityArea' as const,
    target: activityAreasQuery.start,
})

export const events = {
    pageMounted,
    appStarted,
    createSupplement,
}

export const queries = {
    supplements: supplementsStateQuery,
    allowanceTypes: allowanceTypesQuery,
    fundingSources: fundingSourcesQuery,
    activityAreas: activityAreasQuery,
}

export const mutations = {
    createSupplement: createSupplementMutation,
}

export const stores = {
    role: $role,
    chosen: $chosen,
}

import { createEvent, createStore, sample } from 'effector'
import { Role, Allowance } from '../types'
import { createAllowance, getHandbook, getRole } from '@shared/api/model/allowances'
import { createMutation, createQuery } from '@farfetched/core'
import { IInputArea } from '@shared/ui/input-area/model'
import { parseInputArea } from '@shared/lib/forms/parse-input-area'
import { userModel } from '@entities/user'

const pageMounted = createEvent<{ role: Role; userId: string }>()
const appStarted = createEvent()
const createSupplement = createEvent<{ form: IInputArea; employees: IInputArea }>()

const createSupplementMutation = createMutation({
    handler: createAllowance,
})

const $chosen = createStore<Allowance | null>(null)
const roleQuery = createQuery({
    handler: getRole,
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
        const parsed = parseInputArea([form, employees])
        return parsed
    },
    target: createSupplementMutation.start,
})

sample({
    clock: appStarted,
    source: userModel.stores.userGuid,
    target: roleQuery.start,
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
    role: roleQuery,
    allowanceTypes: allowanceTypesQuery,
    fundingSources: fundingSourcesQuery,
    activityAreas: activityAreasQuery,
}

export const mutations = {
    createSupplement: createSupplementMutation,
}

export const stores = {
    chosen: $chosen,
}

import { createEffect, createEvent, createStore, sample } from 'effector'
import { Allowance, Subordnate } from '../types'
import {
    createAllowance,
    getAllowances,
    getHandbook,
    getRoles,
    getSubordinates,
    JobRoles,
} from '@shared/api/model/allowances'
import { createMutation, createQuery } from '@farfetched/core'
import { IInputArea } from '@shared/ui/input-area/model'
import { parseInputArea } from '@shared/lib/forms/parse-input-area'
import { userModel } from '@entities/user'

export type AllAllowances = { initiatorAllowances: Allowance[]; approverAllowances: Allowance[] }

const appStarted = createEvent()
const pageMounted = createEvent()
const createSupplement = createEvent<{ initiator: IInputArea; form: IInputArea; employees: IInputArea }>()

const $completed = createStore(false)
const setCompleted = createEvent<boolean>()
const $allowances = createStore<{
    [key: string]: AllAllowances
} | null>(null)
const $subordinates = createStore<{
    [key: string]: Subordnate[]
} | null>(null)
const getAllowancesFx = createEffect(async (userId: string) => {
    return getAllowances(userId)
})
const getSubordinatesFx = createEffect(async (userId: string) => {
    return getSubordinates(userId)
})

const createSupplementMutation = createMutation({
    handler: createAllowance,
})

const $chosen = createStore<Allowance | null>(null)
const roleQuery = createQuery({
    handler: getRoles,
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
    fn: ({ initiator, form, employees }) => {
        const parsed = parseInputArea([initiator, form, employees])
        return parsed
    },
    target: createSupplementMutation.start,
})

sample({
    clock: createSupplementMutation.$succeeded,
    fn: () => true,
    target: setCompleted,
})

$completed.on(setCompleted, (_, val) => val)
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

const getAllAllowances = createEffect(async (jobs: JobRoles) => {
    const allowances = await Promise.all(
        jobs.map(async (job) => {
            return await getAllowancesFx(job.employeeId)
        }),
    )
    return jobs.reduce((acc, job, index) => {
        acc[job.employeeId] = allowances[index]
        return acc
    }, {} as { [key: string]: AllAllowances })
})

const getAllEmployees = createEffect(async (jobs: JobRoles) => {
    const employees = await Promise.all(
        jobs.map(async (job) => {
            return await getSubordinatesFx(job.employeeId)
        }),
    )
    return jobs.reduce((acc, job, index) => {
        acc[job.employeeId] = employees[index]
        return acc
    }, {} as { [key: string]: Subordnate[] })
})

sample({
    clock: pageMounted,
    source: roleQuery.$data,
    filter: (roles) => roles !== null,
    target: getAllAllowances,
})
sample({
    clock: getAllAllowances.doneData,
    target: $allowances,
})

sample({
    clock: pageMounted,
    source: roleQuery.$data,
    filter: (roles) => roles !== null,
    target: getAllEmployees,
})
sample({
    clock: getAllEmployees.doneData,
    target: $subordinates,
})

export const events = {
    pageMounted,
    appStarted,
    createSupplement,
    setCompleted,
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
    allowances: $allowances,
    employees: $subordinates,
    completed: $completed,
}

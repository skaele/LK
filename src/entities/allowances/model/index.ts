import { createEffect, createEvent, createStore, sample } from 'effector'
import { Allowance, Role, Subordnate } from '../types'
import {
    approveAllowance,
    createAllowance,
    getAllowances,
    getHandbook,
    getRoles,
    getSubordinates,
    inspectAllowance,
    JobRoles,
} from '@shared/api/model/allowances'
import { createMutation, createQuery } from '@farfetched/core'
import { IInputArea } from '@shared/ui/input-area/model'
import { parseInputArea } from '@shared/lib/forms/parse-input-area'
import { userModel } from '@entities/user'
import { popUpMessageModel } from '@entities/pop-up-message'
import { AllowanceNotification } from '@shared/api/model/notification'

export type AllAllowances = { initiatorAllowances: Allowance[]; approverAllowances: Allowance[] }

const appStarted = createEvent()
const pageMounted = createEvent()
const allowanceStatusChanged = createEvent<{ id: string; status: 'approved' | 'rejected' }>()
const infoPageMounted = createEvent<{ id: string; role: Role; userId: string }>()
const createSupplement = createEvent<{ initiator: IInputArea; form: IInputArea; employees: IInputArea }>()

const $employeeAllowances = createStore<AllowanceNotification[] | null>([
    {
        id: '2',
        initials: 'Хуснулина Дария Рашитовна',
        sum: 10000,
        startDate: '2024-06-01',
        endDate: '2024-07-01',
        divisionName: 'Центр развития технологий в цифровом образовании',
        status: 'unknown',
    },
    {
        id: '1',
        initials: 'Хуснулина Дария Рашитовна',
        sum: 20000,
        startDate: '2024-03-01',
        endDate: '2024-04-01',
        divisionName: 'Кафедра "Информатика и информационные технологии"',
        status: 'approved',
    },
    {
        id: '0',
        initials: 'Хуснулина Дария Рашитовна',
        sum: 100000,
        startDate: '2024-04-15',
        endDate: '2024-07-22',
        divisionName: 'Центр развития технологий в цифровом образовании',
        status: 'rejected',
    },
]).on(allowanceStatusChanged, (allowances, status) =>
    allowances?.map((allowance) => (allowance.id === status.id ? { ...allowance, status: status.status } : allowance)),
)
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

const approve = createEvent<{ employeeId: string; allowanceId: string; approverEmployeeId: string }>()
const reject = createEvent<{ employeeId: string; allowanceId: string; approverEmployeeId: string }>()
const veridctMutation = createMutation({
    handler: approveAllowance,
})

sample({
    clock: approve,
    fn: ({ employeeId, allowanceId, approverEmployeeId }) => ({
        employeeId,
        allowanceId,
        approverEmployeeId,
        approvalStatus: 'Approved' as const,
    }),
    target: veridctMutation.start,
})
sample({
    clock: reject,
    fn: ({ employeeId, allowanceId, approverEmployeeId }) => ({
        employeeId,
        allowanceId,
        approverEmployeeId,
        approvalStatus: 'Declined' as const,
    }),
    target: veridctMutation.start,
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

const allowanceQuery = createQuery({
    handler: inspectAllowance,
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
    clock: infoPageMounted,
    fn: ({ id, role, userId }) => ({
        role,
        allowanceId: id,
        userId: userId,
    }),
    target: [allowanceQuery.reset, allowanceQuery.start],
})
sample({
    clock: createSupplementMutation.$succeeded,
    fn: () => true,
    target: setCompleted,
})
sample({
    clock: createSupplementMutation.$failed,
    fn: () => ({
        message: 'Не удалось создать надбавку. Проверьте правильность заполненных полей и попробуйте еще раз',
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
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
    clock: veridctMutation.$finished,
    source: veridctMutation.__.$latestParams,
    fn: (params) => ({
        role: 'Approver' as const,
        allowanceId: params?.allowanceId || '',
        userId: params?.approverEmployeeId || '',
    }),
    target: allowanceQuery.start,
})
sample({
    clock: pageMounted,
    source: roleQuery.$data,
    filter: (roles) => roles !== null,
    fn: (roles) => roles as JobRoles,
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
    fn: (roles) => roles as JobRoles,
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
    infoPageMounted,
    approve,
    reject,
    allowanceStatusChanged,
}

export const queries = {
    role: roleQuery,
    allowanceTypes: allowanceTypesQuery,
    fundingSources: fundingSourcesQuery,
    activityAreas: activityAreasQuery,
    allowance: allowanceQuery,
}

export const mutations = {
    createSupplement: createSupplementMutation,
}

export const stores = {
    chosen: $chosen,
    allowances: $allowances,
    employees: $subordinates,
    completed: $completed,
    employeeAllowances: $employeeAllowances,
}

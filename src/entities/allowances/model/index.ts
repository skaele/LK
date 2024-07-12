import { createEffect, createEvent, createStore, sample } from 'effector'
import { Allowance, Role, Subordnate } from '../types'
import {
    approveAllowance,
    confirmPersonalAllowance,
    ConfirmRequest,
    createAllowance,
    getAllowances,
    getAllowancesNotifications,
    getHandbook,
    getPersonalAllowances,
    getRoles,
    getSubordinates,
    inspectAllowance,
    JobRoles,
    viewNotification,
} from '@shared/api/model/allowances'
import { createMutation, createQuery } from '@farfetched/core'
import { IInputArea } from '@shared/ui/input-area/model'
import { parseInputArea } from '@shared/lib/forms/parse-input-area'
import { userModel } from '@entities/user'
import { popUpMessageModel } from '@entities/pop-up-message'

export type AllAllowances = { initiatorAllowances: Allowance[]; approverAllowances: Allowance[] }

const appStarted = createEvent()
const pageMounted = createEvent()
const personalAllowancesMounted = createEvent()
const allowanceStatusChanged = createEvent<Omit<ConfirmRequest, 'personalId'>>()
const infoPageMounted = createEvent<{ id: string; role: Role; userId: string }>()
const createSupplement = createEvent<{ initiator: IInputArea; form: IInputArea; employees: IInputArea }>()
const setCompleted = createEvent<boolean>()
const approve = createEvent<{ employeeId: string; allowanceId: string; approverEmployeeId: string }>()
const reject = createEvent<{ employeeId: string; allowanceId: string; approverEmployeeId: string }>()

const notificationsQuery = createQuery({
    handler: getAllowancesNotifications,
})
const personalAllowancesQuery = createQuery({
    handler: getPersonalAllowances,
})
const viewNotificationMutation = createMutation({
    handler: viewNotification,
})
const confirmPersonalAllowanceMutation = createMutation({
    handler: confirmPersonalAllowance,
})

const $completed = createStore(false)
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
const paymentIdentifierQuery = createQuery({
    handler: getHandbook,
})
const sourceOfFundingQuery = createQuery({
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
    clock: appStarted,
    source: userModel.stores.userGuid,
    target: notificationsQuery.start,
})

sample({
    clock: pageMounted,
    fn: () => 'PaymentIdentifier' as const,
    target: paymentIdentifierQuery.start,
})
sample({
    clock: pageMounted,
    fn: () => 'SourceOfFunding' as const,
    target: sourceOfFundingQuery.start,
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

sample({
    clock: personalAllowancesMounted,
    source: userModel.stores.userGuid,
    target: personalAllowancesQuery.start,
})

sample({
    clock: allowanceStatusChanged,
    source: userModel.stores.userGuid,
    fn: (personalId, allowance) => ({
        personalId,
        ...allowance,
    }),
    target: confirmPersonalAllowanceMutation.start,
})

sample({
    clock: confirmPersonalAllowanceMutation.$succeeded,
    source: userModel.stores.userGuid,
    target: personalAllowancesQuery.start,
})

sample({
    clock: userModel.events.logout,
    target: [
        roleQuery.reset,
        sourceOfFundingQuery.reset,
        paymentIdentifierQuery.reset,
        allowanceQuery.reset,
        personalAllowancesQuery.reset,
        notificationsQuery.reset,
    ],
})
export const events = {
    pageMounted,
    personalAllowancesMounted,
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
    sourcesOfFunding: sourceOfFundingQuery,
    paymentIdentifiers: paymentIdentifierQuery,
    allowance: allowanceQuery,
    personalAllowances: personalAllowancesQuery,
    notifications: notificationsQuery,
}

export const mutations = {
    createSupplement: createSupplementMutation,
    viewNotification: viewNotificationMutation,
    confirmPersonalAllowance: confirmPersonalAllowanceMutation,
}

export const stores = {
    chosen: $chosen,
    allowances: $allowances,
    employees: $subordinates,
    completed: $completed,
}

import { createEffect, createEvent, createStore, sample } from 'effector'
import { Allowance, Employee, Role, Subordnate } from '../types'
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
import { userModel } from '@entities/user'
import { popUpMessageModel } from '@entities/pop-up-message'
import { SelectPage } from '@features/select'

export type AllAllowances = { initiatorAllowances: Allowance[]; approverAllowances: Allowance[] }

const appStarted = createEvent()
const pageMounted = createEvent()
const personalAllowancesMounted = createEvent()
const allowanceStatusChanged = createEvent<Omit<ConfirmRequest, 'personalId'>>()
const infoPageMounted = createEvent<{ id: string; role: Role; userId: string }>()
const getSubordinatesEvent = createEvent<string>()
const createSupplement = createEvent()
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

const job = createSelectField()
const sourceOfFunding = createSelectField()
const paymentIdentifier = createSelectField()
const commentary = createInputField()
const employees = createEmployeeField()
const files = createFilesField()

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
sample({
    clock: getSubordinatesEvent,
    target: getSubordinatesFx,
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
const $sourcesOfFunding = sourceOfFundingQuery.$data.map<SelectPage[]>((data) => {
    if (!data) return []
    return data.map((item) => ({
        id: item.id,
        title: item.name,
    }))
})
const $paymentIdentifiers = paymentIdentifierQuery.$data.map<SelectPage[]>((data) => {
    if (!data) return []
    return data.map((item) => ({
        id: item.id,
        title: item.name,
    }))
})

const allowanceQuery = createQuery({
    handler: inspectAllowance,
})

const $isActive = createStore<boolean>(false)
sample({
    clock: [job.setValue, sourceOfFunding.setValue, paymentIdentifier.setValue],
    source: [job.value, sourceOfFunding.value, paymentIdentifier.value],
    fn: (src) => src.every((formItem) => Boolean(formItem)),
    target: $isActive,
})

sample({
    clock: createSupplement,
    source: {
        job: job.value,
        sourceOfFunding: sourceOfFunding.value,
        paymentIdentifier: paymentIdentifier.value,
        commentary: commentary.value,
        allowanceEmployees: employees.value,
    },
    filter: ({ job, sourceOfFunding, paymentIdentifier, allowanceEmployees }) =>
        !!job?.id &&
        !!sourceOfFunding?.id &&
        !!paymentIdentifier?.id &&
        allowanceEmployees.filter((e) => e !== null).length > 0,
    fn: ({ job, sourceOfFunding, paymentIdentifier, commentary, allowanceEmployees }) => ({
        initiatorId: job?.id.toString() || '',
        sourceOfFundingId: sourceOfFunding?.id.toString() || '',
        paymentIdentifierId: paymentIdentifier?.id.toString() || '',
        commentary: commentary,
        allowanceEmployees: allowanceEmployees.filter((e) => e !== null) as Employee[],
    }),
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
    getSubordinates: getSubordinatesEvent,
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
    sourcesOfFunding: $sourcesOfFunding,
    paymentIdentifiers: $paymentIdentifiers,
    isActive: $isActive,
}

export const fields = {
    job,
    sourceOfFunding,
    paymentIdentifier,
    commentary,
    employees,
    files,
}

function createInputField({ defaultValue }: { defaultValue?: string } = {}) {
    const setValue = createEvent<string>()
    const $store = createStore<string>(defaultValue ?? '').on(setValue, (_, newValue) => newValue)

    return {
        value: $store,
        setValue,
    }
}

function createSelectField({ defaultValue }: { defaultValue?: SelectPage | null } = {}) {
    const setValue = createEvent<SelectPage | null>()
    const $store = createStore<SelectPage | null>(defaultValue ?? null).on(setValue, (_, newValue) => newValue)

    return {
        value: $store,
        setValue,
    }
}

function createEmployeeField() {
    const addEmployee = createEvent()
    const setEmployee = createEvent<{ employee: Employee; index: number }>()
    const removeEmployee = createEvent<number>()
    const $employees = createStore<(Employee | null)[]>([])
        .on(addEmployee, (employees) => [...employees, { id: '', divisionId: '', startDate: '', endDate: '', sum: 0 }])
        .on(removeEmployee, (employees, index) => employees.map((e, i) => (i === index ? null : e)))
        .on(setEmployee, (employees, { employee, index }) => employees.map((e, i) => (i === index ? employee : e)))

    return {
        value: $employees,
        setValue: setEmployee,
        addItem: addEmployee,
        removeItem: removeEmployee,
    }
}

function createFilesField() {
    const setValue = createEvent<File[]>()
    const $store = createStore<File[]>([]).on(setValue, (_, newValue) => newValue)

    return {
        value: $store,
        setValue,
    }
}

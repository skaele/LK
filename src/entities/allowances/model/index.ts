import { createEffect, createEvent, createStore, sample, Unit } from 'effector'
import { Allowance, AllowanceModified, Employee, Role, Subordnate } from '../types'
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
    removeFile,
    uploadFile,
    viewNotification,
} from '@shared/api/model/allowances'
import { createMutation, createQuery } from '@farfetched/core'
import { userModel } from '@entities/user'
import { popUpMessageModel } from '@entities/pop-up-message'
import { SelectPage } from '@features/select'
import { allowanceStatus } from '../consts'

export type AllAllowancesModified = {
    initiatorAllowances: AllowanceModified[]
    approverAllowances: AllowanceModified[]
}
export type AllAllowances = { initiatorAllowances: Allowance[]; approverAllowances: Allowance[] }

const appStarted = createEvent()
const pageMounted = createEvent()
const personalAllowancesMounted = createEvent()
const fileAttached = createEvent<File>()
const fileRemoved = createEvent<string | undefined>()
const allFilesRemoved = createEvent()
const allowanceStatusChanged = createEvent<Omit<ConfirmRequest, 'personalId'>>()
const infoPageMounted = createEvent<{ id: string; role: Role; userId: string }>()
const getSubordinatesEvent = createEvent<string>()
const createSupplement = createEvent()
const setCompleted = createEvent<boolean>()
const approve = createEvent<{ employeeId: string; allowanceId: string; approverEmployeeId: string }>()
const reject = createEvent<{ employeeId: string; allowanceId: string; approverEmployeeId: string }>()

const removeAllFilesFx = createEffect(async (files: string[]) => {
    await Promise.all(files.map((fileId) => removeFileMutation.start(fileId)))
})

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

const uploadFileMutation = createMutation({
    handler: uploadFile,
})
const removeFileMutation = createMutation({
    handler: removeFile,
})

const createSupplementMutation = createMutation({
    handler: createAllowance,
})

const veridctMutation = createMutation({
    handler: approveAllowance,
})

const job = createSelectField()
const sourceOfFunding = createSelectField({ reset: pageMounted })
const paymentIdentifier = createSelectField({ reset: pageMounted })
const commentary = createInputField({ reset: pageMounted })
const employees = createEmployeeField(pageMounted)
const files = createFilesField(pageMounted)

const $filesMap = createStore<Record<string, string>>({})
const $fileIds = $filesMap.map((files) => Object.values(files))

const $completed = createStore(false).reset(pageMounted)
const $allowances = createStore<{
    [key: string]: AllAllowancesModified
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

sample({
    clock: files.setValue,
    source: $filesMap,
    filter: (oldFiles, newFiles) => newFiles.length > Object.keys(oldFiles).length,
    fn: (_, newFiles) => newFiles[newFiles.length - 1],
    target: fileAttached,
})
sample({
    clock: files.setValue,
    source: { filesMap: $filesMap },
    filter: ({ filesMap }, newFiles) => newFiles.length < Object.keys(filesMap).length && newFiles.length > 0,
    fn: ({ filesMap }, newFiles) => {
        const deletedFileName = Object.keys(filesMap).find((file) => !newFiles.find((f) => f.name === file))

        return deletedFileName
    },
    target: fileRemoved,
})
sample({
    clock: files.setValue,
    filter: (newFiles) => newFiles.length === 0,
    target: allFilesRemoved,
})

sample({
    clock: fileAttached,
    target: uploadFileMutation.start,
})

sample({
    clock: allFilesRemoved,
    source: $fileIds,
    target: removeAllFilesFx,
})

sample({
    clock: fileRemoved,
    source: $filesMap,
    filter: Boolean,
    fn: (filesMap, fileName) => filesMap[fileName!],
    target: removeFileMutation.start,
})

sample({
    clock: fileRemoved,
    source: { newFiles: files.value, filesMap: $filesMap },
    filter: Boolean,
    fn: ({ newFiles, filesMap }, fileName) => {
        if (newFiles.length === 0) return {}
        const newMap = {
            ...filesMap,
        }
        delete newMap[fileName!]
        return newMap
    },
    target: $filesMap,
})

sample({
    clock: uploadFileMutation.finished.success,
    source: $filesMap,
    fn: (files, { params, result }) => ({
        ...files,
        [params.name]: result.fileId,
    }),
    target: $filesMap,
})

sample({
    clock: uploadFileMutation.$failed,
    fn: () => ({
        message: 'Не удалось прикрепить файл',
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})
sample({
    clock: uploadFileMutation.finished.failure,
    source: files.value,
    fn: (files, { params }) => files.filter((file) => (file.name === params.name ? false : true)),
    target: files.value,
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

const roleQuery = createQuery({
    handler: getRoles,
})
const $roles = roleQuery.$data.map((jobs) => jobs?.map((job) => job.roles).flat() ?? [])
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
    clock: [job.value, sourceOfFunding.value, paymentIdentifier.value, employees.value],
    source: {
        job: job.value,
        sourceOfFunding: sourceOfFunding.value,
        paymentIdentifier: paymentIdentifier.value,
        allowanceEmployees: employees.value,
    },
    fn: ({ job, sourceOfFunding, paymentIdentifier, allowanceEmployees }) =>
        Boolean(job) &&
        Boolean(sourceOfFunding) &&
        Boolean(paymentIdentifier) &&
        allowanceEmployees.filter((e) => e !== null && e.id !== '').length > 0,
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
        files: $fileIds,
    },
    filter: ({ job, sourceOfFunding, paymentIdentifier, allowanceEmployees }) =>
        !!job?.id &&
        !!sourceOfFunding?.id &&
        !!paymentIdentifier?.id &&
        allowanceEmployees.filter((e) => e !== null).length > 0,
    fn: ({ job, sourceOfFunding, paymentIdentifier, commentary, allowanceEmployees, files }) => ({
        initiatorId: job?.id.toString() || '',
        sourceOfFundingId: sourceOfFunding?.id.toString() || '',
        paymentIdentifierId: paymentIdentifier?.id.toString() || '',
        commentary: commentary,
        allowanceEmployees: allowanceEmployees.filter((e) => e !== null) as Employee[],
        attachedFileIds: files,
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
    target: roleQuery.start,
})
sample({
    clock: appStarted,
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
            const rawData = await getAllowancesFx(job.employeeId)
            const modifiedData: AllAllowancesModified = {
                approverAllowances: rawData.approverAllowances.map((allowance) => ({
                    ...allowance,
                    allowanceStatus: allowanceStatus[allowance.allowanceStatus],
                })),
                initiatorAllowances: rawData.initiatorAllowances.map((allowance) => ({
                    ...allowance,
                    allowanceStatus: allowanceStatus[allowance.allowanceStatus],
                })),
            }
            return modifiedData
        }),
    )
    return jobs.reduce((acc, job, index) => {
        acc[job.employeeId] = allowances[index]
        return acc
    }, {} as { [key: string]: AllAllowancesModified })
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
    uploadFile: uploadFileMutation,
}

export const stores = {
    roles: $roles,
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

function createInputField({ defaultValue, reset }: { defaultValue?: string; reset?: Unit<any> } = {}) {
    const setValue = createEvent<string>()
    const $store = createStore<string>(defaultValue ?? '').on(setValue, (_, newValue) => newValue)
    if (reset) $store.reset(reset)

    return {
        value: $store,
        setValue,
    }
}

function createSelectField({ defaultValue, reset }: { defaultValue?: SelectPage | null; reset?: Unit<any> } = {}) {
    const setValue = createEvent<SelectPage | null>()
    const $store = createStore<SelectPage | null>(defaultValue ?? null).on(setValue, (_, newValue) => newValue)
    if (reset) $store.reset(reset)

    return {
        value: $store,
        setValue,
    }
}

function createEmployeeField(reset: Unit<any>) {
    const addEmployee = createEvent()
    const setEmployee = createEvent<{ employee: Employee; index: number }>()
    const removeEmployee = createEvent<number>()
    const $employees = createStore<(Employee | null)[]>([])
        .on(addEmployee, (employees) => [...employees, { id: '', divisionId: '', startDate: '', endDate: '', sum: '' }])
        .on(removeEmployee, (employees, index) => employees.map((e, i) => (i === index ? null : e)))
        .on(setEmployee, (employees, { employee, index }) => employees.map((e, i) => (i === index ? employee : e)))
        .reset(reset)

    return {
        value: $employees,
        setValue: setEmployee,
        addItem: addEmployee,
        removeItem: removeEmployee,
    }
}

function createFilesField(reset: Unit<any>) {
    const setValue = createEvent<File[]>()
    const $store = createStore<File[]>([])
        .on(setValue, (_, newValue) => newValue)
        .reset(reset)

    return {
        value: $store,
        setValue,
    }
}

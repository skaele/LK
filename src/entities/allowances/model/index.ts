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
} from '@shared/api/allowances-api'
import { createMutation, createQuery } from '@farfetched/core'
import { userModel } from '@entities/user'
import { popUpMessageModel } from '@entities/pop-up-message'
import { SelectPage } from '@features/select'
import { allowanceStatus } from '../consts'
import { createDatePeriodField } from '@shared/effector/form/create-date-period-field'
import { createFilesField } from '@shared/effector/form/create-file-filed'
import { createSelectField } from '@shared/effector/form/create-select-field'
import { createInputField } from '@shared/effector/form/create-input-field'

export type AllAllowancesModified = {
    initiatorAllowances: AllowanceModified[]
    approverAllowances: AllowanceModified[]
}
export type AllAllowances = { initiatorAllowances: Allowance[]; approverAllowances: Allowance[] }

const appStarted = createEvent()
const pageMounted = createEvent()
const notificationRead = createEvent<string>()
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
const setCurrentRole = createEvent<Role>()
const setCurrentJobId = createEvent<string>()

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
const period = createAllowancesPeriod()
const employees = createEmployeeField(pageMounted)
const files = createFilesField({ reset: pageMounted })

const $filesMap = createStore<Record<string, string>>({})
const $fileIds = $filesMap.map((files) => Object.values(files))
const $currentRole = createStore<Role | null>(null)
    .on(setCurrentRole, (_, role) => role)
    .reset(userModel.events.logout)
const $currentJobId = createStore<string | null>(null)
    .on(setCurrentJobId, (_, jobId) => jobId)
    .reset(userModel.events.logout)
const isPaymentForLaborIntensity = paymentIdentifier.value.map((item) =>
    item?.title.toLowerCase().includes('интенсивность труда'),
)

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

const $errorMessage = createStore<string>('')
sample({
    clock: [job.value, paymentIdentifier.value, employees.value],
    source: {
        job: job.value,
        paymentIdentifier: paymentIdentifier.value,
        allowanceEmployees: employees.value,
        files: files.value,
        isPaymentForLaborIntensity,
    },
    fn: ({ job, paymentIdentifier, allowanceEmployees, isPaymentForLaborIntensity, files }) => {
        if (!job) return 'Выберите должность'
        if (!paymentIdentifier) return 'Выберите вид надбавки'
        if (isPaymentForLaborIntensity && files.length === 0) return 'Приложите файл'
        if (allowanceEmployees.filter((e) => e !== null && e.id !== '').length <= 0) return 'Выберите сотрудников'
        return 'Для отправки формы необходимо, чтобы все поля были заполнены'
    },
    target: $errorMessage,
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
    filter: ({ job, paymentIdentifier, allowanceEmployees }) =>
        !!job?.id && !!paymentIdentifier?.id && allowanceEmployees.filter((e) => e !== null).length > 0,
    fn: ({ job, sourceOfFunding, paymentIdentifier, commentary, allowanceEmployees, files }) => ({
        initiatorId: job?.id.toString() || '',
        sourceOfFundingId: sourceOfFunding?.id.toString() || null,
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
    clock: period.setStartDate,
    target: employees.setStartDate,
})
sample({
    clock: period.setEndDate,
    target: employees.setEndDate,
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

sample({
    clock: notificationRead,
    source: notificationsQuery.$data,
    filter: (notifications, id) => {
        const notification = notifications?.find((n) => n.notificationId === id)

        return notification?.notificationType !== 'ToConfirm'
    },
    fn: (_, id) => id,
    target: viewNotificationMutation.start,
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
    notificationRead,
    setCurrentRole,
    setCurrentJobId,
}

export const stores = {
    jobRoles: roleQuery.$data,
    rolesPending: roleQuery.$pending,
    roles: $roles,

    paymentIdentifiers: $paymentIdentifiers,
    allowances: $allowances,
    fileUploading: uploadFileMutation.$pending,
    employees: $subordinates,
    completed: $completed,
    errorMessage: $errorMessage,
    isActive: $errorMessage.map((errorMessage) => !errorMessage),
    supplementCreating: createSupplementMutation.$pending,

    allowance: {
        data: allowanceQuery.$data,
        loading: allowanceQuery.$pending,
        error: allowanceQuery.$error,
        role: $currentRole,
        jobId: $currentJobId,
    },

    personalAllowances: {
        data: personalAllowancesQuery.$data,
        loading: personalAllowancesQuery.$pending,
    },

    notifications: {
        data: notificationsQuery.$data,
        loading: notificationsQuery.$pending,
    },
}

export const fields = {
    job,
    sourceOfFunding,
    paymentIdentifier,
    period,
    commentary,
    employees,
    files,
}

function createEmployeeField(reset: Unit<any>) {
    const addEmployee = createEvent<string>()
    const setEmployee = createEvent<Employee>()
    const setStartDate = createEvent<string>()
    const setEndDate = createEvent<string>()
    const selectAll = createEvent<string[]>()
    const deselectAll = createEvent()
    const removeEmployee = createEvent<string>()
    const allSelected = createStore<boolean>(false)
        .on(selectAll, () => true)
        .on(deselectAll, () => false)
        .reset([reset, removeEmployee])
    const $employees = createStore<Employee[]>([])
        .on(removeEmployee, (employees, id) => employees.filter((e) => e.id !== id))
        .on(setEmployee, (employees, employee) => {
            if (new Date(employee.startDate) > new Date(employee.endDate)) {
                return employees.map((e) => (e.id === employee.id ? { ...employee, endDate: '' } : e))
            }
            return employees.map((e) => (e.id === employee.id ? employee : e))
        })
        .on(setStartDate, (employees, startDate) => employees.map((e) => ({ ...e, startDate })))
        .on(setEndDate, (employees, endDate) => employees.map((e) => ({ ...e, endDate })))
        .reset([reset, deselectAll])

    sample({
        clock: addEmployee,
        source: { employees: $employees, startDate: period.startDate, endDate: period.endDate },
        fn: ({ employees, startDate, endDate }, id) => [...employees, { id, startDate, endDate, sum: '' }],
        target: $employees,
    })
    sample({
        clock: selectAll,
        source: { employees: $employees, startDate: period.startDate, endDate: period.endDate },
        fn: ({ employees, startDate, endDate }, selected) => {
            const selectedFiltered = selected.filter(
                (employeeId) => !employees.some((employee) => employee.id === employeeId),
            )
            return [...employees, ...selectedFiltered.map((id) => ({ id, startDate, endDate, sum: '' }))]
        },
        target: $employees,
    })
    return {
        value: $employees,
        setValue: setEmployee,
        addItem: addEmployee,
        removeItem: removeEmployee,
        setStartDate,
        setEndDate,
        selectAll,
        deselectAll,
        allSelected,
    }
}

function createAllowancesPeriod() {
    const now = new Date()
    const firstDayOfMonth = new Date(Date.UTC(now.getFullYear(), now.getMonth(), 1)).toISOString().split('T')[0]
    const fifteenthDayOfMonth = new Date(Date.UTC(now.getFullYear(), now.getMonth(), 15, 0)).toISOString().split('T')[0]
    const period = createDatePeriodField({ reset: pageMounted })
    const $minDate = createStore(new Date().getDate() > 13 ? fifteenthDayOfMonth : firstDayOfMonth)

    return {
        ...period,
        minDate: $minDate,
    }
}

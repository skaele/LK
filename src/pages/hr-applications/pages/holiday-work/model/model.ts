import { popUpMessageModelHr } from '@entities/pop-up-message-hr'
import { createEffect, createEvent, createStore, sample, Unit } from 'effector'
import { createMutation, createQuery } from '@farfetched/core'
import {
    createHolidayWorkApplication,
    getHolidayWorkClaims,
    getSupervisorRoles,
    getSupervisorSubordinates,
} from '@shared/api/hr-application-api'
import { Employee } from '../types'
import { createSelectField } from '@shared/effector/crate-select-field'
import { staffAppStarted } from '@shared/effector'
import { JobRoles, Subordinate } from '@pages/hr-applications/types'

const bufferPageMounted = createEvent()
const pageMounted = createEvent()
const createApplication = createEvent()
const setCompleted = createEvent()

const getSupervisorRolesQuery = createQuery({
    handler: getSupervisorRoles,
})
const $roles = getSupervisorRolesQuery.$data.map((jobs) => jobs?.map((job) => job.roles).flat() ?? [])
const getSubordinatesFx = createEffect(async (userId: string) => {
    return getSupervisorSubordinates(userId)
})
const $subordinates = createStore<{
    [key: string]: Subordinate[]
} | null>(null)
const getAllEmployees = createEffect(async (jobs: JobRoles) => {
    const employees = await Promise.all(
        jobs.map(async (job) => {
            return await getSubordinatesFx(job.employeeId)
        }),
    )
    return jobs.reduce((acc, job, index) => {
        acc[job.employeeId] = employees[index]
        return acc
    }, {} as { [key: string]: Subordinate[] })
})
sample({
    clock: pageMounted,
    source: getSupervisorRolesQuery.$data,
    filter: (roles) => roles !== null,
    fn: (roles) => roles as JobRoles,
    target: getAllEmployees,
})
sample({
    clock: getAllEmployees.doneData,
    target: $subordinates,
})

const job = createSelectField()
const employees = createEmployeeField(pageMounted)

const getHolidayWorkClaimsQuery = createQuery({
    handler: getHolidayWorkClaims,
})
const createApplicationMutation = createMutation({
    handler: createHolidayWorkApplication,
})
sample({
    clock: staffAppStarted,
    target: getSupervisorRolesQuery.start,
})

sample({
    clock: bufferPageMounted,
    target: getHolidayWorkClaimsQuery.start,
})

sample({
    clock: createApplication,
    source: {
        job: job.value,
        employees: employees.value,
    },
    filter: ({ job, employees }) => !!job?.id && employees.length > 0,
    fn: ({ job, employees }) => ({
        initiatorGuid: job?.id.toString() || '',
        employees,
    }),
    target: createApplicationMutation.start,
})

sample({
    clock: createApplicationMutation.finished.success,
    fn: () => {
        return {
            message: `Форма отправлена успешно`,
            type: 'success' as const,
        }
    },
    target: popUpMessageModelHr.events.evokePopUpMessage,
})

sample({
    clock: createApplicationMutation.finished.failure,
    fn: () => {
        return {
            message: 'Не удалось отправить форму.',
            type: 'hrFailure' as const,
        }
    },
    target: popUpMessageModelHr.events.evokePopUpMessage,
})

sample({
    clock: createApplicationMutation.finished.success,
    target: setCompleted,
})

const $isActive = createStore<boolean>(false)
const $completed = createStore(false)
    .on(setCompleted, () => true)
    .reset(pageMounted)

sample({
    clock: [job.value, employees.value],
    source: {
        job: job.value,
        allowanceEmployees: employees.value,
    },
    fn: ({ job, allowanceEmployees }) => Boolean(job) && allowanceEmployees.length > 0,
    target: $isActive,
})
export const events = {
    bufferPageMounted,
    pageMounted,
    createApplication,
    setCompleted,
}

export const stores = {
    data: getHolidayWorkClaimsQuery.$data,
    dataLoading: getHolidayWorkClaimsQuery.$pending,
    roles: getSupervisorRolesQuery.$data,
    rolesFlattened: $roles,
    rolesLoading: getSupervisorRolesQuery.$pending,
    subordinates: $subordinates,
    loading: createApplicationMutation.$pending,
    isActive: $isActive,
    completed: $completed,
}

export const fields = {
    job,
    employees,
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
        .on(removeEmployee, (employees, id) => employees.filter((e) => e.employeeGuid !== id))
        .on(setEmployee, (employees, employee) => {
            return employees.map((e) => (e.employeeGuid === employee.employeeGuid ? employee : e))
        })
        .on(setStartDate, (employees, startDate) => employees.map((e) => ({ ...e, startDate })))
        .on(setEndDate, (employees, endDate) => employees.map((e) => ({ ...e, endDate })))
        .reset([reset, deselectAll])

    sample({
        clock: addEmployee,
        source: $employees,
        fn: (employees, id) => [...employees, { employeeGuid: id, weekendWorkDate: '', hoursToWork: 0 }],
        target: $employees,
    })
    sample({
        clock: selectAll,
        source: $employees,
        fn: (employees, selected) => {
            const selectedFiltered = selected.filter(
                (employeeId) => !employees.some((employee) => employee.employeeGuid === employeeId),
            )
            return [
                ...employees,
                ...selectedFiltered.map((id) => ({ employeeGuid: id, weekendWorkDate: '', hoursToWork: 0 })),
            ]
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

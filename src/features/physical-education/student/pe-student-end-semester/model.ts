import { createEffect, createEvent, createStore, sample } from 'effector'
import { getEndSemesterMutation } from './lib'
import { pERequest } from '@shared/api/config/pe-config'

const endSemester = createEvent<{ studentId: string }>()
const reset = createEvent()

const endSemesterFx = createEffect(async ({ studentId }: { studentId: string }) => {
    const data = await pERequest<{ archivedStudentEntity: { studentGuid: string } }>(getEndSemesterMutation(studentId))

    return data.archivedStudentEntity
})

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

const $statuses = createStore<Record<string, Status>>({}).reset(reset)

sample({
    clock: endSemester,
    source: $statuses,
    fn: (statuses, { studentId }) => {
        return {
            ...statuses,
            [studentId]: Status.LOADING,
        }
    },
    target: $statuses,
})

sample({
    clock: endSemesterFx.doneData,
    source: $statuses,
    fn: (statuses, { studentGuid }) => {
        return {
            ...statuses,
            [studentGuid]: Status.SUCCESS,
        }
    },
    target: $statuses,
})

sample({
    clock: endSemesterFx.fail,
    source: $statuses,
    fn: (statuses, { params }) => {
        return {
            ...statuses,
            [params.studentId]: Status.ERROR,
        }
    },
    target: $statuses,
})

sample({
    clock: endSemesterFx.done,
    source: $statuses,
    fn: (statuses, { params }) => {
        return {
            ...statuses,
            [params.studentId]: Status.SUCCESS,
        }
    },
    target: $statuses,
})

sample({ clock: endSemester, target: endSemesterFx })

export const events = { endSemester, reset }

export const stores = {
    statuses: $statuses,
}

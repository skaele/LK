import { createEvent, createStore, sample } from 'effector'

import { PEStudent } from '@shared/api/physical-education'

import { pEStudentVisitModel } from '.'

const load = createEvent()
const setPage = createEvent<number>()

const $pEStudentsPage = createStore<number>(0).on(setPage, (_, page) => page)

const $pEStudents = createStore<PEStudent[]>([])
const $pEStudentsTotalCount = createStore<number>(0)

sample({
    clock: pEStudentVisitModel.effects.addVisitFx.doneData,
    source: $pEStudents,
    filter: (students, { studentGuid }) => students.some((s) => s.studentGuid === studentGuid),
    fn: (students, visit) => {
        const updatedStudents = JSON.parse(JSON.stringify(students)) as typeof students

        const updatedStudent = updatedStudents.find((s) => s.studentGuid === visit.studentGuid)!

        ++updatedStudent.visits

        return updatedStudents
    },
    target: $pEStudents,
})

export const events = {
    load,
    setPage,
}

export const stores = {
    $pEStudents,
    $pEStudentsPage,
    $pEStudentsTotalCount,
}

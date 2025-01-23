import { PEStudent } from '@entities/pe-student/types'
import { pEStudentFilterModel } from '@pages/teacher-physical-education/model'
import { peApi } from '@shared/api'
import { attach, combine, createEvent, createStore, sample } from 'effector'
import { debounce } from 'patronum'

import { pEStudentVisitModel } from '.'

const load = createEvent()
const setPage = createEvent<number>()

const $pEStudentsPage = createStore<number>(0)
    .on(setPage, (_, page) => page)
    .on(pEStudentFilterModel.stores.$filters, () => 0)

const loadPageFx = attach({
    source: { page: $pEStudentsPage, filters: pEStudentFilterModel.stores.$filters },
    effect: async ({ filters, page }) => {
        const { data } = await peApi.getStudents(page, filters)

        return data.data
    },
})

debounce({ source: combine($pEStudentsPage, pEStudentFilterModel.stores.$filters), timeout: 200, target: load })

sample({ clock: load, target: loadPageFx })

const $pEStudents = createStore<PEStudent[]>([]).on(loadPageFx.doneData, (_, data) => data.students)
const $pEStudentsTotalCount = createStore<number>(0).on(loadPageFx.doneData, (_, data) => data.totalCount)
const $loading = combine(loadPageFx.pending, Boolean)

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
    $loading,
    $pEStudents,
    $pEStudentsPage,
    $pEStudentsTotalCount,
}

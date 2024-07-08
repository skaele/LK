import { PEStudent } from '@entities/pe-student/types'
import { peStudentEndSemesterModel } from '@features/physical-education/student/pe-student-end-semester'
import { Status } from '@features/physical-education/student/pe-student-end-semester/model'
import { attach, combine, createEvent, createStore, sample } from 'effector'

import { peApi } from '@shared/api'

const selectedGroupChanged = createEvent<string>()

const load = createEvent()
const reset = createEvent()
const endSemesterForGroup = createEvent()

const $selectedGroup = createStore<string>('')
    .on(selectedGroupChanged, (_, group) => group)
    .reset(reset)

const loadFx = attach({
    source: $selectedGroup,
    effect: async (group) => {
        const { data } = await peApi.getStudents(0, { group: { value: group } }, 200)

        return data.data.students
    },
})

sample({ source: $selectedGroup, filter: Boolean, target: loadFx })

const $pEStudents = createStore<PEStudent[]>([])
    .on(loadFx.doneData, (_, students) => students)
    .reset(reset)

const $loading = combine(loadFx.pending, Boolean)

const endSemesterForGroupFx = attach({
    source: $pEStudents,
    effect: async (students) => {
        students.forEach((student) => peStudentEndSemesterModel.events.endSemester({ studentId: student.studentGuid }))
    },
})

sample({
    clock: peStudentEndSemesterModel.stores.statuses,
    filter: (statuses) => Object.values(statuses).every((status) => status !== Status.LOADING),
    target: load,
})

sample({
    clock: endSemesterForGroup,
    target: endSemesterForGroupFx,
})

const events = {
    load,
    reset,
    selectedGroupChanged,
    endSemesterForGroup,
}

const stores = {
    $loading,
    $pEStudents,
    $selectedGroup,
}

export const peExamStudentModel = {
    events,
    stores,
}

import { PEStudent } from '@entities/pe-student/types'
import { getFilters } from '@entities/pe-student/utils/get-filters'
import { getPEStudentsQuery } from '@entities/pe-student/utils/get-pe-student-query'
import { peStudentEndSemesterModel } from '@features/physical-education/student/pe-student-end-semester'
import { Status } from '@features/physical-education/student/pe-student-end-semester/model'
import { pERequest } from '@shared/api/config/pe-config'
import { attach, combine, createEvent, createStore, sample } from 'effector'

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
        const { students } = await pERequest<{ students: { items: PEStudent[] } }>(
            getPEStudentsQuery(0, getFilters({ 'group.groupName': { value: group ?? '', strict: true } }), 1000),
        )

        return students
    },
})

sample({ source: $selectedGroup, filter: Boolean, target: loadFx })

const $pEStudents = createStore<PEStudent[]>([])
    .on(loadFx.doneData, (_, students) => students.items)
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

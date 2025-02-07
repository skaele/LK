import { createEvent, sample } from 'effector'

import { peExamStudentModel } from '../../../features/physical-education/end-semester/pe-exam-student-model'

export const pageLoaded = createEvent()
export const pageUnloaded = createEvent()

sample({
    clock: pageLoaded,
    target: peExamStudentModel.events.load,
})

sample({
    clock: pageUnloaded,
    target: peExamStudentModel.events.reset,
})

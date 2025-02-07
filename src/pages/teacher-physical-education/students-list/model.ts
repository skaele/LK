import { createEvent, sample } from 'effector'

import { pEStudentModel } from '@entities/pe-student/model'

export const pageLoaded = createEvent()

sample({
    clock: pageLoaded,
    target: pEStudentModel.events.load,
})

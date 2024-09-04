import { peStudentAdditionalPointsModel } from '@entities/pe-student-additional-points/model'
import { peStudentRegulationPointsModel } from '@entities/pe-student-regulation-points/model'
import * as peStudentSpecializationModel from './pe-student-specialization-model'
import * as peStudentHealthGroupModel from './pe-student-health-group-model'

import { combine, createEffect, createEvent, createStore, sample } from 'effector'
import { pEStudentVisitModel } from '.'
import { PEStudentProfile } from '../types'

import { peApi } from '@shared/api'

const setCurrentStudentId = createEvent<string>()
const resetStudentId = createEvent()
const reload = createEvent()

const loadCurrentStudent = createEffect(async (studentId: string) => {
    const { data } = await peApi.getStudent(studentId)

    return data.data
})

sample({ clock: setCurrentStudentId, target: loadCurrentStudent })

const $selectedStudent = createStore<PEStudentProfile | null>(null).reset(resetStudentId)
const $loading = combine(pEStudentVisitModel.effects.addVisitFx.pending, loadCurrentStudent.pending, Boolean)

sample({
    clock: [
        pEStudentVisitModel.effects.addVisitFx.doneData,
        pEStudentVisitModel.effects.removeVisitFx.doneData,

        peStudentHealthGroupModel.effects.setHealthGroupFx.doneData,

        peStudentSpecializationModel.effects.setSpecializationFx.doneData,

        peStudentAdditionalPointsModel.effects.addAdditionPointsFx.doneData,
        peStudentAdditionalPointsModel.effects.removeAdditionPointsFx.doneData,

        peStudentRegulationPointsModel.effects.addRegulationPointsFx.doneData,
        peStudentRegulationPointsModel.effects.removeRegulationPointsFx.doneData,
    ],
    target: reload,
})

sample({
    clock: reload,
    source: $selectedStudent,
    filter: (source) => !!source,
    fn: (source) => source!.studentGuid,
    target: loadCurrentStudent,
})

sample({ clock: loadCurrentStudent.doneData, target: $selectedStudent })

export const stores = {
    $selectedStudent,
    $loading,
}

export const events = {
    setCurrentStudentId,
    resetStudentId,
}

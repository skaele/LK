import { createEffect, createEvent, createStore, forward, sample } from 'effector'
import { useStore } from 'effector-react'

import { $hrApi } from '@shared/api/config'
import { getJwtToken, parseJwt } from '@shared/api/session/jwt-token'
import { MessageType } from '@shared/consts'
import { popUpMessageModel } from '@shared/ui/pop-up-message'

import { setAgeMed } from '../../medical-examination/lib/age-med'
import { setIsTutor } from '../../medical-examination/lib/is-tutor'
import { BufferMedicalExamination, BufferMedicalExaminationForm, BufferMedicalExaminationOrder } from '../types'

interface MedicalExaminationStore {
    listMedicalExamination: BufferMedicalExaminationOrder[] | null
    error: string | null
}

const DEFAULT_STORE = { listMedicalExamination: null, error: null }

const loadBufferMedicalExaminationFx = createEffect(async () => {
    const response = await $hrApi.get<BufferMedicalExamination>(
        `MedicalExamination.GetAllHistory?PersonalGuid=${parseJwt(getJwtToken() ?? '').IndividualGuid}`,
    )
    try {
        setAgeMed(response.data.age)
        setIsTutor(
            response.data.employeeMedicalExaminations.map(({ employeeGuid, tutor }) => ({ employeeGuid, tutor })),
        )

        return response.data.employeeMedicalExaminations
    } catch (_) {
        throw new Error('Не удалось загрузить информацию. Попробуйте позже')
    }
})

const sendBufferMedicalExaminationFx = createEffect(async (data: BufferMedicalExaminationForm) => {
    try {
        const result = await $hrApi.post<BufferMedicalExamination>('MedicalExamination.AddMedicalExamination', data)

        if (result.data.isError) {
            throw new Error()
        }

        return result.data
    } catch (error) {
        throw new Error(error as string)
    }
})

const useBufferMedicalExamination = () => {
    const { listMedicalExamination, error } = useStore($medicalExaminationStore)
    return {
        data: listMedicalExamination,
        loading: useStore(sendBufferMedicalExaminationFx.pending),
        getDataLoading: useStore(loadBufferMedicalExaminationFx.pending),
        error: error,
    }
}

const clearStore = createEvent()

forward({ from: sendBufferMedicalExaminationFx.doneData, to: loadBufferMedicalExaminationFx })

sample({
    clock: sendBufferMedicalExaminationFx.doneData,
    fn: () => ({
        message: `Форма отправлена успешно`,
        type: 'success' as MessageType,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: sendBufferMedicalExaminationFx.failData,
    fn: () => ({
        message: 'Не удалось отправить форму.',
        type: 'hrFailure' as MessageType,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

const $medicalExaminationStore = createStore<MedicalExaminationStore>(DEFAULT_STORE)
    .on(loadBufferMedicalExaminationFx, (oldData) => ({
        ...oldData,
        error: null,
    }))
    .on(loadBufferMedicalExaminationFx.doneData, (oldData, newData) => ({
        ...oldData,
        listMedicalExamination: newData,
    }))
    .on(loadBufferMedicalExaminationFx.failData, (oldData, newData) => ({
        ...oldData,
        error: newData.message,
    }))

export const effects = { loadBufferMedicalExaminationFx, sendBufferMedicalExaminationFx }

export const selectors = { useBufferMedicalExamination }

export const events = {
    clearStore,
}

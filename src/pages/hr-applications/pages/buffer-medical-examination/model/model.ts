import { popUpMessageModelHr } from '@entities/pop-up-message-hr'
import { getJwtToken, parseJwt } from '@entities/user/lib/jwt-token'
import { $hrApi } from '@shared/api/config'
import { MessageType } from '@shared/ui/types'
import { createEffect, createEvent, createStore, forward, sample } from 'effector'
import { useStore } from 'effector-react'
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
        // ???????
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
            popUpMessageModelHr.events.evokePopUpMessage({
                message: result.data.error,
                type: 'hrFailure' as MessageType,
                time: 300000,
            })
        }

        popUpMessageModelHr.events.evokePopUpMessage({
            message: `Форма отправлена успешно`,
            type: 'success' as MessageType,
            time: 0,
        })

        return result.data
    } catch (error) {
        console.log('sendBufferMedicalExaminationFx', error)
        throw new Error(error as string)
    }
})

const useBufferMedicalExamination = () => {
    const { listMedicalExamination, error } = useStore($medicalExaminationStore)
    return {
        data: listMedicalExamination,
        loading: useStore(loadBufferMedicalExaminationFx.pending),
        error: error,
    }
}

const clearStore = createEvent()

forward({ from: sendBufferMedicalExaminationFx.doneData, to: loadBufferMedicalExaminationFx })

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

sendBufferMedicalExaminationFx.fail.watch(() =>
    popUpMessageModelHr.events.evokePopUpMessage({
        message: 'Не удалось отправить форму.',
        type: 'hrFailure' as MessageType,
        time: 300000,
    }),
)

export const effects = { loadBufferMedicalExaminationFx, sendBufferMedicalExaminationFx }

export const selectors = { useBufferMedicalExamination }

export const events = {
    clearStore,
}

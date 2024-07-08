import { getJwtToken, parseJwt } from '@entities/user/lib/jwt-token'
import { $hrApi } from '@shared/api/config'
import { MessageType } from '@shared/ui/types'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { setAgeMed } from '../../medical-examination/lib/age-med'
import { setIsTutor } from '../../medical-examination/lib/is-tutor'
import { BufferMedicalExamination, BufferMedicalExaminationForm, BufferMedicalExaminationOrder } from '../types'
import { popUpMessageModel } from '@entities/pop-up-message'

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

const clearStore = createEvent()

sample({ clock: sendBufferMedicalExaminationFx.doneData, target: loadBufferMedicalExaminationFx })

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

const $medicalExamination = createStore<BufferMedicalExaminationOrder[] | null>(null).on(
    loadBufferMedicalExaminationFx.doneData,
    (_, newData) => newData,
)

const $error = createStore<string | null>(null)
    .on(loadBufferMedicalExaminationFx, () => null)
    .on(loadBufferMedicalExaminationFx.failData, (_, { message }) => message)

export const effects = { loadBufferMedicalExaminationFx, sendBufferMedicalExaminationFx }

export const stores = {
    data: $medicalExamination,
    loading: sendBufferMedicalExaminationFx.pending,
    error: $error,
    getDataLoading: loadBufferMedicalExaminationFx.pending,
}

export const events = {
    clearStore,
}

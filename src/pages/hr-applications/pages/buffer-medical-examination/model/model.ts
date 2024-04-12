import { getJwtToken, parseJwt } from '@entities/user/lib/jwt-token'
import { $hrApi, isAxiosError } from '@shared/api/config'
import { MessageType } from '@shared/ui/types'
import { createEffect, createEvent, createStore, forward, sample } from 'effector'
import { useStore } from 'effector-react'
import { setAgeMed } from '../../medical-examination/lib/age-med'
import { setIsTutor } from '../../medical-examination/lib/is-tutor'
import { BufferMedicalExamination, BufferMedicalExaminationForm, PersonMedicalExaminations } from '../types'
import { popUpMessageModel } from '@entities/pop-up-message'

interface MedicalExaminationStore {
    listMedicalExamination: PersonMedicalExaminations[] | null
    error: string | null
}

const DEFAULT_STORE = { listMedicalExamination: null, error: null }

const loadBufferMedicalExaminationFx = createEffect(async () => {
    const response = await $hrApi.get<BufferMedicalExamination>(
        `MedicalExamination.GetAllHistory?PersonalGuid=${parseJwt(getJwtToken() ?? '').IndividualGuid}`,
    )
    try {
        setAgeMed(response.data.age)
        setIsTutor(response.data.personMedicalExaminations.map(({ employeeGuid, tutor }) => ({ employeeGuid, tutor })))

        return response.data.personMedicalExaminations
    } catch (_) {
        throw new Error('Не удалось загрузить информацию. Попробуйте позже')
    }
})

const sendBufferMedicalExaminationFx = createEffect(async (data: BufferMedicalExaminationForm) => {
    try {
        const { files } = data
        const formData = new FormData()

        for (const [key, value] of Object.entries(data)) {
            if (key !== 'files') formData.set(key, value)
        }
        if (!!files[0]) {
            for (let i = 0; i < files[0].length; i++) {
                formData.append('files', files[0][i])
            }
        }

        const result = await $hrApi.post(`MedicalExamination.AddMedicalExamination`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

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
        message: 'Не удалось отправить форму',
        type: 'failure' as MessageType,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: loadBufferMedicalExaminationFx.failData,
    fn: (response) => {
        const message = isAxiosError(response) ? (response.response?.data as any).error : 'Не удалось загрузить данные'

        return {
            message,
            type: 'failure' as MessageType,
        }
    },
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
    .on(clearStore, () => DEFAULT_STORE)

export const effects = { loadBufferMedicalExaminationFx, sendBufferMedicalExaminationFx }

export const selectors = { useBufferMedicalExamination }

export const events = {
    clearStore,
}

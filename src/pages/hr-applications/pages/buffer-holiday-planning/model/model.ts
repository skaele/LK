import { popUpMessageModel } from '@entities/pop-up-message'
import { getJwtToken, parseJwt } from '@entities/user/lib/jwt-token'
import { BufferHoliday } from '@pages/hr-applications/types/hr-applications'
import { $hrApi, isAxiosError } from '@shared/api/config'
import { MessageType } from '@shared/ui/types'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { useStore } from 'effector-react'

import { BufferHolidayPlanningForm } from '../types'

const loadBufferHolidayPlanning = createEvent()
const sendBufferHolidayPlanning = createEvent<BufferHolidayPlanningForm>()

const loadBufferHolidayPlanningFx = createEffect(async () => {
    const { data } = await $hrApi.get<BufferHoliday>(
        `Vacation.GetAllHistory?personalGuid=${parseJwt(getJwtToken() ?? '').IndividualGuid}`,
    )
    return data
})

sample({ clock: loadBufferHolidayPlanning, target: loadBufferHolidayPlanningFx })

const sendBufferHolidayPlanningFx = createEffect(async (data: BufferHolidayPlanningForm) => {
    const result = await $hrApi.post<BufferHoliday>('Vacation.AddVacation', data)

    return result.data
})

sample({ clock: sendBufferHolidayPlanning, target: sendBufferHolidayPlanningFx })

const $bufferHolidayPlanning = createStore<BufferHoliday['employeeVacations'] | null>(null)

sample({
    clock: loadBufferHolidayPlanningFx.doneData,
    fn: ({ employeeVacations }) => employeeVacations,
    target: $bufferHolidayPlanning,
})

sample({
    clock: sendBufferHolidayPlanningFx.doneData,
    fn: (result) => {
        if (result.isError) {
            throw new Error(result.error)
        }

        return {
            message: `Форма отправлена успешно`,
            type: 'success' as MessageType,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: sendBufferHolidayPlanningFx.failData,
    fn: ({ message }) => {
        return {
            message,
            type: 'hrFailure' as MessageType,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: sendBufferHolidayPlanningFx.doneData,
    source: $bufferHolidayPlanning,
    fn: (source, { employeeVacations }) => {
        return [...source!, ...employeeVacations]
    },
    target: $bufferHolidayPlanning,
})

sample({
    clock: loadBufferHolidayPlanningFx.failData,
    fn: (response) => {
        const message = isAxiosError(response) ? (response.response?.data as any).error : 'Не удалось загрузить данные'

        return {
            message,
            type: 'failure' as MessageType,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: sendBufferHolidayPlanningFx.doneData,
    target: loadBufferHolidayPlanningFx,
})

export const events = {
    loadBufferHolidayPlanning,
    sendBufferHolidayPlanning,
}

export const effects = {
    sendBufferHolidayPlanningFx,
}
export const selectors = {
    useBufferHolidayPlanning: () => ({
        data: useStore($bufferHolidayPlanning),
        loading: useStore(sendBufferHolidayPlanningFx.pending),
        getDataLoading: useStore(loadBufferHolidayPlanningFx.pending),
    }),
}

import { createEffect, createEvent, sample } from 'effector'

import { peApi } from '@shared/api'
import { getPeErrorMsg } from '@shared/api/config/pe-config'
import { SetSpecialization, Specialization } from '@shared/api/physical-education'
import { popUpMessageModel } from '@shared/ui/pop-up-message'

const setSpecialization = createEvent<{ studentGuid: string; specialization: Specialization }>()

const setSpecializationFx = createEffect(async (payload: SetSpecialization) => {
    await peApi.setSpecialization(payload)

    return payload
})

const $pendingSetSpecialization = setSpecializationFx.pending

sample({ clock: setSpecialization, target: setSpecializationFx })

sample({
    clock: setSpecializationFx.failData,
    fn: (err) => ({
        message: getPeErrorMsg(err, 'Не удалось добавить специализацию'),
        type: 'failure' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: setSpecializationFx.doneData,
    fn: () => ({
        message: 'Специализация добавлена',
        type: 'success' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const events = {
    setSpecialization,
}

export const effects = {
    setSpecializationFx,
}

export const stores = {
    pendingSetSpecialization: $pendingSetSpecialization,
}

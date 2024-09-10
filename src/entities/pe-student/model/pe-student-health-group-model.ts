import { popUpMessageModel } from '@entities/pop-up-message'

import { createEffect, createEvent, sample } from 'effector'

import { peApi } from '@shared/api'
import { getPeErrorMsg } from '@shared/api/config/pe-config'
import { HealthGroup } from '../types'
import { SetHealthGroup } from '../types/set-health-group'

const setHealthGroup = createEvent<{ studentGuid: string; healthGroup: HealthGroup }>()

const setHealthGroupFx = createEffect(async (payload: SetHealthGroup) => {
    await peApi.setHealthGroup(payload)

    return payload
})

const $pendingSetHealthGroup = setHealthGroupFx.pending

sample({ clock: setHealthGroup, target: setHealthGroupFx })

sample({
    clock: setHealthGroupFx.failData,
    fn: (err) => ({
        message: getPeErrorMsg(err, 'Не удалось добавить группу здоровья'),
        type: 'failure' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: setHealthGroupFx.doneData,
    fn: () => ({
        message: 'Группа здоровья добавлена',
        type: 'success' as const,
        time: 3000,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const events = {
    setHealthGroup,
}

export const effects = {
    setHealthGroupFx,
}

export const stores = {
    pendingSetHealthGroup: $pendingSetHealthGroup,
}

import { pERequest } from '@shared/api/config/pe-config'
import { createEffect, createEvent, sample } from 'effector'
import { modalModel } from 'widgets/modal/model'
import { AssignCurator } from './types'
import { getAssignCuratorToGroup } from './utils'
import { combineEvents } from 'patronum'
import { assignVisitValue, assignVisitValueFx } from '../assign-visit-value/model'
import { popUpMessageModel } from '@entities/pop-up-message'
export const assignCurator = createEvent<AssignCurator>()

const assignCuratorFx = createEffect(async ({ groupName, teacherGuid }: AssignCurator) => {
    return await pERequest(getAssignCuratorToGroup({ groupName, teacherGuid }))
})

sample({ clock: assignCurator, target: assignCuratorFx })
sample({ clock: assignCurator, target: assignVisitValue })

sample({
    clock: assignCuratorFx.failData,
    fn: () => {
        return {
            message: 'Не удалось назначить куратора',
            type: 'failure' as const,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: assignCuratorFx.doneData,
    fn: () => {
        return {
            message: 'Куратор назначен',
            type: 'success' as const,
            time: 3000,
        }
    },
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: combineEvents({ events: [assignCuratorFx.doneData, assignVisitValueFx.doneData] }),
    target: modalModel.events.close,
})

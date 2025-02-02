import { sample } from 'effector'

import { projectActivitesApi } from '@shared/api'
import { createDefaultStore } from '@shared/effector/create-default-store'
import { tutorialModel } from '@shared/tutorial'

export const projectActivitesModel = createDefaultStore({
    api: {
        get: projectActivitesApi.get,
    },
})

sample({
    clock: projectActivitesModel.store,
    source: tutorialModel.stores.roles,
    filter: (roles) => !roles.includes('has PA last semester'),
    fn: (roles, pa) =>
        pa.data?.last_semestr_result !== 'Данные отсутствуют'
            ? ([...roles, 'has PA last semester'] as const)
            : roles.filter((role) => role !== 'has PA last semester'),
    target: tutorialModel.stores.roles,
})

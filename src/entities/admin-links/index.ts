import { sample } from 'effector'

import { adminLinksApi } from '@shared/api'
import { createDefaultStore } from '@shared/effector/create-default-store'
import { userModel } from '@shared/session'

export const adminLinksModel = createDefaultStore({
    api: {
        get: adminLinksApi.get,
    },
})

sample({
    clock: userModel.events.authenticated,
    source: userModel.stores.userRole,
    filter: (role) => role === 'staff',
    target: adminLinksModel.effects.getFx,
})

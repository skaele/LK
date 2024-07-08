import { contactInfoActualizationApi } from '@api'
import { createFormStore } from 'shared/effector/create-form-store'

export const { effects, events, stores } = createFormStore({
    defaultStore: null,
    api: {
        get: contactInfoActualizationApi.get,
        post: contactInfoActualizationApi.post,
    },
})

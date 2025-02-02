import { createFormStore } from '@entities/applications/lib/create-form-store'

import { contactInfoActualizationApi } from '@shared/api'

export const { effects, events, selectors } = createFormStore({
    defaultStore: {
        completed: false,
        error: null,
        loading: true,
        data: null,
    },
    api: {
        get: contactInfoActualizationApi.get,
        post: contactInfoActualizationApi.post,
    },
})

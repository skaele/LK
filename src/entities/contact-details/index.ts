import { createFormStore } from '@entities/applications/lib/create-form-store'

import { contactDetailsApi } from '@shared/api'

export const contactDetailsModel = createFormStore({
    defaultStore: {
        completed: false,
        error: null,
        loading: true,
        data: null,
    },
    api: {
        get: contactDetailsApi.get,
        post: contactDetailsApi.post,
    },
})

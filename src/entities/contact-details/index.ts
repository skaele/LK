import { contactDetailsApi } from '@shared/api'
import { createFormStore } from '@shared/effector/create-form-store'

export const contactDetailsModel = createFormStore({
    defaultStore: null,
    api: {
        get: contactDetailsApi.get,
        post: contactDetailsApi.post,
    },
})

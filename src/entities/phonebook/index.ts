import { phonebookApi } from '@api'
import { createFormStore } from '@shared/effector/create-form-store'

export const phonebookModel = createFormStore({
    defaultStore: {
        completed: false,
        error: null,
        loading: true,
        data: null,
    },
    api: {
        get: phonebookApi.get,
        post: phonebookApi.post,
    },
})

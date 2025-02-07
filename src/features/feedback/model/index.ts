import { createFormStore } from '@entities/applications/lib/create-form-store'

import { feedbackApi } from '@shared/api'
import { Feedback, FormFeedback } from '@shared/api/model/feedback'

export const { effects, events, selectors } = createFormStore<Feedback, FormFeedback>({
    defaultStore: {
        completed: false,
        error: null,
        loading: false,
        data: null,
    },
    api: {
        get: feedbackApi.get,
        post: feedbackApi.post,
    },
})

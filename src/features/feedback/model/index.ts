import { feedbackApi } from '@api'
import { Feedback, FormFeedback } from '@api/model/feedback'
import { createFormStore } from 'shared/effector/create-form-store'

export const { effects, events, stores } = createFormStore<Feedback, FormFeedback>({
    defaultStore: null,
    api: {
        get: feedbackApi.get,
        post: feedbackApi.post,
    },
})

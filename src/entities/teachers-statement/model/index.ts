import { createFormStore } from '@entities/applications/lib/create-form-store'

import { teacherStatementApi } from '@shared/api'
import { UserApplication } from '@shared/api/model'

export const { effects, events, selectors } = createFormStore<UserApplication, UserApplication>({
    defaultStore: {
        completed: false,
        error: null,
        loading: true,
        data: null,
    },
    api: {
        get: teacherStatementApi.get,
        post: teacherStatementApi.post,
    },
})

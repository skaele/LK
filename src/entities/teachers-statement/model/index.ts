import { teacherStatementApi } from '@api'
import { UserApplication } from '@api/model'
import { createFormStore } from 'shared/effector/create-form-store'

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

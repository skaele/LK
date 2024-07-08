import { teacherStatementApi } from '@api'
import { createFormStore } from 'shared/effector/create-form-store'
import { UserApplication } from '@api/model'

export const { effects, events, stores } = createFormStore<UserApplication, UserApplication>({
    defaultStore: null,
    api: {
        get: teacherStatementApi.get,
        post: teacherStatementApi.post,
    },
})

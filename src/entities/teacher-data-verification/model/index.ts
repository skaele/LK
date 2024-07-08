import { teacherDataVerificationApi } from '@api'
import { TeacherDataVerification } from '@api/model'
import { userModel } from '@entities/user'
import { createEffect, createStore, createEvent, sample } from 'effector'

const postTeacherDataVerification = createEvent<TeacherDataVerification>()
const changeCompleted = createEvent<{ completed: boolean }>()

const postTeacherDataVerificationFx = createEffect(async (postData: TeacherDataVerification): Promise<void> => {
    try {
        const response = await teacherDataVerificationApi.post(postData)

        return response.data
    } catch (error) {
        throw new Error('Не удалось загрузить раздел')
    }
})

sample({ clock: postTeacherDataVerification, target: postTeacherDataVerificationFx })

const getTeacherDataVerificationFx = createEffect(async (): Promise<TeacherDataVerification> => {
    try {
        const response = await teacherDataVerificationApi.get()

        return response.data
    } catch (error) {
        throw new Error('Не удалось войти')
    }
})

const $teacherDataVerification = createStore<TeacherDataVerification | null>(null)
    .on(getTeacherDataVerificationFx.doneData, (_, newData) => newData)
    .reset(userModel.stores.userGuid)

const $error = createStore<string | null>(null)
    .on(getTeacherDataVerificationFx, () => null)
    .on(getTeacherDataVerificationFx.failData, (_, { message }) => message)
    .reset(userModel.stores.userGuid)

const $completed = createStore<boolean>(false)
    .on(changeCompleted, (oldData, { completed }) => completed)
    .reset(userModel.stores.userGuid)

export const stores = {
    data: $teacherDataVerification,
    loading: getTeacherDataVerificationFx.pending,
    error: $error,
    completed: $completed,
}

export const effects = {
    getTeacherDataVerificationFx,
}

export const events = {
    postTeacherDataVerification,
    changeCompleted,
}

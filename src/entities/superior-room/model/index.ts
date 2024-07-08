import { superiorRoomApi } from '@api'
import { SuperiorRoom } from '@api/model'
import { userModel } from '@entities/user'
import { createEffect, createStore, createEvent, sample } from 'effector'

const postSuperiorRoom = createEvent<SuperiorRoom>()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const postSuperiorRoomFx = createEffect(async (postData: SuperiorRoom): Promise<void> => {
    try {
        //   const response = await superiorRoomApi.post(postData)
    } catch (error) {
        throw new Error('Не удалось загрузить раздел')
    }
})

sample({ clock: postSuperiorRoom, target: postSuperiorRoomFx })

const getSuperiorRoomFx = createEffect(async (): Promise<SuperiorRoom> => {
    try {
        const response = await superiorRoomApi.get()

        return response.data
    } catch (error) {
        throw new Error('Не удалось загрузить раздел')
    }
})

const $superiorRoomStore = createStore<SuperiorRoom | null>(null)
    .on(getSuperiorRoomFx.doneData, (_, newData) => newData)
    .reset(userModel.stores.userGuid)

const $error = createStore<string | null>(null)
    .on(getSuperiorRoomFx, () => null)
    .on(getSuperiorRoomFx.failData, (_, { message }) => message)
    .reset(userModel.stores.userGuid)

export const stores = {
    data: $superiorRoomStore,
    loading: getSuperiorRoomFx.pending,
    error: $error,
}

export const effects = {
    getSuperiorRoomFx,
}
export const events = {
    postSuperiorRoom,
}

import { userModel } from '@entities/user'

import { attach, createEvent, createStore, restore, sample } from 'effector'

import { peApi } from '@shared/api'

const load = createEvent()

const loadFx = attach({
    effect: async ({ currentUser }) => {
        const { data } = await peApi.getTeacher(currentUser?.guid ?? '')

        return { ...data.data, id: currentUser?.guid ?? '' }
    },
    source: userModel.stores.user,
})

const $peTeacher = restore(loadFx, null)
const $unavailable = createStore(false)
    .on(loadFx.fail, () => true)
    .reset(loadFx.done)

sample({ clock: load, target: loadFx })

const $isLoading = loadFx.pending

export const events = {
    load,
}

export const stores = {
    peTeacher: $peTeacher,
    isLoading: $isLoading,
    unavailable: $unavailable,
}

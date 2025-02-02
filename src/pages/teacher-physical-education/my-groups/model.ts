import { attach, createEvent, createStore, sample } from 'effector'

import { peApi } from '@shared/api'
import { Group } from '@shared/api/physical-education'
import { userModel } from '@shared/session'

const load = createEvent()

const loadFx = attach({
    effect: async (currentUser) => {
        const { data } = await peApi.getCuratorGroups(currentUser?.guid ?? '')

        return data.data
    },
    source: userModel.stores.user,
})

sample({ clock: load, target: loadFx })

const $myGroups = createStore<Group[]>([]).on(loadFx.doneData, (_, data) => data)

export { $myGroups, load }

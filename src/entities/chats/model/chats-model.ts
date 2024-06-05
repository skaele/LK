import { createQuery } from '@farfetched/core'
import { createEvent, sample } from 'effector'
import { getAllChats } from '../api'

const load = createEvent()

const chatQuery = createQuery({
    handler: async () => {
        const { data } = await getAllChats()

        return data
    },
})

// cache(chatQuery, {
//     adapter: sessionStorageCache(),
//     staleAfter: '1min',
// })

sample({ clock: load, target: chatQuery.start })

// TODO: add reset
// sample({ clock: userModel.stores.userGuid, target: chatQuery.reset })

export const queries = {
    chat: chatQuery,
}

export const events = {
    load,
}

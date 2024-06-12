import { userModel } from '@entities/user'
import { cache, concurrency, createQuery, inMemoryCache } from '@farfetched/core'
import { createEvent, sample } from 'effector'
import { getAllChats } from '../api'

const load = createEvent()

const chatsQuery = createQuery({
    handler: async () => {
        const { data } = await getAllChats()

        return data
    },
    name: 'chatsQuery',
})

// retry(chatsQuery, { times: 3, delay: exponentialDelay(500) })
concurrency(chatsQuery, { strategy: 'TAKE_LATEST' })

// TODO: add caching on chats get and messages get
cache(chatsQuery, {
    adapter: inMemoryCache({ maxEntries: 300 }),
    staleAfter: '15sec',
    purge: userModel.events.logout,
})

// doesnt work because file loaded lazy
// sample({
//     clock: userModel.stores.user,
//     filter: (user) => !!user.currentUser,
//     target: load,
// })

sample({ clock: load, target: chatsQuery.refresh })

sample({ clock: userModel.stores.userGuid, target: chatsQuery.reset })

export const queries = {
    chats: chatsQuery,
}

export const events = {
    load,
}

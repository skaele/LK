import { userModel } from '@entities/user'
import { cache, concurrency, createQuery, onAbort, sessionStorageCache } from '@farfetched/core'
import { createEvent, createStore, sample } from 'effector'
import { interval } from 'patronum'
import { getAllChats } from '../api'
import { pageVisibility } from '@shared/models/window-focus'

const load = createEvent()

// TODO
// сейчас много костылей, потому что фф странно работает с кешами и не перезапрашивает данные при протухшем кеше, позже попробовать поднять версию и убрать
//  interval и isFirstFetched

const chatsQuery = createQuery({
    handler: async () => {
        const abortController = new AbortController()

        onAbort(() => {
            abortController.abort()
        })

        let attempts = 0
        // По этому эндпоинту часто срабатывавает Anti-DDoS защита, API отадает ответ, но обрезает его
        while (attempts < 3) {
            const { data } = await getAllChats(abortController.signal)
            const isDataCorrupted = !data?.map
            if (data && !isDataCorrupted) return data

            attempts++
        }

        throw new Error('Не удалось загрузить чаты')
    },
    name: 'chatsQuery',
    enabled: pageVisibility.$visible,
})

const $isFirstFetched = createStore<boolean>(false).on(chatsQuery.$succeeded, (curr, success) => {
    if (!curr) return success

    return curr
})

sample({ clock: userModel.stores.userGuid, target: $isFirstFetched.reinit })

concurrency(chatsQuery, { strategy: 'TAKE_LATEST' })

cache(chatsQuery, {
    adapter: sessionStorageCache({ maxEntries: 10, maxAge: '60sec' }),
    purge: userModel.events.logout,
})

const { tick } = interval({
    timeout: 60000,
    start: load,
    stop: userModel.events.logout,
})

sample({ clock: tick, target: chatsQuery.start })

sample({
    clock: userModel.stores.user,
    filter: (user) => !!user.currentUser,
    target: load,
})

sample({ clock: load, target: chatsQuery.refresh })

sample({ clock: userModel.stores.userGuid, target: chatsQuery.reset })

export const queries = {
    chats: chatsQuery,
}

export const events = {
    load,
}

export const stores = {
    isFirstFetched: $isFirstFetched,
}

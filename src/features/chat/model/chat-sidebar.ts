import { chatsModel } from '@entities/chats'
import { combine, createEvent, createStore } from 'effector'
import searchChats from '../lib/search-chats'

const setSearch = createEvent<string>()

const $search = createStore('').on(setSearch, (_, value) => value)
const $foundChats = combine(chatsModel.queries.chats.$data, $search, (chats, search) => {
    if (!search || !chats) return chats

    return searchChats({ search, chats })
})

export const events = {
    setSearch,
}

export const stores = {
    search: $search,
    foundChats: $foundChats,
}

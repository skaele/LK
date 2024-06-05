import { chatsModel } from '@entities/chats'
import { combine, createEvent, createStore } from 'effector'
import searchChats from '../lib/search-chats'

const toggle = createEvent()
const setSearch = createEvent<string>()

const $search = createStore('').on(setSearch, (_, value) => value)
const $foundChats = combine(chatsModel.queries.chat.$data, $search, (chats, search) => {
    if (!search || !chats) return chats

    return searchChats({ search, chats })
})

const $isOpen = createStore<boolean>(true).on(toggle, (state) => !state)

export const events = {
    toggle,
    setSearch,
}

export const stores = {
    isOpen: $isOpen,
    search: $search,
    foundChats: $foundChats,
}

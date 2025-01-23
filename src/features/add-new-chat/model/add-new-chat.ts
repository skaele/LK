import { createEvent, createStore } from 'effector'

import { SearchType } from '../type'

const setSearchMode = createEvent<SearchType | null>()

const $searchMode = createStore<SearchType | null>(null).on(setSearchMode, (_, mode) => mode)

export const stores = {
    searchMode: $searchMode,
}

export const events = {
    setSearchMode,
}

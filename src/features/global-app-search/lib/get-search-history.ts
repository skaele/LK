import { BrowserStorageKey } from '@shared/consts/browser-storage-key'

const getSearchHistory = () => JSON.parse(localStorage.getItem(BrowserStorageKey.SearchHistory) ?? '[]') as string[]

export default getSearchHistory

import { BrowserStorageKey } from '@shared/consts/browser-storage-key'

export default function getToken() {
    return localStorage.getItem(BrowserStorageKey.Token) ?? sessionStorage.getItem(BrowserStorageKey.Token) ?? ''
}

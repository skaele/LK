import { BrowserStorageKey } from '@shared/consts/browser-storage-key'

export const getSettingsKey = (userId: string) => {
    return `${BrowserStorageKey.Settings}-${userId}`
}

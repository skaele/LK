import { BrowserStorageKey } from '@shared/constants/browser-storage-key'

export const getSettingsKey = (userId: string) => {
    return `${BrowserStorageKey.Settings}-${userId}`
}

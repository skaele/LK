import { BrowserStorageKey } from '@shared/consts/browser-storage-key'
import { userModel } from '@shared/session'

export const releaseClear = () => {
    const currentVersion = '0.0.1'

    // Check if the browser has an older version stored in local storage
    const storedVersion = localStorage.getItem(BrowserStorageKey.Version)
    if (storedVersion !== currentVersion) {
        // Clear any stale data from previous versions
        localStorage.clear()

        // Store the new version number for next time
        localStorage.setItem(BrowserStorageKey.Version, currentVersion)

        userModel.events.logout()
    }
}

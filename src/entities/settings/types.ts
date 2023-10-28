import { ThemeVariant } from '@shared/constants'

// TODO: split to separate types after approval
export type UserSettings = {
    appearance: {
        theme: ThemeVariant
    }
    customizeMenu: {
        // TODO: set type as keys of paths ids
        pages: string[]
    }
    homePage: {
        pages: string[]
        hasSchedule: boolean
        hasPayment: boolean
        hasNews: boolean
    }
    notifications: {
        all: boolean
        messages: boolean
        newVersion: boolean
        schedule: boolean
        news: boolean
        applications: boolean
        doclist: boolean
    }
    // TODO: what is it?
    // personal: {}
}

export type UsersSettings = {
    [userId: string]: UserSettings
}

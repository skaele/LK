import * as z from 'zod'

import { ThemeVariant } from '@shared/constants'

export const UserSettingsSchema = z.object({
    appearance: z.object({
        theme: z.enum([ThemeVariant.Light, ThemeVariant.Dark]),
    }),
    customizeMenu: z.object({
        pages: z.array(z.string()),
    }),
    homePage: z.object({
        pages: z.array(z.string()),
        hasSchedule: z.boolean(),
        hasPayment: z.boolean(),
        hasNews: z.boolean(),
    }),
    notifications: z.object({
        all: z.boolean(),
        messages: z.boolean(),
        newVersion: z.boolean(),
        schedule: z.boolean(),
        news: z.boolean(),
        applications: z.boolean(),
        doclist: z.boolean(),
    }),
    syncAcrossAllDevices: z.boolean(),
})

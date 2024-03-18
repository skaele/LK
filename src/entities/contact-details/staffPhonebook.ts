import { createStore } from 'effector'

type StaffPhonebook = {
    phone: string
    email: string
} | null

export const staffPhonebookModel = createStore<StaffPhonebook>(null)

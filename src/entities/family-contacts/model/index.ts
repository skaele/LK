import { createQuery } from '@farfetched/core'
import { getFamilyContacts } from '@shared/api/family-contacts-api'
import { createEvent, sample } from 'effector'

const getContacts = createEvent()

const getFamilyContactsQuery = createQuery({
    handler: getFamilyContacts,
})

sample({
    clock: getContacts,
    target: getFamilyContactsQuery.start,
})

export const stores = {
    contacts: getFamilyContactsQuery.$data,
}

export const events = {
    getContacts,
}

import { createQuery } from '@farfetched/core'
import { createEvent, createStore, sample } from 'effector'

import { popUpMessageModel } from '@entities/pop-up-message'

import { FamilyContacts, getFamilyContacts, saveFamilyContacts } from '@shared/api/family-contacts-api'

const getContacts = createEvent()
const saveContacts = createEvent<FamilyContacts>()
const formCompleted = createEvent<boolean>()

const $completed = createStore<boolean>(false).on(formCompleted, (_, completed) => completed)

const getFamilyContactsQuery = createQuery({
    handler: getFamilyContacts,
})

const saveFamilyContactsMutation = createQuery({
    handler: saveFamilyContacts,
})

sample({
    clock: getContacts,
    target: getFamilyContactsQuery.start,
})

sample({
    clock: saveContacts,
    target: saveFamilyContactsMutation.start,
})

sample({
    clock: saveFamilyContactsMutation.$succeeded,
    fn: () => ({
        message: 'Данные успешно сохранены',
        type: 'success' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: saveFamilyContactsMutation.$succeeded,
    target: formCompleted,
})

sample({
    clock: saveFamilyContactsMutation.$failed,
    fn: () => ({
        message: 'Не удалось сохранить данные. Попробуйте еще раз',
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const stores = {
    contacts: getFamilyContactsQuery.$data,
    completed: $completed,
    loading: getFamilyContactsQuery.$pending,
}

export const events = {
    getContacts,
    saveContacts,
    formCompleted,
}

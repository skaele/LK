import { applicationsModel } from '@entities/applications'
import { popUpMessageModel } from '@entities/pop-up-message'
import { createMutation } from '@farfetched/core'
import { SelectPage } from '@features/select'
import { postTechnicalMaintenance, TechnicalMaintenance } from '@shared/api/technical-maintenance-api'
import { createEvent, createStore, sample } from 'effector'

const pageMounted = createEvent()
const sendForm = createEvent()
const setFiles = createEvent<File[]>()
const setName = createEvent<string>()
const setPhone = createEvent<string>()
const setEmail = createEvent<string>()
const setNote = createEvent<string>()
const setStack = createEvent<SelectPage | null>()
const setLocation = createEvent<SelectPage | null>()

const $files = createStore<File[]>([])
    .on(setFiles, (_, files) => files)
    .reset(pageMounted)
const $note = createStore('')
    .on(setNote, (_, note) => note)
    .reset(pageMounted)
const $name = createStore('')
    .on(setName, (_, name) => name)
    .on(applicationsModel.stores.applications, (_, { dataUserApplication }) => {
        if (!dataUserApplication) return ''
        const { name, surname, patronymic } = dataUserApplication
        return `${name} ${surname} ${patronymic}`
    })
    .reset(pageMounted)
const $phone = createStore('')
    .on(setPhone, (_, phone) => phone)
    .on(applicationsModel.stores.applications, (_, { dataUserApplication }) => dataUserApplication?.phone ?? '')
const $email = createStore('')
    .on(setEmail, (_, email) => email)
    .on(applicationsModel.stores.applications, (_, { dataUserApplication }) => dataUserApplication?.email ?? '')
const $stack = createStore<SelectPage | null>(null)
    .on(setStack, (_, stack) => stack)
    .reset(pageMounted)
const $location = createStore<SelectPage | null>(null)
    .on(setLocation, (_, location) => location)
    .reset(pageMounted)
const $applicationNumber = createStore('').reset(pageMounted)

const sendFormMutation = createMutation({
    handler: postTechnicalMaintenance,
})

sample({
    clock: pageMounted,
    target: [sendFormMutation.reset, applicationsModel.effects.getUserDataApplicationsFx],
})
sample({
    clock: sendForm,
    source: {
        files: $files,
        name: $name,
        phone: $phone,
        email: $email,
        note: $note,
        stack: $stack,
        location: $location,
    },
    fn: ({ files, name, phone, email, note, stack, location }) =>
        ({
            files,
            name,
            phone,
            email,
            note,
            stack,
            location,
        } as TechnicalMaintenance),
    target: sendFormMutation.start,
})

sample({
    clock: sendFormMutation.finished.success,
    fn: ({ result }) => result.applicationNumber,
    target: $applicationNumber,
})

sample({
    clock: sendFormMutation.$failed,
    fn: () => ({
        message: 'Произошла ошибка. Попробуйте позднее',
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const events = { pageMounted, setFiles, setName, setPhone, setEmail, setNote, setStack, setLocation, sendForm }

export const stores = {
    files: $files,
    note: $note,
    name: $name,
    phone: $phone,
    email: $email,
    stack: $stack,
    location: $location,
    loading: sendFormMutation.$pending,
    done: sendFormMutation.$succeeded,
    applicationNumber: $applicationNumber,
}

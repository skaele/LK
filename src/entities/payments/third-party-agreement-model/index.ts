import { popUpMessageModel } from '@entities/pop-up-message'
import { createMutation } from '@farfetched/core'
import { SendAgreementCodesReq, sendAgreementCodesApi, signThirdPartyAgreementApi } from '@shared/api/payment-api'
import axios from 'axios'
import { createEffect, createEvent, createStore, sample } from 'effector'
type Emails = { clientEmail: string; userEmail: string }

const signStarted = createEvent()
const emailsApproved = createEvent<Emails>()
const enterPasses = createEvent()
const signAgreement = createEvent<Parameters<typeof signThirdPartyAgreementApi>[0]>()
const sendCodes = createEvent<SendAgreementCodesReq>()
const activateSignButton = createEvent()
const goBack = createEvent()

const checkEmails = createEffect(async ({ clientEmail, userEmail }: Emails) => {
    if (!clientEmail || !userEmail)
        throw new Error('Один из адресов e-mail пуст, введите адрес, затем подтвердите адреса')
    if (clientEmail === userEmail) throw new Error('E-mail адреса не должны совпадать')
    return { clientEmail, userEmail }
})

const $step = createStore(0)
    .on(signStarted, (state) => state + 1)
    .on(goBack, (state) => state - 1)
const $userEmail = createStore('')
const $clientEmail = createStore('')
const $signButtonActive = createStore(false).on(activateSignButton, () => true)

sample({
    clock: signStarted,
    fn: () => 0,
    target: $step,
})

sample({
    clock: emailsApproved,
    target: checkEmails,
})

sample({
    clock: checkEmails.doneData,
    fn: ({ clientEmail }) => clientEmail,
    target: $clientEmail,
})
sample({
    clock: checkEmails.doneData,
    fn: ({ userEmail }) => userEmail,
    target: $userEmail,
})
sample({
    clock: checkEmails.done,
    fn: () => 1,
    target: $step,
})
sample({
    clock: checkEmails.fail,
    fn: ({ error }) => ({
        message: error.message,
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: enterPasses,
    fn: () => 2,
    target: $step,
})

export const sendAgreementCodesMutation = createMutation({
    handler: sendAgreementCodesApi,
})
sample({
    clock: sendCodes,
    target: sendAgreementCodesMutation.start,
})
sample({
    clock: sendAgreementCodesMutation.$succeeded,
    fn: () => ({
        message: 'Пароли для подписания ЭЦП 3-х-сторонних доп.соглашений высланы на указанные адреса e-mail',
        type: 'success' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})
sample({
    clock: sendAgreementCodesMutation.$succeeded,
    target: activateSignButton,
})
sample({
    clock: sendAgreementCodesMutation.finished.failure,
    fn: ({ error }) => ({
        message: axios.isAxiosError(error)
            ? 'Не удалось отправить коды для подписания соглашения.'
            : 'Не удалось отправить коды для подписания соглашения. ' + (error as Error).message,
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const signThirdPartyAgreementMutation = createMutation({
    handler: signThirdPartyAgreementApi,
})
sample({
    clock: signAgreement,
    target: signThirdPartyAgreementMutation.start,
})
sample({
    clock: signThirdPartyAgreementMutation.$succeeded,
    fn: () => ({ message: 'Доп.соглашение подписано', type: 'success' as const }),
    target: popUpMessageModel.events.evokePopUpMessage,
})
sample({
    clock: signThirdPartyAgreementMutation.finished.failure,
    fn: ({ error }) => ({
        message: axios.isAxiosError(error)
            ? 'Один из паролей не введён или не совпадает с высланным, откорректируйте пароли'
            : 'Не удалось подписать соглашение: ' + (error as Error).message,
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const events = {
    signStarted,
    emailsApproved,
    sendCodes,
    signAgreement,
    enterPasses,
    goBack,
}

export const stores = {
    step: $step,
    userEmail: $userEmail,
    clientEmail: $clientEmail,
    signButtonActive: $signButtonActive,
}

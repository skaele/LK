import { electronicInteractionModel } from '@entities/electronic-interaction'
import { createMutation } from '@farfetched/core'
import {
    SendElectronicInteractionCodes,
    SignThirdPartyElectronicInteraction,
    sendElectroincInteractionCodes,
    signThirdPartyElectronicInteraction,
} from '@shared/api/payment-api'
import { createEvent, createStore, sample } from 'effector'

const sendCodes = createEvent<SendElectronicInteractionCodes>()
const signAgreement = createEvent<SignThirdPartyElectronicInteraction>()
const $agreement = electronicInteractionModel.stores.$electronicInteractionStore.map((data) =>
    data?.clients.length ? data.clients[0].status : null,
)
const $step = createStore<number>(0)

const sendCodesMutation = createMutation({
    handler: sendElectroincInteractionCodes,
})
const signAgreementMutation = createMutation({
    handler: signThirdPartyElectronicInteraction,
})

sample({
    clock: sendCodes,
    target: sendCodesMutation.start,
})
sample({
    clock: signAgreement,
    target: signAgreementMutation.start,
})

sample({
    clock: sendCodesMutation.$succeeded,
    target: electronicInteractionModel.events.getElectronicInteraction,
})

export const events = {
    sendCodes,
    signAgreement,
}

export const stores = {
    step: $step,
    thirdPartyInteractionAgreement: $agreement,
}

export const mutations = {
    sendCodes: sendCodesMutation,
    signAgreement: signAgreementMutation,
}

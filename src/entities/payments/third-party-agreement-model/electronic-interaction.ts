import { createStore } from 'effector'

const $thirdPartyInteractionAgreement = createStore(false)
const $step = createStore<number>(0)

export const stores = {
    step: $step,
    thirdPartyInteractionAgreement: $thirdPartyInteractionAgreement,
}

import { combine, createEffect, createEvent, createStore, sample } from 'effector'

import { paymentApi } from '@shared/api'
import { Payments, PaymentsContract } from '@shared/api/model'
import { agreementSubmit } from '@shared/api/payment-api'
import { MessageType } from '@shared/consts'
import { userModel } from '@shared/session'
import { tutorialModel } from '@shared/tutorial'
import { popUpMessageModel } from '@shared/ui/pop-up-message'

import changeCanSign from '../lib/change-can-sign'

const filterContractsWithDebt = (contracts: PaymentsContract[]) =>
    contracts.filter((contarct) => Number(contarct.balance_currdate) > 0)

const filterContractsWithoutDebt = (contracts: PaymentsContract[]) =>
    contracts.filter(
        (contract) =>
            Number(contract.balance_currdate) <= 0 &&
            (!contract.endDateFact || new Date(contract.endDateFact).getTime() > Date.now()),
    )

const signAgreement = createEvent<string>()
const setCompleted = createEvent<boolean>()

const getPaymentsFx = createEffect(async (): Promise<Payments> => {
    const response = await paymentApi.get()
    if (!response.data.contracts.education && !response.data.contracts.dormitory)
        throw new Error('У вас нет данных по оплате')
    try {
        return response.data.contracts
    } catch (_) {
        throw new Error('Не удалось загрузить оплату')
    }
})

const signContractFx = createEffect(async (contractId: string) => {
    try {
        await paymentApi.signContract(contractId)
        return contractId
    } catch (error) {
        throw new Error('Не удалось подписать конкракт. Причина: ' + error)
    }
})

const signAgreementFx = createEffect(async (id: string) => {
    const response = await agreementSubmit(id)
    if (response.data[0].result !== 'ok') throw new Error()
})

sample({
    clock: signAgreementFx.doneData,
    fn: () => ({ message: 'Успешно подписано', type: 'success' as MessageType }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({
    clock: signAgreementFx.failData,
    fn: () => ({ message: 'У вас нет данных по оплате', type: 'failure' as MessageType }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

sample({ clock: signAgreement, target: signAgreementFx })

const getPayments = createEvent()

const $loading = combine(signAgreementFx.pending, getPaymentsFx.pending, Boolean)
const $completed = createStore<boolean>(false).on(setCompleted, (_, completed) => completed)
const $done = createStore<boolean>(false).on(signAgreementFx.doneData, () => true)
const $error = createStore<string | null>(null)
    .on(getPaymentsFx, () => null)
    .on(getPaymentsFx.failData, (_, newData) => newData.message)
    .on(signContractFx.failData, (_, newData) => newData.message)
const $paymentsStore = createStore<Payments | null>(null)
    .on(getPaymentsFx.doneData, (_, newData) => newData)
    .on(signContractFx.doneData, (oldData, contractId) => changeCanSign(oldData, contractId, false))
    .on(userModel.stores.userGuid, () => null)

const $contractsWithDebtDorm = $paymentsStore.map((payments) => filterContractsWithDebt(payments?.dormitory || []))
const $contractsWithoutDebtDorm = $paymentsStore.map((payments) =>
    filterContractsWithoutDebt(payments?.dormitory || []),
)
const $contractsWithDebtEdu = $paymentsStore.map((payments) => filterContractsWithDebt(payments?.education || []))
const $contractsWithoutDebtEdu = $paymentsStore.map((payments) => filterContractsWithoutDebt(payments?.education || []))
const $combinedDormLength = combine($contractsWithDebtDorm, $contractsWithoutDebtDorm, (a, b) => a.length + b.length)
const $combinedEduLength = combine($contractsWithDebtEdu, $contractsWithoutDebtEdu, (a, b) => a.length + b.length)

const $paymentType = combine($combinedDormLength, $combinedEduLength, (combinedDormLength, combinedEduLength) =>
    !!combinedDormLength && !!combinedEduLength
        ? 'both'
        : !!combinedDormLength
          ? 'dormitory'
          : !!combinedEduLength
            ? 'education'
            : 'none',
)

sample({
    clock: getPaymentsFx.doneData,
    source: tutorialModel.stores.roles,
    fn: (oldRoles, { dormitory, education }) => {
        const roles = [...oldRoles]
        if (dormitory.length && !roles.includes('dormitory')) roles.push('dormitory')
        if (education.length && !roles.includes('education')) roles.push('education')
        return roles
    },
    target: tutorialModel.events.setRoles,
})

export const stores = {
    $loading,
    $completed,
    $done,
    $error,
    $paymentsStore,
    contractsWithDebtDorm: $contractsWithDebtDorm,
    contractsWithoutDebtDorm: $contractsWithoutDebtDorm,
    contractsWithDebtEdu: $contractsWithDebtEdu,
    contractsWithoutDebtEdu: $contractsWithoutDebtEdu,
    combinedDormLength: $combinedDormLength,
    combinedEduLength: $combinedEduLength,
    paymentType: $paymentType,
}

sample({
    clock: getPayments,
    target: getPaymentsFx,
})

export const effects = {
    getPaymentsFx,
    signContractFx,
}

export const events = {
    signAgreement,
    setCompleted,
    getPayments,
}

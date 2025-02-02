import { $api } from '@shared/api/config'
import token from '@shared/lib/token'

import { LoadPayments } from './model'

export type SendAgreementCodesReq = {
    agreementId: string
    userEmail: string
    clientEmail: string
}

export type SignAgreementReq = {
    agreementId: string
    userPass: string
    clientPass: string
}

export const get = () => {
    return $api.get<LoadPayments>(`?getPayments&token=${token()}`)
}

export const agreementSubmit = (id: string) => {
    return $api.get(`?signAgreement=${id}&token=${token()}`)
}

export const signContract = (contractId: string) => {
    return $api.get(`?signContract=${contractId}&token=${token()}`)
}

export const sendAgreementCodesApi = async ({ agreementId, userEmail, clientEmail }: SendAgreementCodesReq) => {
    const formData = new FormData()
    formData.append('guid_agreement', agreementId)
    formData.append('email_student', userEmail)
    formData.append('email_client', clientEmail)
    const { data } = await $api.post(`?mailCode4Agreement=1&token=${token()}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

    if (data.result !== 'ok') throw new Error(data.error_text)
    return data
}

export const signThirdPartyAgreementApi = async ({ agreementId, userPass, clientPass }: SignAgreementReq) => {
    const { data } = await $api.get(
        `?signAgreement=${agreementId}&token=${token()}&pass_student=${userPass}&pass_client=${clientPass}`,
    )

    if (data[0].result !== 'ok') throw new Error(data[0].error_text)
    return data
}
export type SendElectronicInteractionCodes = {
    clientGuid: string
    clientEmail: string
}

export const sendElectroincInteractionCodes = async ({ clientGuid, clientEmail }: SendElectronicInteractionCodes) => {
    const formData = new FormData()
    formData.append('guid_client', clientGuid)
    formData.append('email_client', clientEmail)
    const { data } = await $api.post(`?mailCode4Client=1&token=${token()}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })

    if (data.result !== 'ok') throw new Error(data.error_text)
    return data
}
export type SignThirdPartyElectronicInteraction = {
    clientGuid: string
    clientPass: string
}
export const signThirdPartyElectronicInteraction = async ({
    clientGuid,
    clientPass,
}: SignThirdPartyElectronicInteraction) => {
    const { data } = await $api.get(
        `?setPEPAcceptClient&client_guid=${clientGuid}&client_pass=${clientPass}&token=${token()}`,
    )

    if (data[0].result !== 'ok') throw new Error(data[0].error_text)
    return data
}

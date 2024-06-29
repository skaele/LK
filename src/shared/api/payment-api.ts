import { $api } from '@api/config'
import token from '@utils/token'
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
    const { data } = await $api.post(`?mailCode4Agreement=1&token=${token()}`, {
        guid_agreement: agreementId,
        email_student: userEmail,
        email_client: clientEmail,
    })

    if (data.result !== 'ok') throw new Error(data.error_text)
    return data
}

export const signThirdPartyAgreementApi = async ({ agreementId, userPass, clientPass }: SignAgreementReq) => {
    const { data } = await $api.get(
        `?signAgreement=${agreementId}&token=${token()}&pass_student=${userPass}&pass_client=${clientPass}`,
    )

    if (data.result !== 'ok') throw new Error(data.error_text)
    return data
}

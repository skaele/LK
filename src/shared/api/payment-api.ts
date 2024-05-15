import { $api } from '@api/config'
import token from '@utils/token'
import { LoadPayments } from './model'

export const get = () => {
    return $api.get<LoadPayments>(`?getPayments&token=${token()}`)
}

export const agreementSubmit = (id: string) => {
    return $api.get(`?signAgreement=${id}&token=${token()}`)
}

export const signContract = (contractId: string) => {
    return $api.get(`?signContract=${contractId}&token=${token()}`)
}

export const sendAgreementCodesApi = async (data: {
    guid_agreement: string
    email_student: string
    email_client: string
}) => {
    const response = await $api.post(`?mailCode4Agreement=1&token=${token()}`, data)
    return response.data
}

export const signThirdPartyAgreementApi = async (params: { id: string; pass_student: string; pass_client: string }) => {
    const response = await $api.get(
        `?signAgreement=${params.id}&token=${token()}&pass_student=${params.pass_student}&pass_client=${
            params.pass_client
        }`,
    )

    if (response.data.result === 'ok') return response.data
    else throw new Error(response.data.error_text)
}

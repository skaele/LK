import { popUpMessageModel } from '@entities/pop-up-message'
import { createMutation, createQuery } from '@farfetched/core'
import { createTaxCertificate, getTaxCerts } from '@shared/api/payment-api'
import axios from 'axios'
import { createEvent, sample } from 'effector'

const pageMounted = createEvent()
const certificatedRequested = createEvent<{ year: string }>()

const createTaxCertificateMutation = createMutation({
    handler: createTaxCertificate,
})

const getTaxCertsQuery = createQuery({
    handler: getTaxCerts,
})
const $presentYears = getTaxCertsQuery.$data.map((certificates) => {
    if (!certificates) return new Set<string>()
    return new Set(certificates.map((certificate) => certificate.year))
})

sample({
    clock: pageMounted,
    target: getTaxCertsQuery.start,
})

sample({
    clock: certificatedRequested,
    target: createTaxCertificateMutation.start,
})

sample({
    clock: createTaxCertificateMutation.$succeeded,
    target: popUpMessageModel.events.evokePopUpMessage.prepend(() => ({
        message: 'Запрос отправлен',
        type: 'success',
    })),
})

sample({
    clock: createTaxCertificateMutation.finished.failure,
    fn: ({ error }) => ({
        message: axios.isAxiosError(error)
            ? 'Не удалось отправить запрос.'
            : 'Не удалось отправить запрос. ' + (error as Error).message,
        time: 6000,
        type: 'failure' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

export const taxCertificateModel = {
    pageMounted,
    certificatedRequested,
    certificates: getTaxCertsQuery.$data,
    presentYears: $presentYears,
    certificatesLoading: getTaxCertsQuery.$pending,
    createCertificateLoading: createTaxCertificateMutation.$pending,
}

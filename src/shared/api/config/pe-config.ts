import { isProduction } from '@shared/constants'
import axios from 'axios'
import { z } from 'zod'

import { addAuthHeaderToRequests, getAuthResponseInterceptor } from './utils'

const peErrorSchema = z.object({
    type: z.string(),
    detail: z.string(),
})

export const PE_URL = isProduction ? 'https://api.mospolytech.ru/physedjournal/' : 'http://docker.mospolytech.ru:5200/' // VPN is required

export const $peApi = axios.create({ baseURL: PE_URL })

$peApi.interceptors.request.use(addAuthHeaderToRequests)

$peApi.interceptors.response.use((response) => response, getAuthResponseInterceptor($peApi))

$peApi.interceptors.response.use(
    (response) => response,
    (error) => {
        const parsedError = peErrorSchema.safeParse(error.response?.data)

        return parsedError.success
            ? Promise.reject(new PeRequestError(parsedError.data.type, parsedError.data.detail))
            : Promise.reject(error)
    },
)

export class PeRequestError extends Error {
    constructor(
        public type: string,
        public detail: string,
    ) {
        super('Во время запроса произошла ошибка')
    }
}

export const getPeErrorMsg = (err: Error, fallbackMsg: string) => {
    if (err instanceof PeRequestError && err.type != 'unknown-error') {
        return err.detail
    }

    return fallbackMsg
}

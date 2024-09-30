import { OLD_LK_URL } from '@shared/constants'
import axios, { AxiosError } from 'axios'
import { addAuthHeaderToRequests, getAuthResponseInterceptor } from './utils'

export const API_BASE_URL = import.meta.env.MODE === 'development' ? '/api' : `${OLD_LK_URL}/lk_api.php`

export const $api = axios.create({ baseURL: API_BASE_URL, withCredentials: true })

export function isAxiosError(error: Error): error is AxiosError {
    return (error as AxiosError).isAxiosError
}

export class RequestError extends Error {
    constructor(public innerException: any) {
        super('Во время запроса произошла ошибка')
        if (isAxiosError(innerException)) {
            if ((innerException as AxiosError).response?.status === 500) {
                // eslint-disable-next-line no-console
                console.error({ content: 'Ошибка сервера. Не удалось выполнить действие', duration: 3 })
            }
        }
    }
}

export const createSecureApi = (url: string) => {
    const $api = axios.create({ baseURL: url })
    $api.interceptors.request.use(addAuthHeaderToRequests)

    $api.interceptors.response.use((response) => {
        return response
    }, getAuthResponseInterceptor($api))

    return $api
}

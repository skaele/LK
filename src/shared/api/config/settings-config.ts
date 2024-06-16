import axios from 'axios'
import { addAuthHeaderToRequests, getAuthResponseInterceptor } from './utils'

export const URL = 'https://api.mospolytech.ru/config'

export const $settingsApi = axios.create({ baseURL: URL })

$settingsApi.interceptors.request.use(addAuthHeaderToRequests)

$settingsApi.interceptors.response.use(async (response) => {
    if (response?.data?.errors?.[0]?.extensions?.code === 'AUTH_NOT_AUTHENTICATED') {
        return await getAuthResponseInterceptor($settingsApi)(response)
    }

    return response
}, getAuthResponseInterceptor($settingsApi))

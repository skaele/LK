import axios from 'axios'
import { addAuthHeaderToRequests, getAuthResponseInterceptor } from './utils'
import { runsLocally } from '@shared/constants'

export const TUTORIAL_URL = runsLocally
    ? 'http://localhost:8080/tutorial/api'
    : 'https://api.mospolytech.ru/tutorial/api'

export const $tutorialApi = axios.create({ baseURL: TUTORIAL_URL })

$tutorialApi.interceptors.request.use(addAuthHeaderToRequests)
$tutorialApi.interceptors.response.use(async (response) => {
    if (response?.data?.errors?.[0]?.extensions?.code === 'FST_JWT_AUTHORIZATION_TOKEN_EXPIRED') {
        return await getAuthResponseInterceptor($tutorialApi)(response)
    }

    return response
}, getAuthResponseInterceptor($tutorialApi))

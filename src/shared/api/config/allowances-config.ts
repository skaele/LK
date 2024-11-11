import axios from 'axios'
import { addAuthHeaderToRequests } from './utils'
import { isProduction } from '@shared/constants'

export const ALLOWANCES_URL = isProduction
    ? 'https://apilin.mospolytech.ru:5031/'
    : 'https://apilin.mospolytech.ru:5033/test'

export const $allowancesApi = axios.create({ baseURL: ALLOWANCES_URL })

$allowancesApi.interceptors.request.use(addAuthHeaderToRequests)

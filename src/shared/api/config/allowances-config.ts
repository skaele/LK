import axios from 'axios'
import { addAuthHeaderToRequests } from './utils'

export const ALLOWANCES_URL = 'https://apilin.mospolytech.ru:5031/'

export const $allowancesApi = axios.create({ baseURL: ALLOWANCES_URL })

$allowancesApi.interceptors.request.use(addAuthHeaderToRequests)

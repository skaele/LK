import axios from 'axios'
import { addAuthHeaderToRequests } from './utils'
import { isProduction } from '@shared/constants'

const ALLOWANCES_PROD_URL = 'https://api.mospolytech.ru/allowanceservice/'
const ALLOWANCES_DEV_URL = 'https://api.mospolytech.ru/testallowanceservice/'

export const ALLOWANCES_URL = isProduction ? ALLOWANCES_PROD_URL : ALLOWANCES_DEV_URL

export const $allowancesApi = axios.create({ baseURL: ALLOWANCES_URL })

$allowancesApi.interceptors.request.use(addAuthHeaderToRequests)

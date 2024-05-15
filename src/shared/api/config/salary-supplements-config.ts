import axios from 'axios'
import { addAuthHeaderToRequests } from './utils'

const SALARY_SUPPLEMENTS_URL = ''

export const $salarySupplementsApi = axios.create({ baseURL: SALARY_SUPPLEMENTS_URL })

$salarySupplementsApi.interceptors.request.use(addAuthHeaderToRequests)

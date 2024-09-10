import axios from 'axios'

export const ALLOWANCES_URL = 'https://api.mospolytech.ru/config'

export const $technicalMaintenanceApi = axios.create({ baseURL: ALLOWANCES_URL })

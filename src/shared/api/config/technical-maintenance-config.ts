import axios from 'axios'

export const TECHNICAL_MAINTENANCE_URL = 'https://api.mospolytech.ru/lk'

export const $technicalMaintenanceApi = axios.create({ baseURL: TECHNICAL_MAINTENANCE_URL })

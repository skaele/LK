import { createSecureApi } from '.'

export const API_1С_CACHE_URL = `https://api.mospolytech.ru/1c-cache`
export const API_HR_URL = `https://api.mospolytech.ru/serviceforfrontpersonnelorders`
export const HOLIDAY_WORK_URL = 'https://apilin.mospolytech.ru:4089/weekend-work'

export const $1CCacheApi = createSecureApi(API_1С_CACHE_URL)
export const $hrApi = createSecureApi(API_HR_URL)
export const $holidayWorkApi = createSecureApi(HOLIDAY_WORK_URL)

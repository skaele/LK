import { createSecureApi } from '.'

export const API_1С_CACHE_URL = `https://api.mospolytech.ru/1c-cache`
export const API_HR_URL = `https://api.mospolytech.ru/serviceforfrontpersonnelorders`

export const $1CCacheApi = createSecureApi(API_1С_CACHE_URL)
export const $hrApi = createSecureApi(API_HR_URL)

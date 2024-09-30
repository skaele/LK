import { createSecureApi } from '.'

export const API_1С_CACHE_URL = `https://apilin.mospolytech.ru:4049/1c-cache`
export const API_HR_URL = `https://api.mospolytech.ru/serviceforfrontpersonnelorders`

export const $1CCacheApi = createSecureApi(API_1С_CACHE_URL)
export const $hrApi = createSecureApi(API_HR_URL)

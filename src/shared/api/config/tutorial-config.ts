import axios from 'axios'
import { addAuthHeaderToRequests } from './utils'

// export const TUTORIAL_URL = 'http://localhost:8000/tutorial/api'
export const TUTORIAL_URL = 'https://api.mospolytech.ru/tutorial/api'

export const $tutorialApi = axios.create({ baseURL: TUTORIAL_URL })

$tutorialApi.interceptors.request.use(addAuthHeaderToRequests)

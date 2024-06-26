import axios from 'axios'
import { addAuthHeaderToRequests } from './utils'

// export const TUTORIAL_URL = 'http://localhost:8000/tutorial/api'
export const TUTORIAL_URL = 'http://apilin.mospolytech.ru:5070/tutorial/api'
// http://apilin.mospolytech.ru:5070/tutorial/api/users/users

export const $tutorialApi = axios.create({ baseURL: TUTORIAL_URL })

$tutorialApi.interceptors.request.use(addAuthHeaderToRequests)

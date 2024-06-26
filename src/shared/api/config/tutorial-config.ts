import axios from 'axios'
import { addAuthHeaderToRequests } from './utils'
import { runsLocally } from '@shared/constants'

export const TUTORIAL_URL = runsLocally
    ? 'http://localhost:8080/tutorial/api'
    : 'https://api.mospolytech.ru/tutorial/api'

export const $tutorialApi = axios.create({ baseURL: TUTORIAL_URL })

$tutorialApi.interceptors.request.use(addAuthHeaderToRequests)

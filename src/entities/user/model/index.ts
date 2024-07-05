import { applicationApi, userApi } from '@api'
import { ADName, User, UserToken } from '@api/model'
import { LoginData } from '@api/user-api'
import createFullName from '@features/home/lib/create-full-name'
import { BrowserStorageKey } from '@shared/constants/browser-storage-key'
import axios from 'axios'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { clearTokens } from '../lib/clear-tokens'
import { TUTORIAL_HASH, TUTORIAL_PROGRESS, TUTORIAL_PROGRESS_DATE, TUTORIAL_PROGRESS_HASH } from '@shared/constants'

interface UserStore {
    currentUser: User | null
    isAuthenticated: boolean | null
    savePassword: boolean
    loginEuz?: string
}

//  In effector chat core-team describe something like this code (Perhaps a better solution can be found)
const tokenInStorage = localStorage.getItem(BrowserStorageKey.Token) ?? ''
const savePasswordInStorage = () => JSON.parse(localStorage.getItem(BrowserStorageKey.SavePassword) ?? 'true')

const getUserTokenFx = createEffect<LoginData, UserToken>(async (params: LoginData) => {
    try {
        const { data } = await userApi.getUserToken(params)

        const form = new FormData()
        form.set('ulogin', params.login)
        form.set('upassword', params.password)
        form.set('auth_action', 'userlogin')

        // set old version site cookies
        try {
            await axios.post('/old', form)
        } catch {}

        clearTokens()

        if (savePasswordInStorage()) {
            localStorage.setItem(BrowserStorageKey.Token, data.token)
            localStorage.setItem(BrowserStorageKey.JWT, data?.jwt ?? '')
            localStorage.setItem(BrowserStorageKey.JWTRefresh, data.jwt_refresh ?? '')
        } else {
            sessionStorage.setItem(BrowserStorageKey.Token, data.token)
            sessionStorage.setItem(BrowserStorageKey.JWT, data?.jwt ?? '')
            localStorage.setItem(BrowserStorageKey.JWTRefresh, data.jwt_refresh ?? '')
        }
        return data
    } catch (e) {
        throw new Error(navigator.onLine ? 'Неверный логин или пароль' : 'Потеряно соединение с интернетом')
    }
})

const getUserFx = createEffect<Pick<UserToken, 'jwt' | 'token'>, UserStore>(async (token): Promise<UserStore> => {
    try {
        const [userResponse, appResponse] = await Promise.all([
            userApi.getUser(token.token),
            applicationApi.getAppData(),
        ])

        const user = userResponse.data.user
        const { name, surname, patronymic } = user

        return {
            currentUser: {
                ...user,
                guid: appResponse.data.guid_person,
                fullName: createFullName({ name, surname, patronymic }),
            },
            isAuthenticated: !!token,
            savePassword: savePasswordInStorage(),
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)

        throw new Error(`Возникла какая-то ошибка: ${(error as Error).message}`)
    }
})

const getLoginEuzFx = createEffect(async (data: ADName): Promise<string> => {
    try {
        const userResponse = await userApi.getADName(data)
        return userResponse.data
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)

        throw new Error('Возникла какая-то ошибка')
    }
})

const logoutFx = createEffect(() => {
    if (savePasswordInStorage()) {
        localStorage.removeItem(BrowserStorageKey.Token)
        localStorage.removeItem(BrowserStorageKey.JWT)
        localStorage.removeItem(BrowserStorageKey.JWTRefresh)
    } else {
        sessionStorage.removeItem(BrowserStorageKey.Token)
        sessionStorage.removeItem(BrowserStorageKey.JWT)
        sessionStorage.removeItem(BrowserStorageKey.JWTRefresh)
    }
    localStorage.removeItem(TUTORIAL_HASH)
    localStorage.removeItem(TUTORIAL_PROGRESS)
    localStorage.removeItem(TUTORIAL_PROGRESS_DATE)
    localStorage.removeItem(TUTORIAL_PROGRESS_HASH)
})

const changeSavePasswordFunc = (savePassword?: boolean) => {
    const localStorageValue = localStorage.getItem(BrowserStorageKey.SavePassword)
    const value = savePassword ?? JSON.parse(localStorageValue ?? 'true')
    localStorage.setItem(BrowserStorageKey.SavePassword, value.toString())

    return value
}

const login = createEvent<LoginData>()
const logout = createEvent()
const clear = createEvent()
const update = createEvent<{ key: keyof User; value: User[keyof User] }>()
const updateBulk = createEvent<Partial<User>>()
const changeSavePassword = createEvent<{ savePassword: boolean }>()

sample({ clock: login, target: getUserTokenFx })
sample({ clock: getUserTokenFx.doneData, target: getUserFx })
sample({ clock: logout, target: logoutFx })

!!tokenInStorage && savePasswordInStorage()
    ? getUserFx({ token: tokenInStorage, jwt: localStorage.getItem(BrowserStorageKey.JWT)! })
    : logoutFx()

const DEFAULT_STORE: UserStore = {
    currentUser: null,
    isAuthenticated: !!tokenInStorage?.length,
    savePassword: savePasswordInStorage(),
    loginEuz: '',
}

changeSavePasswordFunc()

// TODO: separate store
const $userStore = createStore(DEFAULT_STORE)
    .on(getUserFx.doneData, (_, newData) => newData)
    .on(getUserFx.failData, () => ({
        currentUser: null,
        isAuthenticated: !!tokenInStorage?.length,
        savePassword: savePasswordInStorage(),
    }))
    .on(getUserTokenFx.failData, () => ({
        isAuthenticated: null,
        currentUser: null,
        savePassword: savePasswordInStorage(),
    }))
    .on(logout, () => ({
        isAuthenticated: null,
        currentUser: null,
        savePassword: savePasswordInStorage(),
    }))
    .on(changeSavePassword, (oldData, { savePassword }) => ({
        ...oldData,
        savePassword: changeSavePasswordFunc(savePassword),
    }))
    .on(getLoginEuzFx.doneData, (oldData, newData) => ({
        ...oldData,
        loginEuz: newData,
    }))
    .on(update, (oldData, { key, value }) => ({
        ...oldData,
        currentUser: oldData.currentUser ? { ...oldData.currentUser, [key]: value } : null,
    }))
    .on(updateBulk, (oldData, newData) => ({
        ...oldData,
        currentUser: oldData.currentUser ? { ...oldData.currentUser, ...newData } : null,
    }))
    .on(clear, (oldData) => ({
        ...oldData,
        currentUser: null,
    }))

const $userGuid = $userStore.map(({ currentUser }) => currentUser?.guid ?? null)
const $error = createStore<string | null>(null)
    .on(getUserFx, () => null)
    .on(getUserFx.doneData, () => null)
    .on(getUserFx.failData, (_, { message }) => message)
    .on(getUserTokenFx.failData, (_, { message }) => message)
    .on(logout, () => '')
    .on(getLoginEuzFx, () => null)
    .on(getUserFx.failData, (_, { message }) => message)

export const events = {
    login,
    logout,
    changeSavePassword,
    clear,
    update,
    updateBulk,
}

export const effects = {
    getUserFx,
    getLoginEuzFx,
}

export const stores = {
    loading: getUserTokenFx.pending,
    error: $error,
    user: $userStore,
    userGuid: $userGuid,
}

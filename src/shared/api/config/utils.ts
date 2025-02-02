import { InternalAxiosRequestConfig } from 'axios'
import { createEvent } from 'effector'

import { getJwtToken } from '@shared/api/session/jwt-token'
import { BrowserStorageKey } from '@shared/consts/browser-storage-key'

import { authServiceHealthCheck, refreshAccessToken } from '../user-api'

export const forceLogout = createEvent()

const savePasswordInStorage = () => JSON.parse(localStorage.getItem(BrowserStorageKey.SavePassword) ?? 'true')

export const getAuthResponseInterceptor = (apiInstance: any) => async (error: any) => {
    const originalRequest = error?.config ?? {}

    if (error.request.status === 401) {
        if (!originalRequest._retry) {
            originalRequest._retry = true
            const refreshToken = localStorage.getItem(BrowserStorageKey.JWTRefresh)

            try {
                const { accessToken, refreshToken: newRefreshToken } = await refreshAccessToken(refreshToken ?? '')

                if (savePasswordInStorage()) {
                    localStorage.setItem(BrowserStorageKey.JWT, accessToken)
                    localStorage.setItem(BrowserStorageKey.JWTRefresh, newRefreshToken)
                } else {
                    sessionStorage.setItem(BrowserStorageKey.JWT, accessToken)
                    sessionStorage.setItem(BrowserStorageKey.JWTRefresh, newRefreshToken)
                }
                return apiInstance(originalRequest)
            } catch (error) {
                const isServiceAvailable = await authServiceHealthCheck()
                if (isServiceAvailable.status === 200) forceLogout()
            }
        } else {
            forceLogout()
        }
    }
    return Promise.reject(error)
}

export const addAuthHeaderToRequests = (config: InternalAxiosRequestConfig) => {
    if (!config.headers) {
        config.headers = {} as any
    }
    config.headers.Authorization = `Bearer ${getJwtToken()}`
    return config
}

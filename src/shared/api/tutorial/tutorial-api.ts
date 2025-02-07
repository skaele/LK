<<<<<<<< HEAD:src/shared/api/tutorial/tutorial-api.ts
import { $tutorialApi } from '../config/tutorial-config'
import { Module, TutorialId, Tutorials } from './types'
========
import { Module, TutorialId, Tutorials } from '@entities/tutorial/types'

import { $tutorialApi } from './config/tutorial-config'
>>>>>>>> master:src/shared/api/tutorial-api.ts

export type TutorialData = Pick<Module, 'id' | 'completed'>[]
export const initializeTutorials = async (tutorials: TutorialId[]) => {
    const { data } = await $tutorialApi.post<Tutorials>('/tutorials/init', {
        tutorials,
    })
    return data
}

export const getUserTutorials = async () => {
    const { data } = await $tutorialApi.get<Tutorials>('/users/tutorials')

    return data
}

export const completeModule = async (tutorialId: TutorialId) => {
    const { data } = await $tutorialApi.post<Tutorials>('/users/tutorials', {
        tutorialId,
    })

    return data
}

export const rerunModule = async (tutorialId: TutorialId) => {
    const { data } = await $tutorialApi.post<Tutorials>('/users/rerun', {
        tutorialId,
    })

    return data
}
export const changeTutorialState = async (tutorialState: boolean) => {
    const { data } = await $tutorialApi.post<boolean>('/users/enableTutorial', {
        tutorialState,
    })

    return data
}

export const resetTutorial = async () => {
    const { data } = await $tutorialApi.post<boolean>('/users/reset')
    return data
}

export const callUserInteraction = async () => {
    const { data } = await $tutorialApi.post<boolean>('/users/call')
    return data
}

export const clear = async () => {
    const { data } = await $tutorialApi.delete<boolean>('/users/clear')
    return data
}

export const syncModules = async (req: { tutorials: TutorialData; date: string }) => {
    const { data } = await $tutorialApi.post<{ hash: number; tutorials: TutorialData }>('/users/sync', req)
    return data
}

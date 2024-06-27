import { $tutorialApi } from './config/tutorial-config'
import { TutorialId, Tutorials } from '@entities/tutorial/types'

export const initializeTutorials = async (tutorials: TutorialId[]) => {
    const { data } = await $tutorialApi.post<Tutorials>(
        '/tutorials/init',
        {
            tutorials,
        },
        { signal: AbortSignal.timeout(1000) },
    )
    return data
}

export const getUserTutorials = async () => {
    const { data } = await $tutorialApi.get<Tutorials>('/users/tutorials', { signal: AbortSignal.timeout(1000) })

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

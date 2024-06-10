import { TutorialsSchema } from '@entities/tutorial/constants'
import { $tutorialApi } from './config/tutorial-config'
import { TutorialId, Tutorials } from '@entities/tutorial/types'

export const getUserTutorials = async () => {
    const { data } = await $tutorialApi.get<Tutorials>('/tutorials', { signal: AbortSignal.timeout(1000) })

    const parsed = TutorialsSchema.parse(data)

    return parsed
}

export const completeUserTutorial = async (tutorialId: TutorialId) => {
    const { data } = await $tutorialApi.post<Tutorials>('/complete', {
        data: {
            tutorialId,
        },
    })

    return data
}

export const enableTutorial = async (value: boolean) => {
    const { data } = await $tutorialApi.post<boolean>('/enableTutorial', {
        data: {
            tutorialState: value,
        },
    })

    return data
}

export const resetTutorial = async () => {
    const { data } = await $tutorialApi.post<boolean>('/reset')
    return data
}

export const callUserInteraction = async () => {
    const { data } = await $tutorialApi.post<boolean>('/call')
    return data
}

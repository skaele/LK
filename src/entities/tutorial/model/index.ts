import { createEvent, createStore, sample } from 'effector'
import { Module, TutorialId } from '../lib/tutorials'
import { createQuery } from '@farfetched/core'
import { createDefaultTutorials } from '../lib/create-default-tutorials'
import { popUpMessageModel } from '@entities/pop-up-message'

export type Modules = { [id in TutorialId]: Module }

const tutorialEnabled = createEvent<boolean | null>()
const setHeroVisited = createEvent<boolean>()
const setInteractions = createEvent<number>()
const increasedInteractions = createEvent()
const moduleCompleted = createEvent<TutorialId>()
const setCurrentTutorial = createEvent<TutorialId>()
const nextStep = createEvent()
const prevStep = createEvent()
const resetStep = createEvent()
const getTutorialData = createEvent()
const setTutorials = createEvent<Modules>()
const clearProgress = createEvent()

export const getTutorialDataQuery = createQuery({
    handler: async () => {
        const tutorialState = localStorage.getItem('tutorialEnabled')
        const heroVisited = localStorage.getItem('heroVisited')
        const interactions = Number(localStorage.getItem('interactions'))
        const tutorialsStringified = localStorage.getItem('tutorials')
        const tutorials: Modules = tutorialsStringified ? JSON.parse(tutorialsStringified) : createDefaultTutorials()
        return {
            tutorialState,
            heroVisited,
            interactions,
            tutorials,
        }
    },
})
sample({
    clock: getTutorialData,
    target: getTutorialDataQuery.start,
})
sample({
    clock: getTutorialDataQuery.finished.success,
    target: increasedInteractions,
})
sample({
    clock: getTutorialDataQuery.finished.success,
    fn: ({ result: { tutorialState } }) => (tutorialState === 'true' ? true : tutorialState === 'false' ? false : null),
    target: tutorialEnabled,
})
sample({
    clock: getTutorialDataQuery.finished.success,
    fn: ({ result: { heroVisited } }) => heroVisited === 'true',
    target: setHeroVisited,
})
sample({
    clock: getTutorialDataQuery.finished.success,
    fn: ({ result: { interactions } }) => interactions,
    target: setInteractions,
})
sample({
    clock: getTutorialDataQuery.finished.success,
    fn: ({ result: { tutorials } }) => tutorials,
    target: setTutorials,
})
sample({
    clock: clearProgress,
    fn: () => createDefaultTutorials(),
    target: setTutorials,
})
sample({
    clock: clearProgress,
    fn: () => ({
        message: 'Прогресс успешно сброшен',
        type: 'success' as const,
    }),
    target: popUpMessageModel.events.evokePopUpMessage,
})

const $tutorialState = createStore<boolean | null>(null).on(tutorialEnabled, (_, value) => {
    localStorage.setItem('tutorialEnabled', String(value))
    return value
})
const $heroVisited = createStore<boolean>(false).on(setHeroVisited, (_, value) => {
    localStorage.setItem('heroVisited', String(value))
    return value
})
const $currentModule = createStore<Module | null>(null)
const $currentStep = createStore<number>(0).reset(resetStep)
const $tutorials = createStore<Modules | null>(null)
    .on(setTutorials, (_, value) => value)
    .on(moduleCompleted, (state, id) => {
        if (!state) return null
        const tutorials = {
            ...state,
            [id]: {
                ...state[id],
                completed: true,
            },
        }
        localStorage.setItem('tutorials', JSON.stringify(tutorials))
        return tutorials
    })
const $interactions = createStore<number>(0)
    .on(setInteractions, (_, value) => value)
    .on(increasedInteractions, (state) => {
        localStorage.setItem('interactions', String(state + 1))
        return state + 1
    })

sample({
    clock: nextStep,
    source: {
        currentStep: $currentStep,
        currentModule: $currentModule,
    },
    fn: ({ currentStep, currentModule }) => {
        if (!currentModule) return 0
        const nextStep = currentStep + 1
        if (currentModule?.steps.length <= nextStep) return 0
        return nextStep
    },
    target: $currentStep,
})
sample({
    clock: prevStep,
    source: {
        currentStep: $currentStep,
        currentModule: $currentModule,
    },
    fn: ({ currentStep, currentModule }) => {
        if (!currentModule) return 0
        const prevStep = currentStep - 1
        if (prevStep < 0) return currentStep
        return prevStep
    },
    target: $currentStep,
})
sample({
    clock: setCurrentTutorial,
    source: $tutorials,
    fn: (tutorials, id) => {
        if (!tutorials) return null
        const tutorial = tutorials[id]
        return tutorial
    },
    target: $currentModule,
})

sample({
    clock: moduleCompleted,
    target: resetStep,
})

export const stores = {
    tutorialState: $tutorialState,
    currentModule: $currentModule,
    currentStep: $currentStep,
    tutorials: $tutorials,
    heroVisited: $heroVisited,
    interactions: $interactions,
}

export const events = {
    tutorialEnabled,
    setHeroVisited,
    moduleCompleted,
    setCurrentTutorial,
    getTutorialData,
    nextStep,
    prevStep,
    clearProgress,
}

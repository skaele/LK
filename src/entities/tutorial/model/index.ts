import { createEvent, createStore, sample } from 'effector'
import { Module, Modules, TutorialId } from '../types'
import { createQuery } from '@farfetched/core'
import { getUserTutorials } from '@shared/api/tutorial-api'

const tutorialEnabled = createEvent<boolean>()
const setHeroVisited = createEvent<boolean>()
const increasedInteractions = createEvent()
const moduleCompleted = createEvent<TutorialId>()
const moduleRestarted = createEvent<TutorialId>()
const setCurrentTutorial = createEvent<TutorialId>()
const nextStep = createEvent()
const prevStep = createEvent()
const resetStep = createEvent()
const getTutorialData = createEvent()
const clearProgress = createEvent()

const $tutorialState = createStore<boolean | null>(null)
const $heroVisited = createStore<boolean>(false).on(setHeroVisited, (_, value) => {
    localStorage.setItem('heroVisited', String(value))
    return value
})
const $currentModule = createStore<Module | null>(null)
const $currentStep = createStore<number>(0).reset(resetStep)
const $tutorials = createStore<Modules | null>(null).on(moduleCompleted, (state, id) => {
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
        return tutorial ?? null
    },
    target: $currentModule,
})

sample({
    clock: moduleCompleted,
    target: resetStep,
})
sample({
    clock: moduleRestarted,
    source: {
        tutorials: $tutorials,
        tutorialState: $tutorialState,
    },
    fn: ({ tutorials, tutorialState }, id) => {
        if (!tutorials) return null
        if (!tutorialState) return tutorials
        const newTutorials = {
            ...tutorials,
            [id]: {
                ...tutorials[id],
                completed: false,
            },
        }
        localStorage.setItem('tutorials', JSON.stringify(newTutorials))
        return newTutorials
    },
    target: $tutorials,
})

const getTutorialDataQuery = createQuery({
    handler: getUserTutorials,
})

sample({
    clock: getTutorialData,
    target: getTutorialDataQuery.start,
})

sample({
    clock: getTutorialDataQuery.finished.success,
    fn: ({ result: { tutorialState } }) => tutorialState,
    target: $tutorialState,
})

sample({
    clock: getTutorialDataQuery.finished.success,
    fn: ({ result: { tutorials } }) => tutorials,
    target: $tutorials,
})

sample({
    clock: getTutorialDataQuery.finished.success,
    fn: ({ result: { interactions } }) => interactions,
    target: $interactions,
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
    moduleRestarted,
    setCurrentTutorial,
    getTutorialData,
    nextStep,
    prevStep,
    clearProgress,
    resetStep,
    increasedInteractions,
}

export const queries = {
    getTutorialDataQuery,
}

import { createEvent, createStore, sample } from 'effector'
import { Module, TutorialId, commonTutorials } from '../lib/tutorials'

type Modules = { [id in TutorialId]: Module }
const modulesResponse: { [id in TutorialId]: Pick<Module, 'completed'> } = {
    sidebar: {
        completed: false,
    },
    home: {
        completed: false,
    },
}
const modules: Modules = Object.entries(commonTutorials).reduce((acc, [id, common]) => {
    acc[id as TutorialId] = {
        id: id as TutorialId,
        completed: modulesResponse[id as TutorialId].completed,
        steps: common.steps,
        path: common.path,
    }
    return acc
}, {} as Modules)

const setTutorialState = createEvent<boolean>()
const setHeroVisited = createEvent<boolean>()
const setTutorialDelay = createEvent<{ till: Date; name: TutorialId }>()
const completeModule = createEvent<TutorialId>()
const setCurrentTutorial = createEvent<TutorialId>()
const nextStep = createEvent()
const prevStep = createEvent()
const resetStep = createEvent()

const $tutorialState = createStore<boolean | null>(null).on(setTutorialState, (_, value) => value)
const $heroVisited = createStore<boolean>(false).on(setHeroVisited, (_, value) => value)
const $currentModule = createStore<Module | null>(null)
const $currentStep = createStore<number>(0).reset(resetStep)
const $tutorials = createStore<Modules>(modules).on(completeModule, (state, id) => ({
    ...state,
    [id]: {
        ...state[id],
        completed: true,
    },
}))

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
// sample({
//     clock: nextStep,
//     source: {
//         currentStep: $currentStep,
//         currentModule: $currentModule,
//     },
//     fn: ({ currentStep, currentModule }) => {
//         if (!currentModule) return
//         const nextStep = currentStep + 1
//         if (currentModule?.steps.length <= nextStep) return currentModule.id
//     },
//     target: completeModule,
// })
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
        const tutorial = tutorials[id]
        if (!tutorial) return null
        return tutorial
    },
    target: $currentModule,
})

sample({
    clock: completeModule,
    target: resetStep,
})

export const stores = {
    tutorialState: $tutorialState,
    currentModule: $currentModule,
    currentStep: $currentStep,
    tutorials: $tutorials,
    heroVisited: $heroVisited,
}

export const events = {
    setTutorialState,
    setTutorialDelay,
    setHeroVisited,
    completeModule,
    setCurrentTutorial,
    nextStep,
    prevStep,
}

import { createEvent, createStore, sample } from 'effector'
import { Module, TutorialId, commonTutorials } from '../lib/tutorials'

const modulesResponse: Pick<Module, 'id' | 'completed'>[] = [
    {
        id: 'intro',
        completed: false,
    },
]

const modules: Module[] = modulesResponse
    .map((module) => {
        const tutorial = commonTutorials.find((tutorial) => tutorial.id === module.id)
        if (!tutorial) return false

        return {
            ...tutorial,
            ...module,
        }
    })
    .filter(Boolean) as Module[] // почему он такой тупой??

const setTutorialState = createEvent<boolean>()
const setHeroVisited = createEvent<boolean>()
const setTutorialDelay = createEvent<{ till: Date; name: TutorialId }>()
const completeModule = createEvent<TutorialId>()

const $tutorialState = createStore<boolean | null>(null).on(setTutorialState, (_, value) => value)
const $heroVisited = createStore<boolean>(false).on(setHeroVisited, (_, value) => value)
const $currentModule = createStore<Module | null>(null)
const $currentStep = createStore<number>(0)
const $tutorials = createStore<Module[]>(modules).on(completeModule, (state, id) => state.filter((t) => t.id !== id))

const setCurrentTutorial = createEvent<TutorialId>()
sample({
    clock: setCurrentTutorial,
    source: $tutorials,
    fn: (tutorials, id) => {
        const tutorial = tutorials.find((t) => t.id === id)
        if (!tutorial) return null
        return tutorial
    },
    target: $currentModule,
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
}

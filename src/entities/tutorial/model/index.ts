import { createEvent, createStore } from 'effector'
import { Tutorial, tutorials } from '../lib/tutorials'

const setTutorial = createEvent<boolean>()

const $tutorialState = createStore<boolean>(true).on(setTutorial, (_, value) => value)
const $currentTutorial = createStore<[Tutorial, number]>([tutorials[0], 9])

export const stores = {
    tutorialState: $tutorialState,
    currentTutorial: $currentTutorial,
}

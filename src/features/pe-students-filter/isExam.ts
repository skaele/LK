import { createEvent, createStore } from 'effector'

const setIsExam = createEvent<boolean>()

const $isExam = createStore<boolean>(false).on(setIsExam, (_, value) => value)

export const stores = {
    $isExam,
}

export const events = {
    setIsExam,
}

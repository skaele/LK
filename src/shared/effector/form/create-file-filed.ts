import { Unit, createEvent, createStore } from 'effector'

export function createFilesField({ reset }: { reset?: Unit<any> | Array<Unit<any>> } = {}) {
    const setValue = createEvent<File[]>()
    const $store = createStore<File[]>([]).on(setValue, (_, newValue) => newValue)
    if (reset)
        if (Array.isArray(reset)) $store.reset(reset)
        else $store.reset(reset)

    return {
        value: $store,
        setValue,
    }
}

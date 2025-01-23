import { Unit, createEvent, createStore } from 'effector'

export const createInputField = ({
    defaultValue,
    reset,
}: { defaultValue?: string; reset?: Unit<any> | Array<Unit<any>> } = {}) => {
    const setValue = createEvent<string>()
    const $store = createStore<string>(defaultValue ?? '').on(setValue, (_, newValue) => newValue)
    if (reset)
        if (Array.isArray(reset)) $store.reset(reset)
        else $store.reset(reset)

    return {
        value: $store,
        setValue,
    }
}

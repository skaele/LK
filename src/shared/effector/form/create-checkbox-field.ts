import { createEvent, createStore, Unit } from 'effector'

export const createCheckboxField = ({
    defaultValue,
    reset,
}: { defaultValue?: boolean; reset?: Unit<any> | Array<Unit<any>> } = {}) => {
    const setValue = createEvent<boolean>()
    const $store = createStore<boolean>(defaultValue ?? false).on(setValue, (_, newValue) => newValue)
    if (reset)
        if (Array.isArray(reset)) $store.reset(reset)
        else $store.reset(reset)

    return {
        value: $store,
        setValue,
    }
}

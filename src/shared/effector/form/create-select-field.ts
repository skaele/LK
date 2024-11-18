import { SelectPage } from '@features/select'
import { createEvent, createStore, Unit } from 'effector'

export const createSelectField = ({
    defaultValue,
    reset,
}: { defaultValue?: SelectPage | null; reset?: Unit<any> | Array<Unit<any>> } = {}) => {
    const setValue = createEvent<SelectPage | null>()
    const $store = createStore<SelectPage | null>(defaultValue ?? null).on(setValue, (_, newValue) => newValue)
    if (reset)
        if (Array.isArray(reset)) $store.reset(reset)
        else $store.reset(reset)

    return {
        value: $store,
        setValue,
    }
}

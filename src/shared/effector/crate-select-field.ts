import { SelectPage } from '@features/select'
import { createEvent, createStore, Unit } from 'effector'

export function createSelectField({
    defaultValue,
    reset,
}: { defaultValue?: SelectPage | null; reset?: Unit<any> } = {}) {
    const setValue = createEvent<SelectPage | null>()
    const $store = createStore<SelectPage | null>(defaultValue ?? null).on(setValue, (_, newValue) => newValue)
    if (reset) $store.reset(reset)

    return {
        value: $store,
        setValue,
    }
}

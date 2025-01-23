import { Unit, createEvent, createStore, sample } from 'effector'

export function createDatePeriodField({ reset }: { reset?: Unit<any> }) {
    const setStartDate = createEvent<string>()
    const setEndDate = createEvent<string>()
    const $startDate = createStore<string>('').on(setStartDate, (_, newValue) => newValue)
    const $endDate = createStore<string>('').on(setEndDate, (_, newValue) => newValue)

    if (reset) {
        $startDate.reset(reset)
        $endDate.reset(reset)
    }

    sample({
        clock: setStartDate,
        source: $endDate,
        filter: (endDate, startDate) => new Date(startDate) > new Date(endDate),
        fn: () => '',
        target: $endDate,
    })

    return {
        startDate: $startDate,
        endDate: $endDate,
        setStartDate,
        setEndDate,
    }
}

import { createQuery } from '@farfetched/core'
import { allowancesModel } from '..'
import { sample } from 'effector'
import { getAllowances } from '@shared/api/model/allowances'

export const approverAllowancesQuery = createQuery({
    handler: getAllowances,
})

sample({
    clock: allowancesModel.events.pageMounted,
    target: approverAllowancesQuery.start,
})

export const initiatorAllowancesQuery = createQuery({
    handler: getAllowances,
})

sample({
    clock: allowancesModel.events.pageMounted,
    target: initiatorAllowancesQuery.start,
})

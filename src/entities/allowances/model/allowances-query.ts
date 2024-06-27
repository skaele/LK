import { createQuery } from '@farfetched/core'
import { allowancesModel } from '..'
import { sample } from 'effector'
import { getAllowances } from '@shared/api/model/allowances'

export const allowancesQuery = createQuery({
    handler: getAllowances,
})

sample({
    clock: allowancesModel.events.pageMounted,
    target: allowancesQuery.start,
})

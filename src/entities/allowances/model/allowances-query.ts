import { createQuery } from '@farfetched/core'
import { allowancesModel } from '..'
import { sample } from 'effector'
import { getAllowances } from '@shared/api/model/allowances'

export const AllowancesQuery = createQuery({
    handler: getAllowances,
})

sample({
    clock: allowancesModel.events.pageMounted,
    target: AllowancesQuery.start,
})

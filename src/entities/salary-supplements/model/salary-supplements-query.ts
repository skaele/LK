import { createQuery } from '@farfetched/core'
import { salarySupplementsModel } from '..'
import { sample } from 'effector'
import { getAllowances } from '@shared/api/model/salary-supplements'

export const salarySupplementsQuery = createQuery({
    handler: getAllowances,
})

sample({
    clock: salarySupplementsModel.events.pageMounted,
    target: salarySupplementsQuery.start,
})

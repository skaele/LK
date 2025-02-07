import { createQuery } from '@farfetched/core'
import { sample } from 'effector'

import { userModel } from '@entities/user'

import { getServerSettings } from '@shared/api/settings'

export const serverSettingsQuery = createQuery({
    handler: getServerSettings,
})

sample({
    clock: userModel.stores.user,
    filter: ({ currentUser }) => Boolean(currentUser),
    target: serverSettingsQuery.start,
})

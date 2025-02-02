import { createQuery } from '@farfetched/core'
import { sample } from 'effector'

import { getServerSettings } from '@shared/api/settings'
import { userModel } from '@shared/session'

export const serverSettingsQuery = createQuery({
    handler: getServerSettings,
})

sample({
    clock: userModel.stores.user,
    filter: ({ currentUser }) => Boolean(currentUser),
    target: serverSettingsQuery.start,
})

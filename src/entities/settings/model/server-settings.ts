import { userModel } from '@entities/user'
import { createQuery } from '@farfetched/core'
import { getServerSettings } from '@shared/api/settings'
import { sample } from 'effector'

export const serverSettingsQuery = createQuery({
    handler: getServerSettings,
})

sample({
    clock: userModel.stores.user,
    filter: ({ currentUser }) => Boolean(currentUser),
    target: serverSettingsQuery.start,
})

import { $userStore } from '@entities/user/model'
import { createQuery } from '@farfetched/core'
import { getServerSettings } from '@shared/api/settings'
import { sample } from 'effector'

export const serverSettingsQuery = createQuery({
    handler: getServerSettings,
})

sample({
    clock: $userStore,
    filter: ({ currentUser }) => Boolean(currentUser),
    target: serverSettingsQuery.start,
})

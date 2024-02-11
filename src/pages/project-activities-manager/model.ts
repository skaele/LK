import { createDefaultStore } from '@shared/effector/create-default-store'
import { getProjects } from '@api/project-activities-manager'

export const projectActivitiesManagerStore = createDefaultStore({
    api: {
        get: getProjects,
    },
})

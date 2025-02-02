// import { projectActivitesResponse } from './__mock__/project-activites'
import token from '@shared/lib/token'

import { $api } from './config'
import { Project } from './model/project-activites'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const get = async (semestr: string) => {
    return (await $api.get<Project>(`?PDinfo&token=${token()}`)).data
}

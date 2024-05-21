import { getEntries } from '@shared/lib/typescript/getEntries'
import { Modules } from '../model'
import { commonTutorials } from './tutorials'

export const createDefaultTutorials = () =>
    getEntries(commonTutorials).reduce((acc, [id, tutorial]) => {
        acc[id] = {
            id: id,
            completed: false,
            name: tutorial.name,
            steps: tutorial.steps,
            path: tutorial.path,
        }
        return acc
    }, {} as Modules)

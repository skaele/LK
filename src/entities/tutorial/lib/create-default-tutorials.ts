import { Modules } from '../model'
import { TutorialId, commonTutorials } from './tutorials'

export const createDefaultTutorials = () =>
    Object.entries(commonTutorials).reduce((acc, [id, common]) => {
        acc[id as TutorialId] = {
            id: id as TutorialId,
            completed: false,
            name: common.name,
            steps: common.steps,
            path: common.path,
        }
        return acc
    }, {} as Modules)

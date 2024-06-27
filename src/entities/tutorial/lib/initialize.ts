import { stringToHash } from '@shared/lib/stringToHash'
import { commonTutorialIds } from './tutorials'
import { tutorialModel } from '..'

export const TUTORIAL_HASH = 'tHash'

export const initializeTutorials = () => {
    const hash = stringToHash(JSON.stringify(commonTutorialIds))

    const oldHash = localStorage.getItem(TUTORIAL_HASH)
    if (hash !== Number(oldHash)) {
        return tutorialModel.events.initialized([...commonTutorialIds])
    }
    return tutorialModel.events.getTutorialData()
}

import { stringToHash } from '@shared/lib/stringToHash'
import { commonTutorialIds } from './tutorials'
import { tutorialModel } from '..'
import { TUTORIAL_HASH } from '@shared/constants'

export const initializeTutorials = () => {
    const hash = stringToHash(JSON.stringify(commonTutorialIds))

    tutorialModel.events.setRoles([])

    const oldHash = localStorage.getItem(TUTORIAL_HASH)
    if (hash !== Number(oldHash)) {
        return tutorialModel.events.initialized([...commonTutorialIds])
    }
    return tutorialModel.events.getTutorialData()
}

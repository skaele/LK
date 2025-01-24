import { TUTORIAL_HASH } from '@shared/constants'
import { stringToHash } from '@shared/lib/stringToHash'

import { tutorialModel } from '..'
import { commonTutorialIds } from './tutorials'

export const initializeTutorials = () => {
    const hash = stringToHash(JSON.stringify(commonTutorialIds))

    tutorialModel.events.setRoles([])

    const oldHash = localStorage.getItem(TUTORIAL_HASH)
    if (hash !== Number(oldHash)) {
        return tutorialModel.events.initialized([...commonTutorialIds])
    }
    return tutorialModel.events.getTutorialData()
}

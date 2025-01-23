import * as z from 'zod'
import { TutorialData } from '@shared/api/tutorial-api'

import { ModuleSchema, TutorialIdSchema, TutorialStepSchema } from './constants'

export type TutorialId = z.infer<typeof TutorialIdSchema>
export type TutorialStep = z.infer<typeof TutorialStepSchema>
export type Module = z.infer<typeof ModuleSchema>
export type Modules = { [id in TutorialId]: Module }
export type Tutorials = {
    tutorialState: boolean
    interactions: number
    tutorials: TutorialData
    hash: number
}

export type TutorialRoles = ('dormitory' | 'education' | 'has widgets' | 'has PA last semester')[]

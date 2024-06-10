import * as z from 'zod'
import { ModuleSchema, ModulesSchema, TutorialIdSchema, TutorialStepSchema, TutorialsSchema } from './constants'

export type TutorialId = z.infer<typeof TutorialIdSchema>
export type TutorialStep = z.infer<typeof TutorialStepSchema>
export type Module = z.infer<typeof ModuleSchema>
export type Modules = z.infer<typeof ModulesSchema>
export type Tutorials = z.infer<typeof TutorialsSchema>

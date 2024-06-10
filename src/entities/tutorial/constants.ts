import * as z from 'zod'
import { commonTutorialIds } from './lib/tutorials'

export const TutorialIdSchema = z.enum(commonTutorialIds)

export const TutorialStepSchema = z.object({
    title: z.string(),
    description: z.string(),
})

export const ModuleSchema = z.object({
    id: TutorialIdSchema,
    name: z.string(),
    completed: z.boolean(),
    steps: z.array(TutorialStepSchema),
    path: z.string(),
})

// export const TutorialsSchema = z.object({
//     tutorialState: z.boolean(),
//     interactions: z.number(),
//     tutorials: z.record(TutorialIdSchema, ModuleSchema),
// })

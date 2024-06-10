import { TutorialsSchema } from '@entities/tutorial/constants'
import { $tutorialApi } from './config/tutorial-config'
import { Tutorials } from '@entities/tutorial/types'

export const getTutorialDataRequest = async () => {
    const { data } = await $tutorialApi.get<Tutorials>('', { signal: AbortSignal.timeout(1000) })

    const parsed = TutorialsSchema.parse(data)

    return parsed
}

// async () => {
//   const tutorialState = localStorage.getItem('tutorialEnabled')
//   const heroVisited = localStorage.getItem('heroVisited')
//   const interactions = Number(localStorage.getItem('interactions'))
//   const tutorials = countTutorials()
//   return {
//       tutorialState,
//       heroVisited,
//       interactions,
//       tutorials,
//   }
// }

import { getEntries } from '@shared/lib/typescript/getEntries'
import { Modules } from '../model'
import { createDefaultTutorials } from './create-default-tutorials'

export const countTutorials = () => {
    const tutorialsStringified = localStorage.getItem('tutorials')
    const defaultTutorials = createDefaultTutorials()
    if (!tutorialsStringified) return defaultTutorials
    const tutorialsData = JSON.parse(tutorialsStringified)
    const tutorials = getEntries(defaultTutorials).reduce((acc, [key, value]) => {
        if (tutorialsData[key]) {
            acc[key] = {
                ...value,
                completed: tutorialsData[key].completed,
            }
        } else {
            acc[key] = value
        }
        return acc
    }, {} as Modules)
    return tutorials
}

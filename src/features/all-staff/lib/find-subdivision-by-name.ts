import { Subdivision } from '@shared/api/model/phonebook'

export const findSubdivisionByName = (subdivisions: Subdivision[], name: string): Subdivision | null => {
    const lowerCaseName = name.toLowerCase()
    if (subdivisions.length === 0) return null

    let result: Subdivision | null = null
    subdivisions.forEach((subdiv) => {
        if (subdiv.name.toLowerCase() === lowerCaseName) {
            result = subdiv
        }
        const nestedResult = findSubdivisionByName(subdiv.subdivs, name)
        if (nestedResult) result = nestedResult
    })
    return result
}

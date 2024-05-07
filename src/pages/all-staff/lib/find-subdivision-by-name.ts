import { Subdivision } from '@shared/api/model/phonebook'

export const findSubdivisionByName = (subdivisions: Subdivision[], name: string) => {
    const lowerCaseName = name.toLowerCase()
    if (subdivisions.length === 0) return []
    const result: Subdivision[] = []
    subdivisions.forEach((subdiv) => {
        if (subdiv.name?.toLowerCase().includes(lowerCaseName)) {
            result.push(subdiv)
        }
        subdiv.subdivs.forEach((subdiv) => {
            if (subdiv.name?.toLowerCase().includes(lowerCaseName)) {
                result.push(subdiv)
            }
        })
        const nestedResult = findSubdivisionByName(subdiv.subdivs, lowerCaseName)
        result.push(...nestedResult)
    })
    return result.filter((subdiv, index, self) => index === self.findIndex((s) => s.name === subdiv.name))
}

import { Subdivision } from '@shared/api/model/phonebook'

export const getSubdivisionPath = (subdivisions: Subdivision[], searchString: string): Subdivision[] | null => {
    if (searchString === '') return null
    const result: Subdivision[] = []
    const response = subdivisions.find((subdivision) => subdivision.name === searchString)

    if (!response) {
        for (const subdivision of subdivisions) {
            const res = getSubdivisionPath(subdivision.subdivs, searchString)
            if (res && res.length > 0) result.push(...res, subdivision)
        }
        return result
    } else {
        result.push(response)
    }

    return result
}

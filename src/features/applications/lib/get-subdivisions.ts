import { Division, Subdivision } from '@api/model'

export const getSubivisions = (subdivisions: Division[] = []) =>
    subdivisions.map((subdivision) => ({
        id: subdivision.guid,
        title: subdivision.name,
    }))

export const getFormattedSubDivisionsWithRate = (subdivisions: Subdivision[] = []) => {
    return subdivisions.map((subdivision) => {
        return {
            id: subdivision.guid_staff,
            title: `${subdivision.subdivision} (${subdivision.post}, ${subdivision.wage})`,
        }
    })
}

import { Division } from '@api/model'

export const getSubivisions = (subdivisions: Division[] = []) =>
    subdivisions.map((subdivision) => ({
        id: subdivision.guid,
        title: subdivision.name,
    }))

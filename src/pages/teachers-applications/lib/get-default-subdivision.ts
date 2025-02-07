import { Subdivision } from '@api/model'

import { getFormattedSubDivisions } from '@features/applications/lib/get-formatted-subdivisions'

export const getDefaultSubdivision = (subdivisions: Subdivision[] = []) => {
    if (subdivisions && subdivisions.length === 1) {
        return getFormattedSubDivisions(subdivisions)[0]
    }
    return null
}

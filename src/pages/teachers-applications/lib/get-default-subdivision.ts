import { getFormattedSubDivisions } from '@features/applications/lib/get-formatted-subdivisions'

import { Subdivision } from '@shared/api/model'

export const getDefaultSubdivision = (subdivisions: Subdivision[] = []) => {
    if (subdivisions && subdivisions.length === 1) {
        return getFormattedSubDivisions(subdivisions)[0]
    }
    return null
}

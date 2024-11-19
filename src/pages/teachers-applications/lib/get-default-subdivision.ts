import { Subdivision } from '@api/model'
import { getFormattedSubDivisions } from '@features/applications/lib/get-formatted-subdivisions'
import { SelectPage } from '@features/select'

export const getDefaultSubdivision = (subdivisions: Subdivision[] = []): SelectPage | null => {
    if (subdivisions && subdivisions.length === 1) {
        return getFormattedSubDivisions(subdivisions)[0]
    }
    return null
}

import { phonebookModel } from '@entities/phonebook'

import { Subdivision } from '@shared/api/model/phonebook'

import { getSubdivisionPath } from '../../../features/all-staff/lib/get-subdivision-path'

export const setSubdivisionPath = (subdivisions: Subdivision[], value: string) => {
    const searched = getSubdivisionPath(subdivisions, value) || null
    phonebookModel.events.setSubdivisionPath(searched)
}

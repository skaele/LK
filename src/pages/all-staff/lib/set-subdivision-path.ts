import { Subdivision } from '@shared/api/model/phonebook'
import { getSubdivisionPath } from './get-subdivision-path'
import { phonebookModel } from '@entities/phonebook'

export const setSubdivisionPath = (subdivisions: Subdivision[], value: string) => {
    const searched = getSubdivisionPath(subdivisions, value) || null
    phonebookModel.events.setSubdivisionPath(searched)
}

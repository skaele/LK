import { findSubdivisionByName } from '../lib/find-subdivision-by-name'
import { findEmployeeByFio } from '../lib/find-employee-by-fio'
import useQueryParams from '@shared/lib/hooks/use-query-params'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import { setSubdivisionPath } from '../lib/set-subdivision-path'

export const useStaffSearch = () => {
    const query = useQueryParams()
    // I use one query param 'cause there is no space for two search fields on mobile devices
    const search = query.get('search') || '/'
    const [subdivision, fio] = search.split('/')

    const { subdivisionPath, subdivisions } = useUnit({
        subdivisionPath: phonebookModel.stores.subdivisionPath,
        subdivisions: phonebookModel.stores.subdivisions,
    })
    const searchedSubdivisions =
        search && subdivisions ? findSubdivisionByName(subdivisions, subdivision ? subdivision : search) : []

    const chosenSubdivision = searchedSubdivisions.length > 1 ? null : subdivisionPath?.[0]

    const searchedEmployees =
        search && subdivisions
            ? findEmployeeByFio(chosenSubdivision ? [chosenSubdivision] : subdivisions, fio ? fio : search)
            : []

    if (searchedSubdivisions.length > 1 && subdivisions) {
        setSubdivisionPath(subdivisions, '')
    }

    return {
        search,
        searchedEmployees,
        searchedSubdivisions,
        subdivision,
        fio,
    }
}

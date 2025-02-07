import { divisionT } from '@shared/api/model'

export const getFormattedDivisions = (divisions: divisionT[]) => {
    return divisions.map((division) => {
        return {
            id: +division.id,
            title: division.name + ' ' + division.contact,
        }
    })
}

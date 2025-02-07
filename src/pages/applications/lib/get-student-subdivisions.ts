import { getFormattedDivisions } from '@features/applications/lib/get-divisions'

import { UserApplication } from '@shared/api/model'
import { IInputAreaData } from '@shared/ui/input-area/model'

const getStudentSubdivisions = ({ divisions_crs }: UserApplication): IInputAreaData[] => {
    return [
        {
            title: 'Выберите отделение МФЦ, где желаете получить готовый документ:',
            required: true,
            type: 'radio',
            fieldName: 'structural-subdivision',
            value: null,
            editable: true,
            items: getFormattedDivisions(divisions_crs),
            isSpecificRadio: true,
            specialType: 'personalMethod',
        },
    ]
}

export default getStudentSubdivisions

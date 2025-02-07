import { MethodObtainingOptions } from '@entities/applications/consts'

import { IInputAreaData } from '@ui/input-area/model'

export const getStudentMethodObtainingFields = (): IInputAreaData[] => {
    return [
        {
            title: 'Способ получения справки',
            type: 'select',
            width: '100%',
            fieldName: 'method_obtaining',
            value: null,
            editable: true,
            required: true,
            items: MethodObtainingOptions,
        },
    ]
}

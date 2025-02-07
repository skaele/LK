<<<<<<<< HEAD:src/entities/applications/lib/get-method-obstaing.ts
import { IInputAreaData } from '@shared/ui/input-area/model'
import { SpecialFieldsName, SpecialFieldsNameConfig } from '@shared/ui/input-area/types'
========
import { SpecialFieldsName, SpecialFieldsNameConfig } from '@entities/applications/consts'

import { IInputAreaData } from '@ui/input-area/model'
>>>>>>>> master:src/features/applications/lib/get-method-obstaing.ts

type radioType = { id: number; title: string }

const getMethodObtaining = (data: IInputAreaData[]): SpecialFieldsNameConfig => {
    const methodObtainingField = data.find((item: IInputAreaData) => item.fieldName === 'method_obtaining')
    let resultNameField: SpecialFieldsName = null
    if (!!methodObtainingField?.value) {
        const valueMethod = methodObtainingField?.value as radioType
        if (valueMethod.title === 'На электронную почту') {
            resultNameField = null
        } else if (valueMethod.title === 'Лично') {
            resultNameField = 'personalMethod'
        } else if (valueMethod.title === 'На почтовый адрес') {
            resultNameField = 'postMethod'
        }
    }
    return { method_obtaining: resultNameField }
}

export default getMethodObtaining

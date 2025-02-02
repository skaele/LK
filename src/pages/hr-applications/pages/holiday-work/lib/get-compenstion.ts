import { SpecialFieldsName, SpecialFieldsNameConfig } from '@entities/applications/consts'

import { IInputAreaData } from '@shared/ui/input-area/model'

type radioType = { id: number; title: string }

const getCompensation = (data: IInputAreaData[]): SpecialFieldsNameConfig => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'compensation')
    let resultNameField: SpecialFieldsName = null
    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as radioType
        if (
            valueReason.title ===
            'Оплатить работу в выходной день в одинарном размере с предоставлением другого дня отдыха'
        ) {
            resultNameField = 'Compensation'
        }
    }
    return { compensation: resultNameField }
}

export default getCompensation

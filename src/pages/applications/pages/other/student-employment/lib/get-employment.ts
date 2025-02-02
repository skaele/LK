import { IInputAreaData } from '@shared/ui/input-area/model'
import { SpecialFieldsName, SpecialFieldsNameConfig } from '@shared/ui/input-area/types'

type radioType = { id: number; title: string }

const getEmployment = (data: IInputAreaData[]): SpecialFieldsNameConfig => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'currently-employed')
    let resultNameField: SpecialFieldsName = null
    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as radioType
        if (valueReason.title === '0') {
            resultNameField = 'employed'
        }
        if (valueReason.title === '1') {
            resultNameField = 'unemployed'
        }
    }
    return { reason: resultNameField }
}

export default getEmployment

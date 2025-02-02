import { IInputAreaData } from '@shared/ui/input-area/model'
import { SpecialFieldsName, SpecialFieldsNameConfig } from '@shared/ui/input-area/types'

type radioType = { id: number; title: string }

const getReasonAcademic = (data: IInputAreaData[]): SpecialFieldsNameConfig => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'reason')
    let resultNameField: SpecialFieldsName = null
    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as radioType
        if (valueReason.title === 'обстоятельства личного характера') {
            resultNameField = 'personalNature'
        }
    }
    return { reason_academic: resultNameField }
}

export default getReasonAcademic

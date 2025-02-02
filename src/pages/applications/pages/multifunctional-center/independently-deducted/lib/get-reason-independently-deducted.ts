import { SpecialFieldsName, SpecialFieldsNameConfig } from '@entities/applications/consts'

import { IInputAreaData } from '@shared/ui/input-area/model'
import { SelectPage } from '@shared/ui/select'

export const getReasonIndepedentlyDeducted = (data: IInputAreaData[]): SpecialFieldsNameConfig => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'reason')
    let resultNameField: SpecialFieldsName = null
    if (!!reasonField?.value) {
        const value = reasonField?.value as SelectPage
        if (value.id === 3) {
            resultNameField = 'universityTransfer'
        }
    }
    return { reason_independently_deducted: resultNameField }
}

import { IInputAreaData } from '@ui/input-area/model'
import { SpecialFieldsNameConfig, SpecialFieldsName } from '@entities/applications/consts'
import { SelectPage } from '@features/select'

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

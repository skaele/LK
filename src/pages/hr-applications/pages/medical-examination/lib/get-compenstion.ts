import { IInputAreaData } from '@shared/ui/input-area/model'
import { SpecialFieldsNameConfig } from '@shared/ui/input-area/types'

const getCompensation = (data: IInputAreaData[]): SpecialFieldsNameConfig => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'isRetirement')
    if (!!reasonField?.value) {
        if (reasonField?.value) {
            return { reason: 'Compensation2' }
        }
    }
    return { reason: null }
}

export default getCompensation

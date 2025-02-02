import { IInputAreaData } from '@shared/ui/input-area/model'
import { SpecialFieldsNameConfig } from '@shared/ui/input-area/types'

type radioType = { id: number; title: string }

const getPostAfterTransfer = (data: IInputAreaData[]): SpecialFieldsNameConfig => {
    const reasonField = data.find((item: IInputAreaData) => item.fieldName === 'employment')

    if (!!reasonField?.value) {
        const valueReason = reasonField?.value as radioType
        if (valueReason.title === 'По совместительству') {
            return { reason: 'PartTime' }
        }
    }
    return { reason: null }
}

export default getPostAfterTransfer

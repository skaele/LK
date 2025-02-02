import { IInputArea } from '@shared/ui/input-area/model'

const getConsentToProcessingPersonalData = (): IInputArea => {
    return {
        title: 'Согласие на обработку персональных данных членов семьи',
        data: [],
        documents: {
            files: [],
            fieldName: 'consentToProcessingPersonalData',
            required: true,
            maxFiles: 1,
            allowedTypes: ['pdf'],
        },
    }
}

export default getConsentToProcessingPersonalData

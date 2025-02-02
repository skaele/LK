import { IInputArea } from '@shared/ui/input-area/model'

const getMarriageRegistrationCertificate = (): IInputArea => {
    return {
        title: 'Свидетельство о регистрации брака',
        data: [],
        documents: {
            files: [],
            fieldName: 'marriageRegistrationCertificate',
            required: true,
            maxFiles: 1,
            allowedTypes: ['pdf'],
        },
    }
}

export default getMarriageRegistrationCertificate

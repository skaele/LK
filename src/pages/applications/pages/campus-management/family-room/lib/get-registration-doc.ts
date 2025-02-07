import { IInputArea } from '@shared/ui/input-area/model'

const getRegistrationDoc = (): IInputArea => {
    return {
        title: 'Регистрация заявителя',
        data: [],
        documents: {
            files: [],
            fieldName: 'registrationApplicant',
            required: true,
            maxFiles: 1,
            allowedTypes: ['pdf'],
        },
    }
}

export default getRegistrationDoc

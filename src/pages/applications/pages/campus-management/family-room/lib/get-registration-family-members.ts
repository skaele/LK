import { IInputArea } from '@shared/ui/input-area/model'

const getRegistrationFamilyMembers = (): IInputArea => {
    return {
        title: 'Регистрация членов семьи',
        data: [],
        documents: {
            files: [],
            fieldName: 'registrationFamilyMembers',
            required: true,
            maxFiles: 1,
            allowedTypes: ['pdf'],
        },
    }
}

export default getRegistrationFamilyMembers

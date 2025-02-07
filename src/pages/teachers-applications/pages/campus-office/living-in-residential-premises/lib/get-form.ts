import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'

import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Предоставление права проживания в жилом помещении',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                fieldName: 'address',
                title: 'Адрес регистрации',
                value: '',
                editable: true,
                required: true,
            },
            {
                fieldName: 'reason',
                title: 'Причина предоставления',
                type: 'textarea',
                value: '',
                editable: true,
                required: true,
            },
            {
                fieldName: 'commentary',
                title: 'Комментарий',
                type: 'textarea',
                value: '',
                editable: true,
            },
            {
                fieldName: '',
                title: 'Загрузить скан страницы паспорта с регистрацией',
                type: 'text-header',
                value: '',
            },
        ],
        documents: { files: [], fieldName: 'docs', required: true },
    }
}

export default getForm

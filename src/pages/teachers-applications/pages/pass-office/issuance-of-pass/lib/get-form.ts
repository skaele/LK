import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'

import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Выдача пропуска (повторная)',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                fieldName: 'reason',
                title: 'Причина выдачи',
                type: 'textarea',
                value: '',
                editable: true,
                required: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', required: false },
    }
}

export default getForm

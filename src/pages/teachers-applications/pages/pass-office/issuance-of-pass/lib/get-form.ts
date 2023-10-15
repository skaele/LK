import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'

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

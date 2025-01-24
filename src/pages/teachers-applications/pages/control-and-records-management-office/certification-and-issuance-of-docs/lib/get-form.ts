import { UserApplication } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Заверение и выдача копий внутренних документов',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                fieldName: 'commentary',
                title: 'Комментарий (укажите, какие документы и сколько копий вам необходимо)',
                placeholder: 'Комментарий',
                type: 'textarea',
                value: '',
                editable: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', required: false },
    }
}

export default getForm

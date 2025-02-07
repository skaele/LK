import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'

import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

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

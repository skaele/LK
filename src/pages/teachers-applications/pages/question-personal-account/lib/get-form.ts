import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import { getSiteAndAud } from '@pages/teachers-applications/lib/get-site-and-topic'

import { UserApplication } from '@shared/api/model'
import { isProduction } from '@shared/consts'
import { IInputArea } from '@shared/ui/input-area/model'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Вопрос по Личному кабинету',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            ...(isProduction ? [] : getSiteAndAud()),
            {
                title: 'Текст заявки',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
        ],
        documents: isProduction ? undefined : { files: [], fieldName: 'docs', maxFiles: 6, required: false },
    }
}

export default getForm

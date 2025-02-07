import { UserApplication } from '@api/model'

import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'

import { IInputArea } from '@ui/input-area/model'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Проход гостей на территорию студенческого городка',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                fieldName: 'commentary',
                title: 'Комментарий',
                type: 'textarea',
                value: '',
                editable: true,
            },
        ],
    }
}

export default getForm

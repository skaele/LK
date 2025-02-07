import { UserApplication } from '@api/model'

import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'

import { IInputArea } from '@ui/input-area/model'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Заказ гостевого пропуска',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                fieldName: 'guest_FIO',
                title: 'ФИО гостя',
                value: '',
                editable: true,
                required: true,
            },
            {
                fieldName: 'visit_date',
                title: 'Дата посещения',
                type: 'date',
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
        ],
        documents: { files: [], fieldName: 'docs', required: false },
    }
}

export default getForm

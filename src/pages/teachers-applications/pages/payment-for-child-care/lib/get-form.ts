import { IInputArea } from '@ui/input-area/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import { UserApplication } from '@api/model'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                title: 'Период справки',
                type: 'date',
                value: '',
                editable: true,
                fieldName: 'period',
                required: true,
            },
            {
                title: 'Способ получения справки',
                type: 'radio',
                fieldName: 'method_obtaining',
                value: null,
                editable: true,
                required: true,
                items: [
                    {
                        id: 7,
                        title: 'На электронную почту',
                    },
                    {
                        id: 10,
                        title: 'Получить в МФЦ/отделе',
                    },
                ],
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: false },
    }
}

export default getForm

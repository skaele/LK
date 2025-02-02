import { User, UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const getForm = (dataUserApplication: UserApplication, user: User): IInputArea => {
    return {
        title: 'Предоставление каникул в связи с окончанием университета',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                editable: true,
                required: true,
                value: dataUserApplication.phone,
            },

            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: dataUserApplication.email,
                editable: true,
                required: true,
            },
            {
                title: 'Срок предоставления каникул c',
                type: 'date',
                fieldName: 'time-before',
                value: user.vacation_start || '',
                editable: user.vacation_start ? false : true,
                required: true,
            },
            {
                title: 'по',
                type: 'date',
                fieldName: 'time-to',
                value: user.vacation_end || '',
                editable: user.vacation_end ? false : true,
                required: true,
            },
            {
                title: 'Комментарий к заявке',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
            },
        ],
        ...(user.vacation_end && user.vacation_start
            ? {}
            : {
                  hint: 'Точные сроки предоставления каникул уточняйте в своем отделении Центра по работе со студентами',
              }),
        documents: { files: [], fieldName: 'docs', maxFiles: 6, required: false },
    }
}

export default getForm

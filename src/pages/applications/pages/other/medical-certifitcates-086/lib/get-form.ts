import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

export const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { phone, email } = dataUserApplication

    return {
        title: 'Контактные данные',
        data: [
            {
                title: 'ФИО',
                value: `${dataUserApplication.surname} ${dataUserApplication.name} ${dataUserApplication.patronymic}`,
                fieldName: 'fio',
                width: '100%',
                editable: false,
            },
            {
                title: 'Телефон',
                value: phone,
                fieldName: 'phone',
                type: 'tel',
                width: '100%',
                editable: true,
                required: true,
                mask: true,
            },
            {
                title: 'Email',
                value: email,
                fieldName: 'email',
                type: 'email',
                width: '100%',
                editable: true,
                required: true,
            },
        ],
    }
}

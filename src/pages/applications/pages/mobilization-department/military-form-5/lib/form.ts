import getStudentSubdivisions from '@pages/applications/lib/get-student-subdivisions'

import getAddressFields from '@features/applications/lib/get-address-fields'
import getMethodObtainingFields from '@features/applications/lib/get-method-obtaining-fields'

import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

export const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic, email, phone } = dataUserApplication
    return {
        title: 'Справка в военкомат (форма 5)',
        data: [
            {
                title: 'ФИО',
                fieldName: 'fio',
                value: surname + ' ' + name + ' ' + patronymic,
                editable: false,
            },
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                value: phone,
                required: true,
            },
            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: email,
                editable: true,
                required: true,
            },
            ...getMethodObtainingFields(),
            ...getStudentSubdivisions(dataUserApplication),
            ...getAddressFields(),
            {
                title: 'Наименование военного комиссариата, куда направляется справка',
                value: '',
                fieldName: 'comissariat_name',
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Комментарий к заявке',
                placeholder: 'Комментарий',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
            },
        ],
    }
}

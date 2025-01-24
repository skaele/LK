import { UserApplication } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

import { getDefaultSubdivision } from '@pages/teachers-applications/lib/get-default-subdivision'

import { getFormattedSubDivisions } from '@features/applications/lib/get-formatted-subdivisions'

const getForm = (data: UserApplication): IInputArea => {
    const { surname, name, patronymic, subdivisions } = data
    return {
        title: 'Запрос на изменение корпоративной электронной почты',
        data: [
            {
                title: 'ФИО',
                fieldName: 'fio',
                value: surname + ' ' + name + ' ' + patronymic,
                editable: false,
            },
            {
                title: 'Подразделение/должность',
                value: getDefaultSubdivision(subdivisions),
                fieldName: 'guid_staff',
                editable: true,
                width: '100',
                required: true,
                type: 'select',
                items: getFormattedSubDivisions(subdivisions),
                isSpecificSelect: true,
            },
            {
                fieldName: 'email',
                title: 'Корпоративная электронная почта',
                type: 'email',
                value: '',
                required: true,
            },
            {
                fieldName: 'show_email_inner',
                title: 'Показывать корпоративную почту внутри Личного кабинета',
                type: 'checkbox',
                value: false,
            },
            {
                fieldName: 'show_email_outer',
                title: 'Показывать корпоративную почту на сайте',
                type: 'checkbox',
                value: false,
            },
        ],
    }
}

export default getForm

import { UserApplication } from '@api/model'

import { getDefaultSubdivision } from '@pages/teachers-applications/lib/get-default-subdivision'

import { getFormattedSubDivisions } from '@features/applications/lib/get-formatted-subdivisions'

import { IInputArea } from '@ui/input-area/model'

const getForm = (data: UserApplication): IInputArea => {
    const { surname, name, patronymic, subdivisions } = data
    return {
        title: 'Запрос на изменение внутреннего телефона',
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
                fieldName: 'phone_inner',
                title: 'Внутренний телефон',
                type: 'innerPhone',
                value: '',
                mask: true,
                required: true,
            },
            {
                fieldName: 'show_inner_phone_inner',
                title: 'Показывать внутренний телефон внутри Личного кабинета',
                type: 'checkbox',
                value: false,
            },
            {
                fieldName: 'show_inner_phone_outer',
                title: 'Показывать внутренний телефон на сайте',
                type: 'checkbox',
                value: false,
            },
        ],
    }
}

export default getForm

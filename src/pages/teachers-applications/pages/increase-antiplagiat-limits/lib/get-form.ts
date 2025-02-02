import { getDefaultSubdivision } from '@pages/teachers-applications/lib/get-default-subdivision'

import { getFormattedSubDivisions } from '@features/applications/lib/get-formatted-subdivisions'

import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const requestTypes = [
    { id: 0, title: 'Учебная деятельность' },
    { id: 1, title: 'Научная деятельность' },
]

const getForm = (data: UserApplication): IInputArea => {
    const { surname, name, patronymic, phone, subdivisions } = data
    return {
        title: 'Запрос на увеличение лимита проверок в системе «Антиплагиат»',
        data: [
            {
                title: 'ФИО',
                value: surname + ' ' + name + ' ' + patronymic,
                fieldName: 'fio',
                mask: true,
                editable: false,
                required: true,
            },
            {
                title: 'Подразделение/должность',
                value: getDefaultSubdivision(subdivisions),
                fieldName: 'guid_staff',
                editable: getFormattedSubDivisions(subdivisions).length > 1,
                width: '100',
                required: true,
                type: 'select',
                items: getFormattedSubDivisions(subdivisions),
                isSpecificSelect: true,
            },
            {
                title: 'Контактный телефон',
                type: 'tel',
                value: phone,
                fieldName: 'phone_private',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Тип запроса',
                value: null,
                fieldName: 'req_type',
                editable: true,
                width: '100',
                required: true,
                type: 'select',
                items: requestTypes,
            },
            {
                title: 'Количество проверок',
                fieldName: 'checks_amount',
                type: 'number',
                value: '',
                editable: true,
                required: true,
                mask: true,
                customMask: (value) => (Number(value) > 300 ? '299' : value),
            },
            {
                title: 'Комментарий к заявке',
                placeholder: 'Укажите, для чего необходимо увеличение лимита',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
            },
        ],
    }
}

export default getForm

import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import { sites } from '../../phonebook/lib/get-form'
import { getSubDivisions } from '@features/applications/lib/get-subdivisions'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Внесение изменений данных подразделения в телефонном справочнике',
        data: [
            {
                title: 'Наименование подразделения',
                value: getSubDivisions(data.subdivisions)[0],
                fieldName: 'guid_staff',
                editable: getSubDivisions(data.subdivisions).length > 1,
                width: '100',
                required: true,
                type: 'select',
                items: getSubDivisions(data.subdivisions),
                isSpecificSelect: true,
            },
            {
                fieldName: 'email',
                title: 'Общая корпоративная почта подразделения',
                type: 'email',
                value: '',
            },
            {
                title: 'Общий прямой телефон',
                type: 'tel',
                value: '',
                fieldName: 'phone_direct',
            },
            {
                title: 'Общий внутренний телефон',
                type: 'innerPhone',
                value: '',
                mask: true,
                fieldName: 'phone_direct',
            },
            {
                fieldName: 'address',
                title: 'Адрес рабочего места',
                type: 'select',
                value: null,
                items: sites,
                width: '100',
                editable: true,
                required: true,
            },
            {
                fieldName: 'room',
                title: 'Номер кабинета',
                type: 'cabinet',
                mask: true,
                value: '',
                editable: true,
                required: true,
            },
        ],
    }
}

export default getForm

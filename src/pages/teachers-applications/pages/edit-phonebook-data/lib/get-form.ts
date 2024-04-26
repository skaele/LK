import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import { sites } from '../../phonebook/lib/get-form'
import { getSubDivisions } from '@features/applications/lib/get-subdivisions'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Внесение изменений данных подразделения в телефонном справочнике',
        data: [
            {
                title: 'Подразделение/должность',
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
                fieldName: 'email_staff',
                title: 'Корпоративная электронная почта',
                type: 'email',
                value: '',
                required: true,
            },
            {
                title: 'Служебный мобильный телефон',
                type: 'tel',
                value: '',
                fieldName: 'tel_mob_staff',
                mask: true,
            },
            {
                title: 'Внутренний телефон',
                type: 'innerPhone',
                value: '',
                mask: true,
                fieldName: 'tel_staff',
                minValueLength: 4,
            },
            {
                fieldName: 'site',
                title: 'Адрес рабочего места',
                type: 'select',
                value: null,
                items: sites,
                width: '100',
                editable: true,
                required: true,
            },
            {
                fieldName: 'aud_number',
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

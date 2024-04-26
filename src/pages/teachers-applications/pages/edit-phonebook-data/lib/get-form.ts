import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import { sites } from '../../phonebook/lib/get-form'
import { getSubDivisions } from '@features/applications/lib/get-subdivisions'
import findCurrentInSelect from '@shared/ui/input-area/lib/find-current-in-select'
import { getCabinetInitialValue } from '../../phonebook/lib/getCabinetMask'

const getForm = (data: UserApplication, address: string, setAddress: (address: string) => void): IInputArea => {
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
                mask: true,
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
                value: findCurrentInSelect(sites, address),
                items: sites,
                onChange: (val) => setAddress(val.title),
                width: '100',
                editable: true,
                required: true,
            },
            {
                fieldName: 'room',
                title: 'Номер кабинета',
                type: 'cabinet',
                mask: true,
                value: getCabinetInitialValue(address),
                editable: true,
                required: true,
            },
        ],
    }
}

export default getForm

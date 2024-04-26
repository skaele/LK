import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import { sites } from '../../phonebook/lib/get-form'
import { getSubDivisions } from '@features/applications/lib/get-subdivisions'
import findCurrentInSelect from '@shared/ui/input-area/lib/find-current-in-select'
import { getCabinetInitialValue } from '../../phonebook/lib/getCabinetMask'

const getForm = (
    data: UserApplication,
    subdivision: string,
    setSubdivision: (subdivision: string) => void,
    email: string,
    setEmail: (email: string) => void,
    mobile: string,
    setMobile: (mobile: string) => void,
    innerPhone: string,
    setInnerPhone: (innerPhone: string) => void,
    address: string,
    setAddress: (address: string) => void,
    room: string,
    setRoom: (room: string) => void,
): IInputArea => {
    const subdivisions = getSubDivisions(data.subdivisions)
    return {
        title: 'Внесение изменений данных подразделения в телефонном справочнике',
        data: [
            {
                title: 'Наименование подразделения',
                value: findCurrentInSelect(subdivisions, subdivision) || getSubDivisions(data.subdivisions)[0],
                onChange: (val) => setSubdivision(val.title),
                fieldName: 'guid_staff',
                editable: subdivisions.length > 1,
                width: '100',
                required: true,
                type: 'select',
                items: subdivisions,
                isSpecificSelect: true,
            },
            {
                fieldName: 'email',
                value: email,
                onChange: setEmail,
                title: 'Общая корпоративная почта подразделения',
                type: 'email',
            },
            {
                title: 'Общий прямой телефон',
                type: 'tel',
                value: mobile,
                onChange: setMobile,
                fieldName: 'phone_direct',
                mask: true,
            },
            {
                title: 'Общий внутренний телефон',
                type: 'innerPhone',
                value: innerPhone,
                onChange: setInnerPhone,
                mask: true,
                fieldName: 'phone_direct',
            },
            {
                fieldName: 'address',
                title: 'Адрес рабочего места',
                type: 'select',
                value: findCurrentInSelect(sites, address),
                items: sites,
                onChange: (val) => {
                    setAddress(val.title)
                    setRoom(getCabinetInitialValue(val.title))
                },
                width: '100',
                editable: true,
                required: true,
            },
            {
                fieldName: 'room',
                title: 'Номер кабинета',
                type: 'cabinet',
                mask: true,
                value: room,
                onChange: setRoom,
                editable: true,
                required: true,
            },
        ],
    }
}

export default getForm

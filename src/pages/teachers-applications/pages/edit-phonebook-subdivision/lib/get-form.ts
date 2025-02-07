import { User } from '@api/model'

import { getSubivisions } from '@features/applications/lib/get-subdivisions'

import findCurrentInSelect from '@shared/ui/input-area/lib/find-current-in-select'

import { IInputArea } from '@ui/input-area/model'

import { sites } from '../../contact-details/lib/get-form'
import { getCabinetInitialValue } from '../../contact-details/lib/getCabinetMask'

const getForm = (
    data: User,
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
    const headDivisions = getSubivisions(data.head_div)
    return {
        title: 'Внесение изменений данных подразделения в телефонном справочнике',
        data: [
            {
                fieldName: 'guid',
                title: 'Наименование подразделения',
                value: findCurrentInSelect(headDivisions, subdivision) || getSubivisions(data.head_div)[0],
                onChange: (val) => setSubdivision(val.title),
                editable: headDivisions.length > 1,
                width: '100',
                required: true,
                type: 'select',
                items: headDivisions,
                isSpecificSelect: true,
            },
            {
                fieldName: 'email',
                value: email,
                onChange: setEmail,
                title: 'Общая корпоративная электронная почта',
                type: 'email',
            },
            {
                fieldName: 'phone_direct',
                title: 'Общий прямой телефон',
                type: 'tel',
                value: mobile,
                onChange: setMobile,
                mask: true,
            },
            {
                fieldName: 'phone_inner',
                title: 'Общий внутренний телефон',
                type: 'innerPhone',
                value: innerPhone,
                onChange: setInnerPhone,
                mask: true,
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

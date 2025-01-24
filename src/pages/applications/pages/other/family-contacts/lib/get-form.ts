import { UserApplication } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

import { FamilyContacts } from '@shared/api/family-contacts-api'
import findCurrentInSelect from '@shared/ui/input-area/lib/find-current-in-select'

const relatives = [
    { id: 0, title: 'Брат' },
    { id: 1, title: 'Сестра' },
    { id: 2, title: 'Бабушка' },
    { id: 3, title: 'Дедушка' },
    { id: 4, title: 'Тетя' },
    { id: 5, title: 'Дядя' },
    { id: 6, title: 'Другое' },
]
export const getForm = (dataUserApplication: UserApplication, { email, phone }: FamilyContacts): IInputArea => {
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
export const getRelativeForm = (
    relative: 'Мать' | 'Отец',
    prefix: string,
    { m_fio, m_phone, m_job, f_fio, f_phone, f_job }: FamilyContacts,
): IInputArea => {
    return {
        title: `Контактные данные родителей (${relative})`,
        data: [
            {
                title: 'Телефон',
                value: relative === 'Мать' ? m_phone : f_phone,
                fieldName: prefix + 'phone',
                type: 'tel',
                width: '100%',
                editable: true,
                mask: true,
            },
            {
                title: 'ФИО',
                value: relative === 'Мать' ? m_fio : f_fio,
                fieldName: prefix + 'fio',
                width: '100%',
                editable: true,
            },
            {
                title: 'Место работы',
                value: relative === 'Мать' ? m_job : f_job,
                fieldName: prefix + 'job',
                width: '100%',
                editable: true,
            },
        ],
    }
}
export const getAbstractRelativeForm = ({ relative, r_phone, r_fio, r_job }: FamilyContacts): IInputArea => {
    return {
        title: `Контактные данные родственников`,
        data: [
            {
                title: 'Член семьи',
                value: findCurrentInSelect(relatives, relative),
                fieldName: 'relative',
                type: 'select',
                items: relatives,
                width: '100%',
                editable: true,
            },
            {
                title: 'Телефон',
                value: r_phone,
                fieldName: 'r_phone',
                type: 'tel',
                width: '100%',
                editable: true,
                mask: true,
            },
            {
                title: 'ФИО',
                value: r_fio,
                fieldName: 'r_fio',
                width: '100%',
                editable: true,
            },
            {
                title: 'Место работы',
                value: r_job,
                fieldName: 'r_job',
                width: '100%',
                editable: true,
            },
        ],
    }
}

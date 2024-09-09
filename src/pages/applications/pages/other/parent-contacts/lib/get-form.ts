import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'

const relatives = [
    { id: 0, title: 'Брат' },
    { id: 1, title: 'Сестра' },
    { id: 2, title: 'Бабушка' },
    { id: 3, title: 'Дедушка' },
    { id: 4, title: 'Тетя' },
    { id: 5, title: 'Дядя' },
    { id: 6, title: 'Другое' },
]
export const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { phone, email } = dataUserApplication

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
export const getRelativeForm = (relative: 'Мать' | 'Отец', prefix: string): IInputArea => {
    return {
        title: `Контактные данные родителей (${relative})`,
        data: [
            {
                title: 'Телефон',
                value: '',
                fieldName: prefix + 'phone',
                type: 'tel',
                width: '100%',
                editable: true,
                mask: true,
            },
            {
                title: 'ФИО',
                value: '',
                fieldName: prefix + 'fio',
                width: '100%',
                editable: true,
            },
            {
                title: 'Место работы',
                value: '',
                fieldName: prefix + 'job',
                width: '100%',
                editable: true,
            },
        ],
    }
}
export const getAbstractRelativeForm = (): IInputArea => {
    return {
        title: `Контактные данные родственников`,
        data: [
            {
                title: 'Член семьи',
                value: null,
                fieldName: 'address',
                type: 'select',
                items: relatives,
                width: '100%',
                editable: true,
            },
            {
                title: 'Телефон',
                value: '',
                fieldName: 'r_phone',
                type: 'tel',
                width: '100%',
                editable: true,
                mask: true,
            },
            {
                title: 'ФИО',
                value: '',
                fieldName: 'r_fio',
                width: '100%',
                editable: true,
            },
            {
                title: 'Место работы',
                value: '',
                fieldName: 'r_job',
                width: '100%',
                editable: true,
            },
        ],
    }
}

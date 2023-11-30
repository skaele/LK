import { ContactInfoActualization, UserApplication } from '@api/model'
import { getFormattedSubDivisions } from '@features/applications/lib/get-subdivisions'
import { getDefaultSubdivision } from '@pages/teachers-applications/lib/get-default-subdivision'
import { IInputArea } from '@ui/input-area/model'
const sites = [
    {
        id: '0',
        title: 'Б. Семёновская, д. 38',
    },
    {
        id: '1',
        title: '1-я Дубровская, д. 16а',
    },
    {
        id: '2',
        title: 'Павла Корчагина, д. 22',
    },
    {
        id: '3',
        title: 'Автозаводская, д. 16',
    },
    {
        id: '4',
        title: 'Лефортовский вал, д. 26',
    },
    {
        id: '5',
        title: 'Прянишникова, д. 2А',
    },
    {
        id: '6',
        title: 'Садовая-Спасская, д. 6',
    },
    {
        id: '7',
        title: 'Михалковская, д. 7',
    },
    {
        id: '7',
        title: 'Михалковская, д. 7',
    },
]

const getForm = (data: ContactInfoActualization, dataForm: UserApplication): IInputArea => {
    const { subdivisions } = dataForm
    return {
        title: 'Актуализация контактных данных',
        data: [
            {
                title: 'Служебный мобильный телефон',
                type: 'tel',
                value: data?.tel_mob_staff,
                fieldName: 'tel_mob_staff',
                mask: true,
            },
            {
                title: 'Служебный телефон (прямой/дополнительный)',
                type: 'tel',
                value: data?.tel_staff,
                fieldName: 'tel_staff',
            },
            {
                fieldName: 'site',
                title: 'Площадка (надо обновить)',
                type: 'select',
                value: null,
                items: sites,
                width: '100',
                editable: true,
                required: true,
            },
            {
                fieldName: 'aud_number',
                title: 'Номер аудитории',
                value: '',
                editable: true,
                required: true,
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
                title: 'Рабочий email',
                type: 'email',
                value: data.email_staff,
                fieldName: 'email_staff',
            },
            {
                title: 'Почта отдела / Телефон отдела',
                value: '',
                fieldName: 'subdivision_contacts',
            },
        ],
    }
}

export default getForm

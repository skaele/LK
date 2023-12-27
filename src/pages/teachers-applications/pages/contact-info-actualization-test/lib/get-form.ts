import { ContactInfoActualization, UserApplication } from '@api/model'
import { getFormattedSubDivisions } from '@features/applications/lib/get-subdivisions'
import { getDefaultSubdivision } from '@pages/teachers-applications/lib/get-default-subdivision'
import { IInputArea } from '@ui/input-area/model'
const sites = [
    {
        id: '0',
        title: 'ул. Большая Семёновская, 38',
    },
    {
        id: '1',
        title: 'ул. Прянишникова, 2А',
    },
    {
        id: '2',
        title: 'ул. Автозаводская, 16',
    },
    {
        id: '3',
        title: 'ул. Павла Корчагина, 22',
    },
    {
        id: '4',
        title: 'ул. Михалковская, 7',
    },
    {
        id: '5',
        title: 'ул. Садовая-Спасская, 6',
    },
    {
        id: '6',
        title: 'ул. Малая Семеновская, 12',
    },
    {
        id: '7',
        title: 'ул. Лефортовский вал, 26',
    },
    {
        id: '8',
        title: 'ул. 1-я Дубровская, 16а',
    },
    {
        id: '9',
        title: 'ул. 7-я Парковая, 9/26',
    },
    {
        id: '10',
        title: 'ул. 800-летия Москвы, 28 корп. 1',
    },
    {
        id: '11',
        title: 'ул. Михалковская, 7, корп. 3',
    },
    {
        id: '12',
        title: 'ул. Бориса Галушкина, 9',
    },
    {
        id: '13',
        title: 'ул. Павла Корчагина, 20А, корп. 3',
    },
    {
        id: '14',
        title: 'Рижский проезд, 15, корп. 1',
    },
    {
        id: '15',
        title: 'Рижский проезд, 15, корп. 2',
    },
    {
        id: '16',
        title: '1-й Балтийский переулок, 6/21, корп. 3',
    },
]

const getForm = (data: ContactInfoActualization, dataForm: UserApplication): IInputArea => {
    const { subdivisions } = dataForm
    return {
        title: 'Актуализация контактных данных',
        data: [
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
                title: 'Рабочий email',
                type: 'email',
                value: data.email_staff,
                fieldName: 'email_staff',
            },
            {
                fieldName: 'tel_mob_private',
                title: 'Площадка',
                type: 'select',
                value: null,
                items: sites,
                width: '100',
                editable: true,
                required: true,
            },
            {
                fieldName: 'email_private',
                title: 'Номер аудитории',
                value: '',
                editable: true,
                required: true,
            },
        ],
    }
}

export default getForm

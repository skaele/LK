import { ContactDetails, Subdivision } from '@api/model'
import findCurrentInSelect from '@shared/ui/input-area/lib/find-current-in-select'
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

const getForm = (data: ContactDetails, subdivision: Subdivision): IInputArea => {
    return {
        title: 'Актуализируйте контактные данные',
        data: [
            {
                fieldName: 'guid_staff',
                title: 'Подразделение/должность',
                value: subdivision.guid_staff,
                width: '100',
                required: true,
                type: 'text',
                visible: false,
            },
            {
                fieldName: '',
                title: `${subdivision.subdivision} (${subdivision.post})`,
                value: `${subdivision.subdivision} (${subdivision.post})`,
                width: '100',
                required: true,
                type: 'text-header',
                visible: true,
            },
            {
                fieldName: 'site',
                title: 'Площадка',
                type: 'select',
                value: findCurrentInSelect(sites, data.site as string),
                items: sites,
                width: '100',
                editable: true,
                required: true,
            },
            {
                fieldName: 'aud_number',
                title: 'Номер аудитории',
                value: data.aud_number,
                editable: true,
                required: true,
            },
            {
                fieldName: 'email_staff',
                title: 'Рабочий email',
                type: 'email',
                value: data.email_staff,
                required: true,
            },
            {
                title: 'Показывать рабочий email внутри Личного кабинета',
                fieldName: 'show_email_inner',
                type: 'checkbox',
                value: data.show_email_inner ?? true,
            },
            {
                title: 'Показывать рабочий email на сайте',
                fieldName: 'show_email_outer',
                type: 'checkbox',
                value: data.show_email_outer ?? true,
            },
            {
                title: 'Служебный мобильный телефон',
                type: 'tel',
                value: data?.tel_mob_staff,
                fieldName: 'tel_mob_staff',
                mask: true,
            },
            {
                title: 'Показывать мобильный телефон внутри Личного кабинета',
                fieldName: 'show_tel_mob_staff_inner',
                type: 'checkbox',
                value: data.show_tel_mob_staff_inner ?? true,
            },
            {
                title: 'Показывать мобильный телефон на сайте',
                fieldName: 'show_tel_mob_staff_outer',
                type: 'checkbox',
                value: data.show_tel_mob_staff_outer ?? true,
            },
            {
                title: 'Служебный телефон (прямой/добавочный)',
                type: 'tel',
                value: data?.tel_staff,
                fieldName: 'tel_staff',
            },
            {
                title: 'Показывать служебный телефон внутри Личного кабинета',
                fieldName: 'show_tel_staff_inner',
                type: 'checkbox',
                value: data.show_tel_staff_inner ?? true,
            },
            {
                title: 'Показывать служебный телефон на сайте',
                fieldName: 'show_tel_staff_outer',
                type: 'checkbox',
                value: data.show_tel_staff_outer ?? true,
            },
        ],
    }
}

export default getForm

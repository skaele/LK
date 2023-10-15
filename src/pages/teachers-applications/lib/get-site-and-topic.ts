import { IInputAreaData } from '@ui/input-area/model'

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
]

export const getSiteAndAud = (): IInputAreaData[] => {
    return [
        {
            fieldName: 'site',
            title: 'Площадка',
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
    ]
}

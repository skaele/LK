import { ColumnProps } from '@shared/ui/table/types'

export const getScienceColumns = (): ColumnProps[] => [
    {
        title: 'Название пуликации',
        priority: 'one',
        field: 'articleTitle',
        width: '220px',
    },
    {
        title: 'Авторы',
        field: 'authors',
    },
    {
        title: 'Год',
        field: 'doi',
        width: '80px',
    },
    {
        title: 'Издательство',
        field: 'response_div',
        width: '180px',
    },
    {
        title: 'Scopus',
        field: 'isScopus',
        width: '100px',
    },
    {
        title: 'WoS',
        field: 'isWos',
        width: '100px',
    },
    { title: 'Тип', field: 'documentType' },
]

import { ColumnProps } from '@shared/ui/table/types'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'

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
        width: '100px',
        showFull: true,
    },
    {
        title: 'Год',
        field: 'doi',
        width: '120px',
        align: 'center',
        catalogs: [
            { id: '2020', title: '2020' },
            { id: '2021', title: '2021' },
            { id: '2022', title: '2022' },
            { id: '2023', title: '2023' },
            { id: '2024', title: '2024' },
        ],
    },
    {
        title: 'Издательство',
        field: 'sourceTitle',
        width: '150px',
        showFull: true,
    },
    {
        title: 'Scopus',
        field: 'isScopus',
        width: '100px',
        align: 'center',
        render: (value) => !!value && <FaCheck />,
    },
    {
        title: 'WoS',
        field: 'isWos',
        width: '100px',
        align: 'center',
        render: (value) => !!value && <FaCheck />,
    },
    { title: 'Тип', showFull: true, field: 'documentType' },
]

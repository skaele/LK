import { ColumnProps } from '@shared/ui/table/types'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'

export const getDefaultColumns = (): ColumnProps[] => [
    {
        title: 'Название пуликации',
        priority: 'one',
        field: 'articleTitle',
        width: '220px',
        showFull: true,
    },
    {
        title: 'Авторы',
        field: 'authors',
        width: '180px',
        showFull: true,
    },
    {
        title: 'Год',
        field: 'publicationYear',
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
        field: 'publisher',
        width: '150px',
        showFull: true,
    },
    {
        title: 'Номер страницы',
        field: 'pageNumber',
        width: '150px',
        render: (value) => (value ? value : '-'),
    },
    {
        title: 'Scopus',
        field: 'isScopus',
        width: '100px',
        align: 'center',
        render: (value) => value && <FaCheck />,
    },
    {
        title: 'WoS',
        field: 'isWoS',
        width: '100px',
        align: 'center',
        render: (value) => value && <FaCheck />,
    },
    { title: 'Тип', showFull: true, field: 'publicationType' },
    { title: 'Количество цитирований', field: 'quotesCount' },
    { title: 'DOI', field: 'doi' },
    { title: 'Источник финансирования', field: 'fundingSource' },
]

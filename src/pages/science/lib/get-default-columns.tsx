import { ColumnProps } from '@shared/ui/table/types'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'

export const getDefaultColumns = (): ColumnProps[] => [
    {
        title: 'Название публикации',
        field: 'articleTitle',
        width: '200px',
        showFull: true,
        align: 'center',
    },
    {
        title: 'Авторы',
        field: 'authors',
        width: '150px',
        showFull: true,
        align: 'center',
    },
    {
        title: 'Год',
        field: 'publicationYear',
        width: '100px',
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
        showFull: true,
        align: 'center',
    },
    {
        title: 'Номер страницы',
        field: 'pageNumber',
        width: '120px',
        render: (value) => (value ? value : '-'),
        showFull: true,
        align: 'center',
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
    { title: 'Тип', showFull: true, field: 'publicationType', align: 'center' },
    { title: 'Количество цитирований', field: 'quotesCount', showFull: true, width: '130px', align: 'center' },
    { title: 'DOI', field: 'doi', showFull: true, align: 'center' },
    { title: 'Источник финансирования', field: 'fundingSource', showFull: true, width: '170px', align: 'center' },
]

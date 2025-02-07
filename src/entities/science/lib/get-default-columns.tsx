import React from 'react'
import { FaCheck } from 'react-icons/fa6'

import { ColumnProps } from '@shared/ui/table/types'

export const getDefaultColumns = (): ColumnProps[] => [
    {
        title: 'Название публикации',
        field: 'articleTitle',
        width: '150px',
        showFull: true,
        align: 'center',
    },
    {
        title: 'Авторы',
        field: 'authors',
        width: '130px',
        showFull: true,
        align: 'center',
    },
    {
        title: 'Год',
        field: 'publicationYear',
        width: '100px',
        align: 'center',
        sort: true,
        search: true,
    },
    {
        title: 'Издательство',
        field: 'publisher',
        showFull: true,
        align: 'center',
        sort: true,
        search: true,
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
        width: '115px',
        align: 'center',
        render: (value) => value && <FaCheck />,
        sort: true,
        search: true,
    },
    {
        title: 'WoS',
        field: 'isWoS',
        width: '110px',
        align: 'center',
        render: (value) => value && <FaCheck />,
        sort: true,
        search: true,
    },
    { title: 'Тип', showFull: true, field: 'publicationType', align: 'center' },
    {
        title: 'Количество цитирований',
        field: 'quotesCount',
        showFull: true,
        width: '165px',
        align: 'center',
        sort: true,
        search: true,
    },
    { title: 'DOI', field: 'doi', showFull: true, align: 'center' },
    { title: 'Источник финансирования', field: 'fundingSource', showFull: true, width: '170px', align: 'center' },
]

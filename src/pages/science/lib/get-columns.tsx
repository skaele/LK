import { getDefaultColumns } from '@entities/science/lib/get-default-columns'
import { ColumnProps } from '@shared/ui/table/types'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'

export const getScienceColumns = (): ColumnProps[] => [
    ...getDefaultColumns(),
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
    { title: 'Тип', showFull: true, field: 'publicationType' },
]

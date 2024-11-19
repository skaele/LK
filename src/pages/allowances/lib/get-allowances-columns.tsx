import React from 'react'
import { allowanceStatus } from '@entities/allowances/consts'
import { Message } from '@shared/ui/atoms'
import { ColumnProps } from '@shared/ui/table/types'
import { AllowanceFiles, AllowanceStatus } from '@entities/allowances/types'

export const getAllowancesColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Дата',
            field: 'createdAt',
            priority: 'one',
            sort: true,
            type: 'date',
            align: 'center',
            width: '120px',
        },
        {
            title: 'Тип',
            field: 'paymentIdentifier',
            priority: 'one',
            width: '150px',
            showFull: true,
            render: (value) => value || '-',
        },
        {
            title: 'Источник финансирования',
            field: 'sourceOfFunding',
            priority: 'three',
            showFull: true,
            width: '175px',
            render: (value) => value || '-',
        },
        {
            title: 'Статус',
            field: 'allowanceStatus',
            priority: 'one',
            width: '165px',
            showFull: true,
            catalogs: [...(Object.values(allowanceStatus).map((val, i) => ({ id: i.toString(), title: val })) ?? [])],
            render: (value: AllowanceStatus) => {
                return (
                    <Message
                        type={value === 'Completed' ? 'success' : value === 'Cancelled' ? 'failure' : 'alert'}
                        title={value || '—'}
                        align="center"
                        icon={null}
                    />
                )
            },
        },
        { title: 'Комментарий', width: '160px', field: 'commentary', priority: 'two', render: (value) => value || '-' },
        {
            title: 'Файлы',
            field: 'files',
            priority: 'two',
            width: '100px',
            align: 'center',
            showFull: true,
            render: (value: AllowanceFiles) => value.application.length + value.other.length || '-',
        },
    ]
}

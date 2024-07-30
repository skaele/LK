import React from 'react'
import { allowanceConstants, AllowancesApprovalResponse } from '@entities/allowances/consts'
import { Message } from '@shared/ui/atoms'
import { ColumnProps } from '@shared/ui/table/types'
import { AllowanceFiles } from '@entities/allowances/types'

export const getAllowancesColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Дата',
            field: 'createdAt',
            priority: 'two',
            sort: true,
            type: 'date',
            align: 'center',
            width: '120px',
        },
        {
            title: 'Тип',
            field: 'paymentIdentifier',
            priority: 'three',
            width: '150px',
            render: (value) => value || '-',
        },
        {
            title: 'Источник финансирования',
            field: 'sourceOfFunding',
            priority: 'four',
            width: '150px',
            render: (value) => value || '-',
        },
        {
            title: 'Статус',
            field: 'status',
            priority: 'one',
            width: '165px',
            catalogs: [
                ...(Object.values(allowanceConstants).map((val, i) => ({ id: i.toString(), title: val })) ?? []),
            ],
            render: (value: AllowancesApprovalResponse) => {
                return (
                    <Message
                        type={value === 'Согласовано' ? 'success' : value === 'Отклонено' ? 'failure' : 'alert'}
                        title={value || '—'}
                        align="center"
                        icon={null}
                    />
                )
            },
        },
        { title: 'Комментарий', field: 'commentary', render: (value) => value || '-' },
        {
            title: 'Файлы',
            field: 'files',
            width: '100px',
            align: 'center',
            render: (value: AllowanceFiles) =>
                value.application.length + value.other.length + value.order.length || '-',
        },
    ]
}

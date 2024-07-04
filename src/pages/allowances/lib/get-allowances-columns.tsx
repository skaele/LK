import React from 'react'
import { allowanceConstants } from '@entities/allowances/consts'
import { Message } from '@shared/ui/atoms'
import { ColumnProps } from '@shared/ui/table/types'
import { AllowancesApprovalStatus } from '@entities/allowances/types'

export const getAllowancesColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Тип',
            field: 'allowanceType',
            priority: 'three',
            width: '150px',
            render: (value) => value.name || '-',
        },
        {
            title: 'Вид деятельности',
            field: 'activityArea',
            priority: 'two',
            width: '150px',
            render: (value) => value.name || '-',
        },
        {
            title: 'Источник финансирования',
            field: 'fundingSource',
            priority: 'four',
            width: '150px',
            render: (value) => value.name || '-',
        },
        { title: 'Комментарий', field: 'commentary' },
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
            title: 'Статус',
            field: 'status',
            priority: 'one',
            width: '165px',
            catalogs: [
                ...(Object.values(allowanceConstants).map((val, i) => ({ id: i.toString(), title: val })) ?? []),
            ],
            render: (value: AllowancesApprovalStatus) => {
                return (
                    <Message
                        type={value === 'Approved' ? 'success' : value === 'Declined' ? 'failure' : 'alert'}
                        title={allowanceConstants[value] || '—'}
                        align="center"
                        icon={null}
                    />
                )
            },
        },
    ]
}

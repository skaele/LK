import React from 'react'
import { allownaceResponseConstants } from '@entities/allowances/consts'
import { Message } from '@shared/ui/atoms'
import { ColumnProps } from '@shared/ui/table/types'
import { AllowancesApprovalResponse } from '@entities/allowances/types'

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
        { title: 'Комментарий', field: 'commentary', render: (value) => value.name || '-' },
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
            catalogs: [...(allownaceResponseConstants.map((val, i) => ({ id: i.toString(), title: val })) ?? [])],
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
    ]
}

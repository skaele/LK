import React from 'react'
import { AllowanceConstants, AllowanceStatusType } from '@entities/allowances/consts'
import { Message } from '@shared/ui/atoms'
import { ColumnProps } from '@shared/ui/table/types'

export const getAllowancesColumns = (): ColumnProps[] => {
    return [
        { title: 'Заявление', field: 'application', priority: 'three', width: '150px', search: true },
        {
            title: 'Дата',
            field: 'created',
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
                ...(Object.values(AllowanceConstants).map((val, i) => ({ id: i.toString(), title: val })) ?? []),
            ],
            render: (value: AllowanceStatusType) => {
                return (
                    <Message
                        type={
                            value === 'Готово' || value === 'Выдано' || value === 'Получено' || value === 'Выполнена'
                                ? 'success'
                                : value === 'Отклонено'
                                ? 'failure'
                                : 'alert'
                        }
                        title={value || '—'}
                        align="center"
                        icon={null}
                    />
                )
            },
        },
        {
            title: 'Направление деятельности',
            priority: 'four',
            field: 'type',
            showFull: false,
            search: true,
        },
    ]
}

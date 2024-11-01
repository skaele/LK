import { hrOrderRegisterConstants } from '@entities/applications/consts'
import { SelectPage } from '@features/select'
import localizeDate from '@shared/lib/dates/localize-date'
import { Message } from '@ui/message'
import { ColumnProps } from '@ui/table/types'
import React from 'react'

const getHolidayWorkHistoryColumns = (jobs: SelectPage[]): ColumnProps[] => {
    return [
        {
            title: 'Дата',
            field: 'signedDate',
            type: 'date',
            width: '120px',
            sort: true,
        },
        {
            title: 'Статус',
            field: 'orderStatus',
            width: '175px',
            catalogs: [
                ...(Object.values(hrOrderRegisterConstants).map((val, i) => ({ id: i.toString(), title: val })) ?? []),
            ],
            render: (value, data) => {
                const title = value === 'Зарегистрирован' ? data.applicationApporvalStatus : value || 'На рассмотрении'
                return (
                    <Message
                        type={
                            title === 'Согласовано'
                                ? 'success'
                                : title === 'На регистрации'
                                ? 'info'
                                : title === 'Не утвержден' || value === 'Отменён'
                                ? 'failure'
                                : 'alert'
                        }
                        title={title}
                        align="center"
                        width="100%"
                        icon={null}
                        maxWidth="150px"
                    />
                )
            },
            priority: 'one',
        },
        {
            title: 'Должность',
            catalogs: jobs,
            field: 'positionName',
            width: '250px',
        },
        {
            title: 'Номер приказа',
            field: 'weekends',
            priority: 'one',
            align: 'center',
            render: (value) => value[0].type,
        },
        {
            title: 'Дата выхода',
            field: 'weekends',
            priority: 'one',
            align: 'center',
            // render: (value) => localizeDate(value.orderDate, 'numeric'),
            render: (value) => localizeDate(value[0].dates[0].date, 'numeric'),
        },
        {
            title: 'Количество часов',
            field: 'weekends',
            priority: 'one',
            align: 'center',
            // render: (value) => localizeDate(value.orderDate, 'numeric'),
            render: (value) => value[0].dates[0].hours,
        },
        { title: 'Файл заявления', priority: 'one', field: 'file', type: 'file' },
    ]
}

export default getHolidayWorkHistoryColumns

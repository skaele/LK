import downloadFile from '@pages/hr-applications/lib/get-file'
import localizeDate from '@shared/lib/dates/localize-date'
import { Button } from '@shared/ui/button'
import { Message } from '@ui/message'
import { ColumnProps } from '@ui/table/types'
import React from 'react'

const getHolidayWorkHistoryColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Дата',
            field: 'data',
            width: '100px',
            render: (value) => localizeDate(value?.status?.creationDate, 'numeric'),
        },
        {
            title: 'Статус',
            field: 'vacation',
            width: '150px',
            render: (value) => {
                return (
                    <Message
                        type={
                            value.status.orderStatus === 'Согласовано'
                                ? 'success'
                                : value.status.orderStatus === 'На регистрации'
                                ? 'info'
                                : value.status.orderStatus === 'Не утвержден' ||
                                  value.status.orderStatus === 'Не создано'
                                ? 'failure'
                                : 'alert'
                        }
                        title={value.status.orderStatus || '-'}
                        align="center"
                        width="100%"
                        icon={null}
                        maxWidth="150px"
                    />
                )
            },
        },
        {
            title: 'Должность',
            field: 'jobTitle',
            width: '250px',
            sort: true,
        },
        {
            title: 'Период',
            field: 'vacation',
            align: 'center',
            width: '200px',
            render: (value) => {
                return `${localizeDate(value?.period?.startDate, 'numeric')} - ${localizeDate(
                    value?.period?.endDate,
                    'numeric',
                )}`
            },
        },
        {
            title: 'Количество часов',
            field: 'data',
            align: 'center',
        },
        {
            title: 'Файл заявления',
            priority: 'one',
            field: 'downloadable',
            type: 'file',
            width: '200px',
            align: 'center',
            render: (value, data) => {
                if (data?.status?.downloadApplication)
                    return (
                        <Button
                            text="Скачать файл"
                            background="rgb(60,210,136)"
                            textColor="#fff"
                            id="downloadButton"
                            width={'150px'}
                            align="center"
                            minWidth={'150px'}
                            height="30px"
                            onClick={(e) => {
                                e.stopPropagation()
                                downloadFile('Weekend', data.documentGuid)
                            }}
                        />
                    )
                else return '-'
            },
        },
        {
            title: 'Согласие',
            field: 'data',
            align: 'center',
        },
    ]
}

export default getHolidayWorkHistoryColumns

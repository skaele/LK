import downloadFile from '@pages/hr-applications/lib/get-file'
import localizeDate from '@shared/lib/dates/localize-date'
import { TypesOfVacation } from '@shared/models/types-of-vacation'
import { Button } from '@shared/ui/button'
import { Message } from '@shared/ui/message'
import { ColumnProps } from '@ui/table/types'
import React from 'react'

export const getBufferHolidayPlanningColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Дата',
            field: 'creationDate',
            type: 'date',
            sort: true,
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
            title: 'Вид отпуска',
            field: 'vacation',
            render: (value) => {
                return TypesOfVacation[value?.typeOfVacation as keyof typeof TypesOfVacation] || '-'
            },
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
                                downloadFile(data.documentGuid, '0')
                            }}
                        />
                    )
                else return '-'
            },
        },
    ]
}

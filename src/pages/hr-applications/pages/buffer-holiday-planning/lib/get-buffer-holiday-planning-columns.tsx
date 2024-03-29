import { PersonnelDownloadButton } from '@pages/hr-applications/ui/atoms/personnel-download-button'
import localizeDate from '@shared/lib/dates/localize-date'
import { TypesOfVacation } from '@shared/models/types-of-vacation'
import Flex from '@shared/ui/flex'
import { Message } from '@shared/ui/message'
import { ColumnProps } from '@ui/table/types'
import React from 'react'

export const getBufferHolidayPlanningColumns = (): ColumnProps[] => {
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
            width: '150px',
            render: (value) => {
                return (
                    <Message
                        type={
                            value === 'Согласовано'
                                ? 'success'
                                : value === 'На регистрации'
                                ? 'info'
                                : value === 'Не утвержден' || value === 'Не создано'
                                ? 'failure'
                                : 'alert'
                        }
                        title={value || '-'}
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
            field: 'positionName',
            width: '250px',
            sort: true,
        },
        {
            title: 'Вид отпуска',
            field: 'typeOfVacation',
            render: (value: keyof typeof TypesOfVacation) => {
                return TypesOfVacation[value] || '-'
            },
        },
        {
            title: 'Период',
            field: 'vacation',
            align: 'center',
            width: '200px',
            render: (_, data) => {
                return `${localizeDate(data?.startDate, 'numeric')} - ${localizeDate(data?.endDate, 'numeric')}`
            },
        },
        {
            title: 'Файлы',
            priority: 'one',
            field: 'downloadable',
            type: 'file',
            width: '200px',
            align: 'center',
            render: (_, data) => {
                if (data?.downloadApplication || data?.downloadOrder)
                    return (
                        <Flex d="column" jc="center">
                            <div>
                                {data?.downloadApplication && (
                                    <PersonnelDownloadButton
                                        documentGuid={data.documentGuid}
                                        type="0"
                                        service="Vacation"
                                    />
                                )}
                            </div>
                            <div>
                                {data?.downloadOrder && (
                                    <PersonnelDownloadButton
                                        documentGuid={data.documentGuid}
                                        type="1"
                                        service="Vacation"
                                    />
                                )}
                            </div>
                        </Flex>
                    )
                else return '-'
            },
        },
    ]
}

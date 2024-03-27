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
            title: 'Файлы',
            priority: 'one',
            field: 'downloadable',
            type: 'file',
            width: '200px',
            align: 'center',
            render: (_, data) => {
                if (data?.vacation?.status?.downloadApplication || data?.vacation?.status?.downloadOrder)
                    return (
                        <Flex d="column" jc="center">
                            <div>
                                {data?.vacation?.status?.downloadApplication && (
                                    <PersonnelDownloadButton
                                        documentGuid={data.documentGuid}
                                        type="0"
                                        service="Vacation"
                                    />
                                )}
                            </div>
                            <div>
                                {data?.vacation?.status?.downloadOrder && (
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

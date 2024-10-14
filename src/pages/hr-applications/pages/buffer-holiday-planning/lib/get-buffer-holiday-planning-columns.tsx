import { hrOrderRegisterConstants } from '@entities/applications/consts'
import { SelectPage } from '@features/select'
import localizeDate from '@shared/lib/dates/localize-date'
import { TypesOfVacation } from '@shared/models/types-of-vacation'
import { Message } from '@shared/ui/message'
import { ColumnProps } from '@ui/table/types'
import React from 'react'

export const getBufferHolidayPlanningColumns = (jobs: SelectPage[]): ColumnProps[] => {
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
                                : title === 'Не утвержден' || title === 'Не создано' || title === 'На доработку'
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
        // {
        //     title: 'Файлы',
        //     priority: 'one',
        //     field: 'downloadable',
        //     type: 'file',
        //     width: '200px',
        //     align: 'center',
        //     render: (_, data) => {
        //         if (data?.downloadApplication || data?.downloadOrder)
        //             return (
        //                 <Flex d="column" jc="center">
        //                     <div>
        //                         {data?.downloadApplication && (
        //                             <PersonnelDownloadButton
        //                                 documentGuid={data.documentGuid}
        //                                 type="0"
        //                                 service="Vacation"
        //                             />
        //                         )}
        //                     </div>
        //                     <div>
        //                         {data?.downloadOrder && (
        //                             <PersonnelDownloadButton
        //                                 documentGuid={data.documentGuid}
        //                                 type="1"
        //                                 service="Vacation"
        //                             />
        //                         )}
        //                     </div>
        //                 </Flex>
        //             )
        //         else return '-'
        //     },
        // },
    ]
}

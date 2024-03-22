import localizeDate from '@shared/lib/dates/localize-date'
import { Message } from '@shared/ui/message'
import React from 'react'
import { ColumnProps } from '@ui/table/types'
import { Button } from '@shared/ui/button'
import downloadFile from '@pages/hr-applications/lib/get-file'

export const getMedicalExaminationHistoryColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Дата',
            field: 'signedDate',
            width: '100px',
            sort: true,
            type: 'date',
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
            field: 'jobTitle',
            sort: true,
        },
        {
            title: 'Дни',
            field: 'medicalExamination',
            align: 'center',
            width: '200px',
            render: (_, data) => {
                if (data?.startDate === data?.endDate) return localizeDate(data?.startDate, 'numeric')
                return `${localizeDate(data?.startDate, 'numeric')}, ${localizeDate(data?.endDate, 'numeric')}`
            },
        },
        {
            title: 'Файл заявления',
            priority: 'one',
            field: 'downloadable',
            type: 'file',
            width: '200px',
            align: 'center',
            render: (_, data) => {
                if (data?.downloadApplication)
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
                                downloadFile(data?.documentGuid, '0')
                            }}
                        />
                    )
                else return '-'
            },
        },
    ]
}

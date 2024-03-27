import localizeDate from '@shared/lib/dates/localize-date'
import { Message } from '@shared/ui/message'
import React from 'react'
import { ColumnProps } from '@ui/table/types'
import { PersonnelDownloadButton } from '@pages/hr-applications/ui/atoms/personnel-download-button'
import Flex from '@shared/ui/flex'

export const getMedicalExaminationHistoryColumns = (): ColumnProps[] => {
    return [
        {
            title: 'Дата',
            field: 'signedDate',
            width: '120px',
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
                                        service="MedicalExamination"
                                    />
                                )}
                            </div>
                            <div>
                                {data?.downloadOrder && (
                                    <PersonnelDownloadButton
                                        documentGuid={data.documentGuid}
                                        type="1"
                                        service="MedicalExamination"
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

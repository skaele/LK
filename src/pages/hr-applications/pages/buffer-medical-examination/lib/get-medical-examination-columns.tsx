import localizeDate from '@shared/lib/dates/localize-date'
import { Message } from '@shared/ui/message'
import React from 'react'
import { ColumnProps } from '@ui/table/types'
import { PersonnelDownloadButton } from '@pages/hr-applications/ui/atoms/personnel-download-button'
import Flex from '@shared/ui/flex'
import { hrOrderRegisterConstants } from '@entities/applications/consts'
import { SelectPage } from '@features/select'

export const getMedicalExaminationHistoryColumns = (jobs: SelectPage[]): ColumnProps[] => {
    return [
        {
            title: 'Дата',
            field: 'signedDate',
            align: 'center',
            width: '120px',
            sort: true,
            type: 'date',
            priority: 'two',
        },
        {
            title: 'Статус',
            field: 'orderStatus',
            width: '175px',
            catalogs: [
                ...(Object.values(hrOrderRegisterConstants).map((val, i) => ({ id: i.toString(), title: val })) ?? []),
            ],
            render: (value, data) => {
                const title = value === 'Зарегистрирован' ? data.applicationApporvalStatus : value || 'На рассмотрении*'
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
            field: 'positionName',
            catalogs: jobs,
        },
        {
            title: 'Дни',
            field: 'medicalExamination',
            align: 'center',
            width: '130px',
            render: (_, data) => {
                if (data?.startDate === data?.endDate) return localizeDate(data?.startDate, 'numeric')
                return `${localizeDate(data?.startDate, 'numeric')}, ${localizeDate(data?.endDate, 'numeric')}`
            },
            priority: 'four',
        },
        {
            title: 'Файлы',
            priority: 'four',
            field: 'downloadable',
            type: 'file',
            width: '150px',
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

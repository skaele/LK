import React from 'react'
import { ColumnProps } from '@ui/table/types'
import { getMedicalExaminationHistoryColumns } from './get-medical-examination-columns'
import { Button } from '@shared/ui/button'
import downloadFile from '@pages/hr-applications/lib/get-file'

export const getExtendedMedicalExaminationHistoryColumns = (): ColumnProps[] => {
    return [
        ...getMedicalExaminationHistoryColumns(),
        {
            title: 'Статус приказа',
            field: 'orderApprovalStatus',
            align: 'center',
            render: (value) => value || '-',
        },
        {
            title: 'Статус заявления',
            field: 'applicationApporvalStatus',
            align: 'center',
            render: (value) => value || '-',
        },

        {
            title: 'Файл приказа',
            priority: 'one',
            field: 'downloadable',
            type: 'file',
            width: '200px',
            align: 'center',
            render: (_, data) => {
                if (data?.downloadOrder)
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
                                downloadFile(data.documentGuid, '1')
                            }}
                        />
                    )
                else return '-'
            },
        },
    ]
}

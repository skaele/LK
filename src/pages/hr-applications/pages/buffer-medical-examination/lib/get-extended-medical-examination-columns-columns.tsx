import React from 'react'

import downloadFile from '@pages/hr-applications/lib/get-file'

import { Button } from '@shared/ui/button'
import { ColumnProps } from '@shared/ui/table/types'

import { getMedicalExaminationHistoryColumns } from './get-medical-examination-columns'

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
                                downloadFile(data?.documentGuid, '1')
                            }}
                        />
                    )
                else return '-'
            },
        },
    ]
}

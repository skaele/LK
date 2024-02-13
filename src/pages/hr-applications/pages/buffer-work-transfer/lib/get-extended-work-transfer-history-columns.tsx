import { ColumnProps } from '@ui/table/types'
import React from 'react'
import { getWorkTransferHistoryColumns } from './get-work-transfer-history-columns'
import downloadFile from '@pages/hr-applications/lib/get-file'
import { Button } from '@shared/ui/button'

export const getExtendedWorkTransferHistoryColumns = (): ColumnProps[] => {
    return [
        ...getWorkTransferHistoryColumns(),
        {
            title: 'Статус приказа',
            field: 'vacation',
            align: 'center',
            render: (value) => value?.status?.orderApprovalStatus || '-',
        },
        {
            title: 'Статус заявления',
            field: 'vacation',
            align: 'center',
            render: (value) => value?.status?.applicationApporvalStatus || '-',
        },
        {
            title: 'Файл приказа',
            priority: 'one',
            field: 'downloadable',
            type: 'file',
            width: '200px',
            align: 'center',
            render: (_, data) => {
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
                                downloadFile(data.documentGuid, '1')
                            }}
                        />
                    )
                else return '-'
            },
        },
    ]
}

import React from 'react'

import localizeDate from '@shared/lib/dates/localize-date'
import { getBufferHolidayPlanningColumns } from './get-buffer-holiday-planning-columns'
import { ColumnProps } from '@shared/ui/table/types'
import { Button } from '@shared/ui/button'
import downloadFile from '@pages/hr-applications/lib/get-file'

export const getExtendedBufferHolidayPlanningColumns = (): ColumnProps[] => {
    return [
        ...getBufferHolidayPlanningColumns(),
        {
            title: 'Дней',
            field: 'vacation',
            align: 'center',
            render: (value) => value?.period?.totalDays,
        },
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
            title: 'Перенесен',
            field: 'vacation',
            align: 'center',
            render: (_, data) => {
                if (data?.isCarriedOver)
                    return `Перенесен с ${localizeDate(
                        data?.carriedOver?.period?.startDate,
                        'numeric',
                    )} - ${localizeDate(data?.carriedOver?.period?.endDate, 'numeric')}`
                else return '-'
            },
        },

        {
            title: 'Файл приказа',
            priority: 'one',
            field: 'downloadable',
            type: 'file',
            width: '200px',
            align: 'center',
            render: (value, data) => {
                if (data?.status?.downloadOrder)
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
                                downloadFile(data.documentGuid, '1', 'Vacation')
                            }}
                        />
                    )
                else return '-'
            },
        },
    ]
}

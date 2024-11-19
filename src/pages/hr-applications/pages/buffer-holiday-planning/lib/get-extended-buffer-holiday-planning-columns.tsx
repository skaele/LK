import { SelectPage } from '@features/select'
import { getBufferHolidayPlanningColumns } from './get-buffer-holiday-planning-columns'
import { ColumnProps } from '@shared/ui/table/types'

export const getExtendedBufferHolidayPlanningColumns = (jobs: SelectPage[]): ColumnProps[] => {
    return [
        ...getBufferHolidayPlanningColumns(jobs),
        {
            title: 'Дней',
            field: 'totalDays',
            align: 'center',
            render: (value) => value,
        },
        {
            title: 'Статус',
            field: 'orderStatus',
            align: 'center',
            render: (value) => value || '-',
        },
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
            title: 'Комментарий',
            field: 'commentary',
            align: 'center',
            render: (value) => value || '-',
        },
        // {
        //     title: 'Перенесен',
        //     field: 'vacation',
        //     align: 'center',
        //     render: (_, data) => {
        //         if (data?.vacation?.isCarriedOver)
        //             return `Перенесен с ${localizeDate(
        //                 data?.carriedOver?.period?.startDate,
        //                 'numeric',
        //             )} - ${localizeDate(data?.vacation?.carriedOver?.period?.endDate, 'numeric')}`
        //         else return '-'
        //     },
        // },
    ]
}

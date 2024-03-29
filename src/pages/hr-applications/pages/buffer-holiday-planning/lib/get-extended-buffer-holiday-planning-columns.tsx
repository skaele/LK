import { getBufferHolidayPlanningColumns } from './get-buffer-holiday-planning-columns'
import { ColumnProps } from '@shared/ui/table/types'

export const getExtendedBufferHolidayPlanningColumns = (): ColumnProps[] => {
    return [
        ...getBufferHolidayPlanningColumns(),
        {
            title: 'Дней',
            field: 'totalDays',
            align: 'center',
            render: (value) => value,
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

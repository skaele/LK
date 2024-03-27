import localizeDate from '@shared/lib/dates/localize-date'
import { getBufferHolidayPlanningColumns } from './get-buffer-holiday-planning-columns'
import { ColumnProps } from '@shared/ui/table/types'

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
                if (data?.vacation?.isCarriedOver)
                    return `Перенесен с ${localizeDate(
                        data?.carriedOver?.period?.startDate,
                        'numeric',
                    )} - ${localizeDate(data?.vacation?.carriedOver?.period?.endDate, 'numeric')}`
                else return '-'
            },
        },
    ]
}

import { ColumnProps } from '@shared/ui/table/types'
import getHolidayWorkHistoryColumns from './get-holiday-work-history-columns'

export const getExtendedHolidayWorkHistoryColumns = (): ColumnProps[] => {
    return [
        ...getHolidayWorkHistoryColumns(),
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
            title: 'Причина',
            field: 'vacation',
            align: 'center',
            render: () => 'Тут должна быть причина',
        },
        {
            title: 'Вид компенсации',
            field: 'vacation',
            align: 'center',
            render: () => 'Тут должен быть вид компенсации',
        },
    ]
}

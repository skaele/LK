import { ColumnProps } from '@ui/table/types'
import { getMedicalExaminationHistoryColumns } from './get-medical-examination-columns'
import { SelectPage } from '@features/select'

export const getExtendedMedicalExaminationHistoryColumns = (jobs: SelectPage[]): ColumnProps[] => {
    return [
        ...getMedicalExaminationHistoryColumns(jobs),
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
    ]
}

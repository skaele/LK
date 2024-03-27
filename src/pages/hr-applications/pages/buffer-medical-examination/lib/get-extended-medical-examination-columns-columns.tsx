import { ColumnProps } from '@ui/table/types'
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
    ]
}

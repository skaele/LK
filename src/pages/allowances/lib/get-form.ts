import { HandbookItem } from '@entities/allowances/types'
import { SelectPage } from '@features/select'
import { JobRoles } from '@shared/api/model/allowances'
import { IInputArea } from '@shared/ui/input-area/model'

export const getJob = (data: JobRoles): IInputArea => {
    const subdivisions = data
        .filter((job) => job.roles.includes('Initiator'))
        .map((job) => ({
            id: job.employeeId,
            title: job.division,
        }))
    return {
        title: 'Подразделение',
        data: [
            {
                fieldName: 'initiatorId',
                title: 'Подразделение',
                type: 'select',
                value: subdivisions && subdivisions.length === 1 ? subdivisions[0] : null,
                required: true,
                editable: subdivisions.length > 1,
                width: '100',
                items: subdivisions,
                isSpecificSelect: true,
            },
        ],
    }
}
export const getForm = (sourceOfFundings: HandbookItem[], paymentIdentifiers: HandbookItem[]): IInputArea => {
    return {
        title: 'Установление надбавок',
        data: [
            {
                fieldName: 'sourceOfFundingId',
                title: 'Источник финансирования',
                type: 'select',
                value: null,
                required: true,
                editable: sourceOfFundings.length > 1,
                width: '100',
                items: sourceOfFundings.map((item) => ({
                    id: item.id,
                    title: item.name,
                })),
                isSpecificSelect: true,
            },
            {
                fieldName: 'paymentIdentifierId',
                title: 'Вид набавки',
                type: 'select',
                value: null,
                required: true,
                editable: paymentIdentifiers.length > 1,
                width: '100',
                items: paymentIdentifiers.map((item) => ({
                    id: item.id,
                    title: item.name,
                })),
                isSpecificSelect: true,
            },
            {
                fieldName: 'commentary',
                title: 'Комментарий',
                value: '',
                type: 'textarea',
            },
        ],
    }
}

export const getEmployees = (items: SelectPage[]): IInputArea => {
    return {
        title: 'Сотрудники',
        id: 'allowanceEmployees',
        data: [],
        default: [
            [
                {
                    fieldName: 'id',
                    title: 'Сотрудник',
                    type: 'select',
                    value: null,
                    required: true,
                    items,
                    isSpecificSelect: true,
                },
                {
                    fieldName: 'sum',
                    title: 'Сумма',
                    value: '',
                    type: 'number',
                    required: true,
                },
                {
                    fieldName: 'startDate',
                    title: 'Дата начала',
                    value: '',
                    type: 'date',
                    required: true,
                },
                {
                    fieldName: 'endDate',
                    title: 'Дата окончания',
                    value: '',
                    type: 'date',
                    required: true,
                },
            ],
        ],
        addNew: true,
    }
}

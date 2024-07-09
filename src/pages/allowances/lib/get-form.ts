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
export const getForm = (
    fundingSources: HandbookItem[],
    allowanceTypes: HandbookItem[],
    activityAreas: HandbookItem[],
): IInputArea => {
    return {
        title: 'Установление надбавок',
        data: [
            {
                fieldName: 'activityAreaId',
                title: 'Направление деятельности',
                type: 'select',
                value: null,
                required: true,
                editable: activityAreas.length > 1,
                width: '100',
                items: activityAreas.map((item) => ({
                    id: item.id,
                    title: item.name,
                })),
                isSpecificSelect: true,
            },
            {
                fieldName: 'fundingSourceId',
                title: 'Источник финансирования',
                type: 'select',
                value: null,
                required: true,
                editable: fundingSources.length > 1,
                width: '100',
                items: fundingSources.map((item) => ({
                    id: item.id,
                    title: item.name,
                })),
                isSpecificSelect: true,
            },
            {
                fieldName: 'allowanceTypeId',
                title: 'Вид набавки',
                type: 'select',
                value: null,
                required: true,
                editable: allowanceTypes.length > 1,
                width: '100',
                items: allowanceTypes.map((item) => ({
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

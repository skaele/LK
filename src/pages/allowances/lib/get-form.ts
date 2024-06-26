import { HandbookItem } from '@entities/allowances/types'
import { getFormattedSubDivisions } from '@features/applications/lib/get-formatted-subdivisions'
import { getDefaultSubdivision } from '@pages/teachers-applications/lib/get-default-subdivision'
import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

export const getForm = (
    data: UserApplication,
    fundingSources: HandbookItem[],
    allowanceTypes: HandbookItem[],
    activityAreas: HandbookItem[],
): IInputArea => {
    const subdivisions = getFormattedSubDivisions(data.subdivisions)
    return {
        title: 'Установление надбавок',
        data: [
            {
                fieldName: 'initiatorId',
                title: data.guid_person,
                type: 'text',
                value: data.guid_person,
                required: true,
                editable: false,
                visible: false,
            },
            {
                fieldName: 'divisionId',
                title: 'Наименования подразделения',
                type: 'select',
                value: getDefaultSubdivision(data.subdivisions),
                required: true,
                editable: subdivisions.length > 1,
                width: '100',
                items: subdivisions,
                isSpecificSelect: true,
            },
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
                value: getDefaultSubdivision(data.subdivisions),
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
                value: getDefaultSubdivision(data.subdivisions),
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

export const getEmployees = (): IInputArea => {
    return {
        title: 'Сотрудники',
        id: 'allowanceEmployees',
        data: [],
        default: [
            [
                {
                    fieldName: 'fio',
                    title: 'ФИО',
                    value: '',
                    required: true,
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

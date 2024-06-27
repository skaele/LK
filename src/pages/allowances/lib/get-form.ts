import { HandbookItem } from '@entities/allowances/types'
import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

export const getForm = (
    data: UserApplication,
    fundingSources: HandbookItem[],
    allowanceTypes: HandbookItem[],
    activityAreas: HandbookItem[],
): IInputArea => {
    // const subdivisions = getFormattedSubDivisions(data.subdivisions)
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
            // {
            //     fieldName: 'divisionId',
            //     title: 'Наименования подразделения',
            //     type: 'select',
            //     value: getDefaultSubdivision(data.subdivisions),
            //     required: true,
            //     editable: subdivisions.length > 1,
            //     width: '100',
            //     items: subdivisions,
            //     isSpecificSelect: true,
            // },
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

export const getEmployees = (): IInputArea => {
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
                    items: [
                        {
                            id: '96d4f97d-8adf-4fd3-ad4d-394eaddebb0f',
                            title: 'сам инициатор',
                        },
                        {
                            id: '31d589d8-878b-40c0-861f-a83ea8bb7a20',
                            title: 'сотрудник 1',
                        },
                        {
                            id: 'c1db211d-dc0a-4382-954a-b621cbed376b',
                            title: 'сотрудник 2',
                        },
                    ],
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

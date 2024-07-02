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
                            id: 'bd22c6af-e05f-11ee-bbb6-b0756d2ea875',
                            title: 'Асташова Алина Алексеевна',
                        },
                        {
                            id: '09852bb8-0f36-11ee-bba9-b45656e83269',
                            title: 'Булавин Владислав Алексеевич',
                        },
                        {
                            id: '811a0bd2-0f36-11ee-bba9-b45656e83269',
                            title: 'Зишко Сабина Сергеевна',
                        },
                        {
                            id: 'cd92196e-0532-11ee-bba9-b45656e83269',
                            title: 'Лукьянов Леонид Михайлович',
                        },
                        {
                            id: 'd20f2442-0f34-11ee-bba9-b45656e83269',
                            title: 'Стулов Владимир Вячеславович',
                        },
                        // {
                        //     id: 'd66844f6-d9c6-11e7-940a-b4b52f5f5349',
                        //     title: 'Хуснулина Дария Рашитовна (Старший преподаватель)',
                        // },
                        {
                            id: '7f9a30ea-e7b3-11ea-9434-b4b52f5f5349',
                            title: 'Хуснулина Дария Рашитовна (Начальник центра)',
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

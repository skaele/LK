import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import getDelayInDays from '@pages/hr-applications/lib/get-delay-in-days'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic } = dataUserApplication
    return {
        title: 'Заявление о привлечении к работе в выходной день',
        data: [
            {
                title: 'ФИО',
                type: 'simple-text',
                value: surname + ' ' + name + ' ' + patronymic,
                fieldName: 'fio',
                visible: true,
            },
            // {
            //     title: 'Подразделение/должность',
            //     value: jobTitleData,
            //     fieldName: 'guid_staff',
            //     editable: subdivisions && subdivisions.length > 1,
            //     width: '100',
            //     required: true,
            //     type: 'select',
            //     items: getFormattedSubDivisions(subdivisions),
            //     isSpecificSelect: true,
            //     onChange: (value) => {
            //         setJobTitle(value)
            //         setJobGuid(value.id)
            //         setStartDate(null)
            //         setEndDate(null)
            //     },
            // },
            {
                title: 'Дата привлечения к работе',
                type: 'date',
                value: null,
                fieldName: 'holiday_work_date',
                editable: true,
                mask: true,
                required: true,
                minValueInput: getDelayInDays(0),
            },
            {
                title: 'Количество часов',
                type: 'select',
                fieldName: 'holiday_work_hours',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: '1',
                    },
                    {
                        id: 1,
                        title: '2',
                    },
                    {
                        id: 2,
                        title: '3',
                    },
                    {
                        id: 3,
                        title: '4',
                    },
                    {
                        id: 4,
                        title: '5',
                    },
                    {
                        id: 5,
                        title: '6',
                    },
                    {
                        id: 6,
                        title: '7',
                    },
                    {
                        id: 7,
                        title: '8',
                    },
                ],
            },
            {
                title: 'Причина',
                value: 'Служебная необходимость',
                fieldName: 'reason',
                editable: true,
                mask: true,
                required: true,
            },
            {
                title: 'Вид компенсации',
                type: 'select',
                fieldName: 'compensation',
                value: null,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Оплатить работу в выходной день в двойном размере',
                    },
                    {
                        id: 1,
                        title: 'Оплатить работу в выходной день в одинарном размере с предоставлением другого дня отдыха',
                    },
                ],
            },
            {
                title: 'Дата дополнительного дня отдыха',
                type: 'date',
                value: '',
                fieldName: 'extra_holiday_date',
                editable: true,
                mask: true,
                required: false,
                specialType: 'Compensation',
            },
            // {
            //     title: '',
            //     type: 'simple-text',
            //     value: jobGuidData,
            //     fieldName: 'jobGuid',
            //     visible: false,
            // },
        ],
    }
}

export default getForm

import { UserApplication } from '@api/model'
import { getFormattedSubDivisionsWithRate } from '@features/applications/lib/get-subdivisions'
import { SelectPage } from '@features/select'
import getDelayInDays from '@pages/hr-applications/lib/get-delay-in-days'
import { getDelayInWorkDays } from '@pages/hr-applications/lib/get-delay-in-work-days'
import { getWorkWeekDuration } from '@pages/hr-applications/lib/get-work-week-duration'
import { WorkWeeks } from '@pages/hr-applications/types'
import { getDefaultSubdivision } from '@pages/teachers-applications/lib/get-default-subdivision'
import { isProduction } from '@shared/constants'
import { IInputArea } from '@ui/input-area/model'

const holidayTypes = isProduction
    ? [
          {
              id: 0,
              title: 'Ежегодный (основной) оплачиваемый отпуск',
          },
          {
              id: 2,
              title: 'Отпуск без сохранения заработной платы',
          },
      ]
    : [
          {
              id: 0,
              title: 'Ежегодный (основной) оплачиваемый отпуск',
          },
          {
              id: 1,
              title: 'Ежегодный дополнительный оплачиваемый отпуск (в т.ч. учебный)',
          },
          {
              id: 2,
              title: 'Отпуск без сохранения заработной платы',
          },
          {
              id: 3,
              title: 'Отпуск по коллективному договору',
          },
      ]

const getForm = (
    dataUserApplication: UserApplication,
    startDate: string | null,
    setStartDate: React.Dispatch<React.SetStateAction<string | null>>,
    endDate: string | null,
    setEndDate: React.Dispatch<React.SetStateAction<string | null>>,
    collType: any,
    setCollType: React.Dispatch<React.SetStateAction<string | null>>,
    holidayType: any,
    setHolidayType: React.Dispatch<React.SetStateAction<string | null>>,
    jobGuid: string | null,
    jobTitle: SelectPage | null,
    setJobTitle: React.Dispatch<React.SetStateAction<SelectPage | null>>,
    setJobGuid: React.Dispatch<React.SetStateAction<string | null>>,
    workWeeks: WorkWeeks,
): IInputArea => {
    const { surname, name, patronymic, subdivisions } = dataUserApplication
    const jobTitleData = jobTitle ?? getDefaultSubdivision(subdivisions)
    const holidayStartDate = startDate ?? new Date().toISOString()
    const collTypeData = collType ?? ''
    const jobGuidData = jobGuid ?? ((jobTitleData && jobTitleData.id)?.toString() || '')
    const workWeekDuration = getWorkWeekDuration(workWeeks, jobGuidData) || 6

    return {
        title: 'Заявление о предоставлении отпуска',
        data: [
            {
                title: 'ФИО',
                type: 'simple-text',
                value: surname + ' ' + name + ' ' + patronymic,
                fieldName: 'fio',
                visible: true,
            },
            {
                title: 'Подразделение/должность',
                value: jobTitleData,
                fieldName: 'guid_staff',
                editable: subdivisions && subdivisions.length > 1,
                width: '100',
                required: true,
                type: 'select',
                items: getFormattedSubDivisionsWithRate(subdivisions),
                isSpecificSelect: true,
                onChange: (value) => {
                    setJobTitle(value)
                    setJobGuid(value.id)
                    setStartDate(null)
                    setEndDate(null)
                },
            },
            {
                title: 'Вид отпуска',
                type: 'select',
                fieldName: 'holiday_type',
                value: holidayType,
                editable: true,
                required: true,
                onChange: (value) => {
                    if (
                        !!startDate &&
                        new Date(startDate).getTime() <
                            new Date(getDelayInWorkDays(value?.id === 0 ? 5 : 0, workWeekDuration)).getTime()
                    ) {
                        setStartDate(null)
                        setEndDate(null)
                    }
                    if (
                        !!endDate &&
                        new Date(endDate).getTime() <
                            new Date(getDelayInDays(value?.id === 0 ? 1 : 0, holidayStartDate)).getTime()
                    ) {
                        setEndDate(null)
                    }
                    if (
                        !!endDate &&
                        holidayType?.id !== 2 &&
                        new Date(endDate).getTime() <
                            new Date(getDelayInDays(collType ? +collType.data : 365, holidayStartDate)).getTime()
                    ) {
                    }
                    setHolidayType(value)
                },
                width: '100%',
                items: holidayTypes,
            },
            {
                title: 'Категория для предоставления отпуска',
                type: 'select',
                fieldName: 'holiday_type_coll',
                value: collTypeData,
                editable: true,
                required: true,
                onChange: (value) => {
                    const startDate = new Date(Date.parse(holidayStartDate))
                    startDate.setDate(startDate.getDate() + 5)
                    setCollType(value)
                    setEndDate(getDelayInDays(value ? +value.data : 0, startDate.toString()))
                },
                width: '100%',
                specialType: 'collDog',
                items: [
                    {
                        id: 0,
                        title: 'Работникам, имеющим двоих и более детей в возрасте до 14 лет',
                        data: 3,
                    },
                    {
                        id: 1,
                        title: 'Работникам, имеющим ребенка-инвалида в возрасте до 18 лет',
                        data: 5,
                    },
                    {
                        id: 2,
                        title: 'Одиноким матерям (отцам)',
                        data: 5,
                    },
                    {
                        id: 3,
                        title: 'Работникам в случаях рождения ребенка, регистрации брака, смерти близких родственников',
                        data: 3,
                    },
                    {
                        id: 4,
                        title: 'Работникам, сопровождающим детей младшего школьного возраста в школу в первый день учебного года',
                        data: 1,
                    },
                    {
                        id: 5,
                        title: 'Работникам, имеющим общий стаж работы в Университете от 20 до 25 лет',
                        data: 1,
                    },
                    {
                        id: 6,
                        title: 'Работникам, имеющим общий стаж работы в Университете от 25 до 30 лет',
                        data: 2,
                    },
                    {
                        id: 7,
                        title: 'Работникам, имеющим общий стаж работы в Университете от 30 до 35 лет',
                        data: 3,
                    },
                    {
                        id: 8,
                        title: 'Работникам, имеющим общий стаж работы в Университете свыше 35 лет',
                        data: 4,
                    },
                ],
            },
            {
                title: 'Начало отпуска:',
                type: 'date',
                value: startDate,
                fieldName: 'holiday_start',
                editable: !!jobGuidData,
                mask: true,
                onChange: (value) => {
                    if (!!endDate && new Date(value).getTime() > new Date(endDate).getTime()) {
                        setEndDate(null)
                    }
                    setStartDate(value)
                },
                required: true,
                minValueInput: getDelayInWorkDays(holidayType?.id === 0 ? 5 : 0, workWeekDuration),
                maxValueInput: '9999-12-31',
            },
            {
                title: '',
                type: 'simple-text',
                value: jobGuidData,
                fieldName: 'jobGuid',
                visible: false,
            },
            {
                title: 'Окончание отпуска:',
                type: 'date',
                value: endDate,
                fieldName: 'holiday_end',
                editable: !!startDate,
                mask: true,
                required: true,
                onChange: (value) => {
                    setEndDate(value)
                },
                minValueInput: getDelayInDays(holidayType?.id === 0 ? 1 : 0, holidayStartDate),
                maxValueInput: getDelayInDays(collType ? +collType.data : 365, holidayStartDate),
            },
        ],
    }
}

export default getForm

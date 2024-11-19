import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import { getIsTutor } from './is-tutor'
import getDelayInDays from '@pages/hr-applications/lib/get-delay-in-days'
import { getFormattedSubDivisions } from '@features/applications/lib/get-formatted-subdivisions'
import { getDefaultSubdivision } from '@pages/teachers-applications/lib/get-default-subdivision'
import { getWorkWeekDuration } from '@pages/hr-applications/lib/get-work-week-duration'
import { setWorkDate } from '@pages/hr-applications/lib/set-work-date'
import { SelectPage } from '@features/select'
import { getDelayInWorkDays } from '@pages/hr-applications/lib/get-delay-in-work-days'
import { WorkWeeks } from '@pages/hr-applications/types'

const getForm = (
    dataUserApplication: UserApplication,
    startDate: string | null,
    setStartDate: React.Dispatch<React.SetStateAction<string | null>>,
    endDate: string | null,
    setEndDate: React.Dispatch<React.SetStateAction<string | null>>,
    isRetirement: string | null,
    setIsRetirement: React.Dispatch<React.SetStateAction<string | null>>,
    jobTitle: SelectPage | null,
    setJobTitle: React.Dispatch<React.SetStateAction<SelectPage | null>>,
    jobGuid: string | null,
    setJobGuid: React.Dispatch<React.SetStateAction<string | null>>,
    workWeeks: WorkWeeks,
): IInputArea => {
    const { surname, name, patronymic, subdivisions } = dataUserApplication
    const firstDayOff = !!startDate ? new Date(startDate) : new Date()
    const jobTitleData = jobTitle ?? getDefaultSubdivision(subdivisions)
    const jobGuidData = jobGuid ?? ((jobTitleData && jobTitleData.id?.toString()) || '')
    const secondDayOff = new Date(firstDayOff.getTime() + 24 * 60 * 60 * 1000)
    const isTutor = getIsTutor(jobGuidData) === 'true' ? true : false

    const workWeekDuration = getWorkWeekDuration(workWeeks, jobGuidData) || 6

    if (isTutor && firstDayOff.getDay() === 5) {
        secondDayOff.setDate(firstDayOff.getDate() + 1)
    } else if (firstDayOff.getDay() === 5 || firstDayOff.getDay() === 6 || firstDayOff.getDay() === 0) {
        secondDayOff.setDate(firstDayOff.getDate() + ((8 - firstDayOff.getDay()) % 7))
    }

    return {
        title: 'Заявление о диспансеризации',
        data: [
            {
                title: 'ФИО',
                value: surname + ' ' + name + ' ' + patronymic,
                fieldName: 'fio',
                type: 'simple-text',
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
                items: getFormattedSubDivisions(subdivisions),
                isSpecificSelect: true,
                onChange: (value) => {
                    setJobTitle(value)
                    setJobGuid(value.id)
                    setStartDate(null)
                    setEndDate(null)
                },
            },
            {
                title: 'Дата прохождения диспансеризации',
                type: 'date',
                value: startDate,
                fieldName: 'extra_examination_date',
                editable: !!jobGuidData,
                onChange: (value) => {
                    setWorkDate(value, setStartDate, workWeekDuration)
                },
                mask: true,
                required: true,
                maxValueLength: 1,
                maxValueInput: '9999-12-31',
                minValueInput: getDelayInDays(1),
            },
            {
                title: 'Я являюсь получателем пенсии по старости или пенсии за выслугу лет или мне осталось менее 5 лет до этого',
                type: 'checkbox',
                value: !!isRetirement,
                fieldName: 'isRetirement',
                editable: true,
                mask: true,
                required: false,
                onChange: (value) => {
                    setIsRetirement(value)
                    if (!value) setEndDate(null)
                },
            },
            {
                title: 'Второй день диспансеризации',
                type: 'date',
                value: startDate ? getDelayInWorkDays(1, workWeekDuration, startDate) : '',
                editable: false,
                fieldName: 'extra_examination_date_2',
                mask: true,
                required: !!isRetirement,
                specialType: 'Compensation2',
                maxValueLength: 1,
                maxValueInput: '9999-12-31',
                minValueInput: startDate ? getDelayInDays(1, startDate) : getDelayInDays(1),
            },
            {
                title: '',
                type: 'simple-text',
                value: jobGuidData,
                fieldName: 'jobGuid',
                visible: false,
            },
        ],
    }
}

export default getForm

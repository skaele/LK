import { getDefaultSubdivision } from '@pages/teachers-applications/lib/get-default-subdivision'

import { getFormattedSubDivisions } from '@features/applications/lib/get-formatted-subdivisions'
import getDelayInDays from '@features/medical-certificate/lib/get-delay-in-days'

import { UserApplication, WorkerApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

import { getIsTutor } from './is-tutor'

const getForm = (
    dataUserApplication: UserApplication,
    dataWorkerApplication: WorkerApplication[],
    startDate: string | null,
    setStartDate: React.Dispatch<React.SetStateAction<string | null>>,
    isRetirement: string | null,
    setIsRetirement: React.Dispatch<React.SetStateAction<string | null>>,
    jobTitle: string | null,
    setJobTitle: React.Dispatch<React.SetStateAction<string | null>>,
    jobGuid: string | null,
    setJobGuid: React.Dispatch<React.SetStateAction<string | null>>,
): IInputArea => {
    const { surname, name, patronymic, subdivisions } = dataUserApplication
    const firstDayOff = !!startDate ? new Date(startDate) : new Date()
    const jobGuidData = !!jobGuid ? jobGuid : ''
    const jobTitleData = !!jobTitle ? jobTitle : getDefaultSubdivision(subdivisions)
    const secondDayOff = new Date(firstDayOff.getTime() + 24 * 60 * 60 * 1000)
    const isTutor = getIsTutor(jobGuidData) === 'true' ? true : false

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
                editable: true,
                width: '100',
                required: true,
                type: 'select',
                items: getFormattedSubDivisions(subdivisions),
                isSpecificSelect: true,
                onChange: (value) => {
                    setJobTitle(value)
                    setJobGuid(value.id)
                },
            },
            {
                title: 'Дата прохождения диспансеризации',
                type: 'date',
                value: startDate,
                fieldName: 'extra_examination_date',
                editable: true,
                onChange: (value) => {
                    setStartDate(value)
                },
                mask: true,
                required: true,
                maxValueLength: 1,
                minValueInput: getDelayInDays(0),
            },
            {
                title: 'Я являюсь получателем пенсии по старости или пенсии за выслугу лет или мне осталось менее 5 лет до этого',
                type: 'hr-checkbox',
                value: !!isRetirement ? isRetirement : '',
                fieldName: 'isRetirement',
                editable: true,
                mask: true,
                required: false,
                onChange: (value) => {
                    setIsRetirement(value)
                },
            },
            {
                title: 'Второй день отдыха',
                type: 'date',
                value: secondDayOff.toISOString().substr(0, 10),
                fieldName: 'extra_examination_date_2',
                editable: false,
                mask: true,
                required: false,
                specialType: 'Compensation2',
                maxValueLength: 1,
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

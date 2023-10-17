import { IFullSchedule, IWeekEventSchedule } from '@shared/api/model'
import { IWeekDays, WEEK_DAYS } from '@shared/constants'

export enum View {
    day,
    week,
    month,
}

export const VIEWS = [
    {
        title: 'День',
        condition: true,
    },
    {
        title: 'Неделя',
        condition: true,
    },
]

export const SESSION_VIEWS = [
    ...VIEWS,
    {
        title: 'Месяц',
        condition: true,
    },
]

export const EMPTY_WEEK = Object.keys(WEEK_DAYS).reduce((acc, el) => {
    acc[el as keyof IWeekDays] = []
    return acc
}, {} as IWeekEventSchedule)

type GetScheduleResult = { schedule: IFullSchedule; teachers: string[] }

export const SCHEDULE_NO_RESULT: GetScheduleResult = {
    schedule: {
        today: [],
        week: { ...EMPTY_WEEK },
        semestr: {
            data: { ...EMPTY_WEEK },
            startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
        },
        session: {
            data: { ...EMPTY_WEEK },
            startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
        },
    },
    teachers: [],
}

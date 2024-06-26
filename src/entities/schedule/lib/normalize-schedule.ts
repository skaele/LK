import {
    CapitalLettersWeekNames,
    FullRawScheduleResponse,
    FullRawTeacherScheduleResponse,
    IFullSchedule,
    IWeekEventSchedule,
    RawScheduleResponse,
    RawSessionScheduleResponse,
    RawTeacherScheduleResponse,
} from '@shared/api/model'
import { IWeekDayNames, TIME_IN_MS, WEEK_DAYS } from '@shared/constants'
import { getMonday } from '@shared/ui/calendar/ui/week-days/lib/get-monday'
import { EMPTY_WEEK, SCHEDULE_NO_RESULT } from '../consts'
import { getCalendarSchedule } from './get-calendar-schedule'
import getCurrentDaySubjects from './get-current-day-schedule'
import { normalizeSessionSchedule } from './normalize-session-schedule'
import { getDateInSomeDays } from '@shared/lib/dates/get-date-in-some-days'
import { popUpMessageModel } from '@entities/pop-up-message'

export const normalizeSchedule = (
    rawSchedule: FullRawScheduleResponse | FullRawTeacherScheduleResponse,
    rawSessionSchedule: RawSessionScheduleResponse,
): { schedule: IFullSchedule; errorInData?: string } => {
    let startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    let endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)

    if (typeof rawSchedule === 'object' && 'status' in rawSchedule) {
        const message = `Не удалось загрузить расписание. Причина: ${rawSchedule.message ?? '-'}`
        popUpMessageModel.events.evokePopUpMessage({
            message,
            type: 'failure',
            time: TIME_IN_MS.ten_seconds,
        })

        return {
            schedule: SCHEDULE_NO_RESULT.schedule,
            errorInData: message,
        }
    }

    const todaysDate = new Date()
    let weekday = getMonday(todaysDate)
    if (todaysDate.getDay() === 0) weekday = getDateInSomeDays(todaysDate, 1)

    const week: IWeekEventSchedule = { ...EMPTY_WEEK }
    const semestr: IWeekEventSchedule = { ...EMPTY_WEEK }

    for (const key in rawSchedule) {
        if (key !== 'Sunday') {
            // Monday -> monday
            const transformedKey = key.toLocaleLowerCase() as IWeekDayNames
            const k = key as CapitalLettersWeekNames

            // Преобразование пришедшего типа под календарь
            const el = (rawSchedule as any)[k]
            if ('lessons' in el) {
                week[transformedKey] = getCalendarSchedule(
                    getCurrentDaySubjects((el as RawScheduleResponse[CapitalLettersWeekNames]).lessons, weekday),
                    WEEK_DAYS[transformedKey].short,
                )
                semestr[transformedKey] = getCalendarSchedule(
                    (el as RawScheduleResponse[CapitalLettersWeekNames]).lessons,
                    WEEK_DAYS[transformedKey].short,
                )
            } else {
                week[transformedKey] = getCalendarSchedule(
                    getCurrentDaySubjects(el as RawTeacherScheduleResponse[CapitalLettersWeekNames], weekday),
                    WEEK_DAYS[transformedKey].short,
                )
                semestr[transformedKey] = getCalendarSchedule(
                    el as RawTeacherScheduleResponse[CapitalLettersWeekNames],
                    WEEK_DAYS[transformedKey].short,
                )
            }

            startDate = new Date(
                Math.min(...semestr[transformedKey].map((el) => el.startDate.getTime()), startDate.getTime()),
            )
            endDate = new Date(
                Math.max(
                    ...semestr[transformedKey].map((el) => {
                        return (el.endDate ?? el.startDate).getTime()
                    }),
                    endDate.getTime(),
                ),
            )

            weekday.setDate(weekday.getDate() + 1)
        }
    }
    const currentDay = new Date()
        .toLocaleDateString('en-EN', {
            weekday: 'long',
        })
        .toLocaleLowerCase() as IWeekDayNames

    const today = week[currentDay]

    const session = normalizeSessionSchedule(rawSessionSchedule)

    return {
        schedule: {
            today,
            week,
            semestr: { data: semestr, startDate, endDate },
            session: { data: session.schedule, startDate: session.startDate, endDate: session.endDate },
        },
    }
}

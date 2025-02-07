import { getMonday } from '@entities/schedule/lib/get-monday'

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
import { IWeekDayNames, TIME_IN_MS, WEEK_DAYS } from '@shared/consts'
import { getDateInSomeDays } from '@shared/lib/dates/get-date-in-some-days'
import { popUpMessageModel } from '@shared/ui/pop-up-message'

import { EMPTY_WEEK, SCHEDULE_NO_RESULT } from '../consts'
import { getCalendarSchedule } from './get-calendar-schedule'
import getCurrentDaySubjects from './get-current-day-schedule'
import { normalizeSessionSchedule } from './normalize-session-schedule'

export const normalizeSchedule = (
    rawSchedule: FullRawScheduleResponse | FullRawTeacherScheduleResponse | RawSessionScheduleResponse,
    rawSessionSchedule: RawSessionScheduleResponse,
): { schedule: IFullSchedule; errorInData?: string } => {
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

    const week: IWeekEventSchedule = { ...EMPTY_WEEK }

    const semestr = isCorrespondenceSchedule(rawSchedule)
        ? getCorrespondenceSchedule(rawSchedule)
        : getSemestrSchedule(rawSchedule, week)
    const session = normalizeSessionSchedule(rawSessionSchedule)

    const currentDay = new Date()
        .toLocaleDateString('en-EN', {
            weekday: 'long',
        })
        .toLocaleLowerCase() as IWeekDayNames
    const today = week[currentDay]
    return {
        schedule: {
            today,
            week,
            semestr,
            session: { data: session.schedule, startDate: session.startDate, endDate: session.endDate },
        },
    }
}

const getSemestrSchedule = (
    rawSchedule: FullRawScheduleResponse | FullRawTeacherScheduleResponse,
    week: IWeekEventSchedule,
) => {
    const todaysDate = new Date()
    let weekday = getMonday(todaysDate)
    if (todaysDate.getDay() === 0) weekday = getDateInSomeDays(todaysDate, 1)

    let startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    let endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)

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
    return { data: semestr, startDate, endDate }
}

const getCorrespondenceSchedule = (rawSchedule: RawSessionScheduleResponse) => {
    const sem = normalizeSessionSchedule(rawSchedule)
    return { data: sem.schedule, startDate: sem.startDate, endDate: sem.endDate }
}

function isCorrespondenceSchedule(
    rawSchedule: FullRawScheduleResponse | FullRawTeacherScheduleResponse | RawSessionScheduleResponse,
): rawSchedule is RawSessionScheduleResponse {
    const weekDays = [...Object.keys(WEEK_DAYS), 'sunday']
    if (Object.keys(rawSchedule).every((day) => weekDays.includes(day.toLocaleLowerCase()))) return false
    return true
}

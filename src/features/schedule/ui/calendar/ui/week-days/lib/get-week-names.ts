<<<<<<<< HEAD:src/features/schedule/ui/calendar/ui/week-days/lib/get-week-names.ts
import { IWeekDays, WEEK_DAYS } from '@shared/consts'
import { getDateInSomeDays } from '@shared/lib/dates/get-date-in-some-days'

import { getMonday } from '../../../../../../../entities/schedule/lib/get-monday'
========
import { IWeekDays, WEEK_DAYS } from '@shared/constants'
import { getDateInSomeDays } from '@shared/lib/dates/get-date-in-some-days'

import { getMonday } from './get-monday'
>>>>>>>> master:src/shared/ui/calendar/ui/week-days/lib/get-week-names.ts

export const getWeekNames = () => {
    const today = new Date()
    let day = getMonday(today)
    if (today.getDay() === 0) day = getDateInSomeDays(today, 1)

    const result = Object.keys(WEEK_DAYS).reduce(
        (acc, el) => {
            acc[WEEK_DAYS[el as keyof IWeekDays].short] = ''
            return acc
        },
        {} as Record<string, string>,
    )

    for (let i = 0; i < 6; i++) {
        const dayName = day.toLocaleDateString('ru-RU', { day: '2-digit' })
        day.setDate(day.getDate() + 1)
        result[Object.keys(result)[i] as keyof typeof result] = dayName
    }

    return result
}

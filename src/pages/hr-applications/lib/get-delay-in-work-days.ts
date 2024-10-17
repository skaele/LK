import localizeDate from '@shared/lib/dates/localize-date'
import { WorkWeek } from '../types/hr-applications'

const DAYS_IN_WEEK = 7

export const getDelayInWorkDays = (period: number, workWeek: WorkWeek, startDate?: string) => {
    const date = startDate ? new Date(Date.parse(startDate)) : new Date()
    const dayOfWeek = date.getDay()

    const fullWeeks = Math.floor(period / workWeek)
    const remainingDays = period % workWeek
    const weekendsAmount = DAYS_IN_WEEK - workWeek
    const weekends = dayOfWeek + remainingDays > workWeek ? weekendsAmount : 0
    const totalDays = period + fullWeeks * weekendsAmount + weekends
    date.setDate(date.getDate() + totalDays)
    return localizeDate(date, 'extraWeird')
}

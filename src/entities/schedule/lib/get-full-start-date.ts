import { Months } from '@shared/models/months'

export const getFullStartDate = (startDate: string) => {
    const [startDay, startMonth] = startDate.split(' ')

    const parsedStartDateMonth = Months[startMonth as keyof typeof Months]

    const fullYear = parsedStartDateMonth < 8 ? new Date().getFullYear() + 1 : new Date().getFullYear()

    return new Date(`${parsedStartDateMonth}/${startDay}/${fullYear}`)
}

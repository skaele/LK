import { Months } from '@shared/consts/models/months'

export const getFullStartDate = (startDate: string) => {
    const [startDay, startMonth] = startDate.split(' ')

    const parsedStartDateMonth = Months[startMonth as keyof typeof Months]

    // было так: parsedStartDateMonth < 8 ? new Date().getFullYear() + 1 : new Date().getFullYear()
    // полагаю, через полгода опять сломается

    const fullYear = new Date().getFullYear()

    return new Date(`${parsedStartDateMonth}/${startDay}/${fullYear}`)
}

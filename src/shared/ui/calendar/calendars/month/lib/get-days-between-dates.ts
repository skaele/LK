export const getDaysBetweenDates = (date1: Date, date2: Date) => {
    let start = new Date(date1)
    const dayMilliseconds = 1000 * 60 * 60 * 24
    let weekendDays = 0
    while (start.getTime() <= date2.getTime()) {
        const day = start.getDay()

        if (day === 0) {
            weekendDays++
        }
        start = new Date(+start + dayMilliseconds)
    }
    const days = date2.getTime() - date1.getTime()

    return days / (1000 * 3600 * 24) + 1 - weekendDays
}

import getCorrectWordForm from '../get-correct-word-form'

/**
 * Преобразует временную метку в формате ISO 8601 в читаемый формат,
 * указывающий, как давно это произошло по сравнению с текущим временем.
 *
 * @param {string} isoTime - Время в формате ISO 8601 (например, "2024-10-25T09:11:38.889Z").
 * @returns {string} Строка, указывающая, как давно это произошло, например, "n часов назад" или "n минут назад".
 *
 * @example
 * const timeElapsed = timeAgo("2024-10-25T09:11:38.889Z");
 * console.log(timeElapsed); // Вывод: "n часов назад"
 */
export const timeDiff = (time: number | string | Date) => {
    const pastDate = new Date().getTime() - new Date(time).getTime()

    const pastSeconds = Math.floor(pastDate / 1000)
    if (pastSeconds < 60 && pastSeconds >= 1) return `${pastSeconds} ${getCorrectWordForm(pastSeconds, secondsRules)}`

    const pastMinutes = Math.floor(pastSeconds / 60)
    if (pastMinutes < 60 && pastMinutes >= 1) return `${pastMinutes} ${getCorrectWordForm(pastMinutes, minutesRules)}`

    const pastHours = Math.floor(pastMinutes / 60)
    if (pastHours < 24 && pastHours >= 1) return `${pastHours} ${getCorrectWordForm(pastHours, hoursRules)}`

    const pastDays = Math.floor(pastHours / 24)
    if (pastDays >= 1 && pastDays < 7) return `${pastDays} ${getCorrectWordForm(pastDays, daysRules)}`

    const pastWeeks = Math.floor(pastDays / 7)
    if (pastWeeks >= 1 && pastWeeks < 4) return `${pastWeeks} ${getCorrectWordForm(pastWeeks, weeksRules)}`

    const pastMonths = Math.floor(pastDays / 30)
    if (pastMonths >= 1 && pastMonths < 12) return `${pastMonths} ${getCorrectWordForm(pastMonths, monthsRules)}`

    const pastYears = Math.floor(pastDays / 365)
    return `${pastYears} ${getCorrectWordForm(pastYears, yearsRules)}`
}

const secondsRules = {
    zero: 'секунд',
    one: 'секунду',
    twoToFour: 'секунды',
    fiveToNine: 'секунд',
}

const minutesRules = {
    zero: 'минут',
    one: 'минута',
    twoToFour: 'минуты',
    fiveToNine: 'минут',
}

const hoursRules = {
    zero: 'часов',
    one: 'час',
    twoToFour: 'часа',
    fiveToNine: 'часов',
}

const daysRules = {
    zero: 'дней',
    one: 'день',
    twoToFour: 'дня',
    fiveToNine: 'дней',
}

const weeksRules = {
    zero: 'недель',
    one: 'неделя',
    twoToFour: 'недели',
    fiveToNine: 'недель',
}

const monthsRules = {
    zero: 'месяцев',
    one: 'месяц',
    twoToFour: 'месяца',
    fiveToNine: 'месяцев',
}

const yearsRules = {
    zero: 'лет',
    one: 'год',
    twoToFour: 'года',
    fiveToNine: 'лет',
}

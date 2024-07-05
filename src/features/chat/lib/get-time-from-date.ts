export const getTimeFromDate = (date: Date | string): string => {
    return new Date(date).toLocaleTimeString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
    })
}

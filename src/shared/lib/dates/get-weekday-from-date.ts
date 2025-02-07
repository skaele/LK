import { IWeekDayNames } from '@shared/consts'

export const getWeekDayFromDate = (date: Date): IWeekDayNames | 'sunday' => {
    return date.toLocaleDateString('en-US', { weekday: 'long' }).toLocaleLowerCase() as IWeekDayNames
}

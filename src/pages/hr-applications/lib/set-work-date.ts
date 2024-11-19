import { popUpMessageModel } from '@entities/pop-up-message'
import { WorkWeek } from '../types'

export const setWorkDate = (date: string, setDate: (date: string) => void, workWeek: WorkWeek) => {
    const dayOfWeek = new Date(date).getDay()
    if (!date) {
        setDate(date)
        return
    }
    if (workWeek === 5) {
        if (dayOfWeek >= 1 && dayOfWeek <= 5) setDate(date)
        else {
            popUpMessageModel.events.evokePopUpMessage({
                type: 'failure',
                message: 'Нельзя выбрать выходной день',
            })
        }
        return
    }
    if (workWeek === 6) {
        if (dayOfWeek >= 1 && dayOfWeek <= 6) {
            setDate(date)
        } else {
            popUpMessageModel.events.evokePopUpMessage({
                type: 'failure',
                message: 'Нельзя выбрать выходной день',
            })
        }
        return
    }
}

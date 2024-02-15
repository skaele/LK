import { scheduleModel } from '@entities/schedule'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'

export const useCalendarScale = () => {
    const { currentDevice } = useCurrentDevice()
    const {
        data: { scale },
    } = scheduleModel.selectors.useSchedule()

    return scale[currentDevice]
}

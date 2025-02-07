import { useCalendarScale } from '@features/schedule/ui/calendar/hooks/use-calendar-scale'
import { useScheduleSubjectModal } from '@features/use-schedule-subject-modal'

<<<<<<<< HEAD:src/features/schedule/ui/calendar/hooks/use-calendar-general.tsx
========
import { useCalendarScale } from '@shared/ui/calendar/hooks/use-calendar-scale'

>>>>>>>> master:src/shared/ui/calendar/hooks/use-calendar-general.tsx
import { CalendarWeekProps } from '../calendars/week/types'

type Props = CalendarWeekProps

export const useCalendarGeneral = ({ interval, showDates, events, onDayClick }: Props) => {
    const shift = interval[0] * 60
    const scale = useCalendarScale()
    const handleOpenModal = useScheduleSubjectModal()

    return { handleOpenModal, onDayClick, shift, showDates, interval, events, scale }
}

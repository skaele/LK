import { useEffect, useState } from 'react'

<<<<<<<< HEAD:src/features/schedule/ui/calendar/hooks/use-calendar-scale.ts
import useCurrentDevice from '@shared/ui/hooks/use-current-device'
========
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
>>>>>>>> master:src/shared/ui/calendar/hooks/use-calendar-scale.ts

import { SCALE_VALUES } from '../consts'

export const useCalendarScale = () => {
    const { currentDevice } = useCurrentDevice()

    const [scale, setScale] = useState(SCALE_VALUES[currentDevice as keyof typeof SCALE_VALUES])

    useEffect(() => {
        setScale(SCALE_VALUES[currentDevice as keyof typeof SCALE_VALUES])
    }, [currentDevice])

    return scale
}

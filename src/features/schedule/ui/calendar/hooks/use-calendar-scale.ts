import { useEffect, useState } from 'react'

import useCurrentDevice from '@shared/ui/hooks/use-current-device'

import { SCALE_VALUES } from '../consts'

export const useCalendarScale = () => {
    const { currentDevice } = useCurrentDevice()

    const [scale, setScale] = useState(SCALE_VALUES[currentDevice as keyof typeof SCALE_VALUES])

    useEffect(() => {
        setScale(SCALE_VALUES[currentDevice as keyof typeof SCALE_VALUES])
    }, [currentDevice])

    return scale
}

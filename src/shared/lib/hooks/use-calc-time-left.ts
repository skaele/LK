import { useEffect, useRef, useState } from 'react'

import { TIME_IN_MS } from '@shared/consts'

export const useCalcTimeLeft = (callback: () => number, deps: any[] = []) => {
    const [timeLeft, setTimeLeft] = useState(callback)
    const intervalRef = useRef<number | null>(null)
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimeLeft(callback)
        }, TIME_IN_MS.minute)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, deps)

    return timeLeft > 0 ? timeLeft : 0
}

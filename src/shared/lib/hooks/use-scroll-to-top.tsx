import { useEffect } from 'react'
import { useLocation } from 'react-router'

export function useScrollToTop(element: { scrollTo: (x: number, y: number) => void } | null) {
    const { pathname } = useLocation()

    useEffect(() => {
        element?.scrollTo(0, 0)
    }, [pathname])
}

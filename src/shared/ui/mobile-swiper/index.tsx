import React, { useEffect } from 'react'
import { useCallback, useRef, useState } from 'react'

export const MobileSwiper = ({
    children,
    onSwipe,
}: {
    children: React.ReactNode
    onSwipe: ({ deltaX, deltaY }: { deltaX: number; deltaY: number }) => void
}) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const [startX, setStartX] = useState(0)
    const [startY, setStartY] = useState(0)
    const handleTouchStart = useCallback((e: TouchEvent) => {
        if (!wrapperRef.current) return
        if (!(e.target instanceof HTMLElement)) {
            return
        }
        if (!wrapperRef.current.contains(e.target)) {
            return
        }

        e.preventDefault()

        setStartX(e.touches[0].clientX)
        setStartY(e.touches[0].clientY)
    }, [])
    const handleTouchEnd = useCallback(
        (e: TouchEvent) => {
            if (!wrapperRef.current) return
            if (!(e.target instanceof HTMLElement)) {
                return
            }
            if (!wrapperRef.current.contains(e.target)) {
                return
            }

            e.preventDefault()

            const endX = e.changedTouches[0].clientX
            const endY = e.changedTouches[0].clientY
            const deltaX = endX - startX
            const deltaY = endY - startY

            onSwipe({ deltaX, deltaY })
        },
        [startX, startY, onSwipe],
    )

    useEffect(() => {
        window.addEventListener('touchstart', handleTouchStart)
        window.addEventListener('touchend', handleTouchEnd)

        return () => {
            window.removeEventListener('touchstart', handleTouchStart)
            window.removeEventListener('touchend', handleTouchEnd)
        }
    }, [handleTouchStart, handleTouchEnd])
    return <div ref={wrapperRef}>{children}</div>
}

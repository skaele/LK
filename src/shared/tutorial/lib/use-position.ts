import { useCallback, useEffect, useRef, useState } from 'react'

import { Dimensions, Position } from '../types'

// eslint-disable-next-line @typescript-eslint/ban-types
type DebouncedFunction<T extends (...args: any[]) => any> = {
    (...args: Parameters<T>): void
    cancel: () => void
}

function debounce<T extends (...args: any[]) => any>(func: T, wait = 300): DebouncedFunction<T> {
    let timeoutId: ReturnType<typeof setTimeout> | null

    const debouncedFunction = (...args: Parameters<T>): void => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func(...args)
        }, wait)
    }

    debouncedFunction.cancel = () => {
        if (timeoutId !== null) {
            clearTimeout(timeoutId)
        }
        timeoutId = null
    }

    return debouncedFunction as DebouncedFunction<T>
}
export const usePosition = () => {
    const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 })
    const [position, setPosition] = useState<Position | null>(null)
    const [visible, setVisible] = useState(false)
    const isMounted = useRef(true)
    const ref = useRef<HTMLElement | null>(null)
    useEffect(() => {
        isMounted.current = true
        return () => {
            isMounted.current = false
        }
    }, [])
    const handleRef = useCallback((node: HTMLElement | null) => {
        ref.current = node
        if (!node) return

        const measureDOMNode = () => {
            if (!node || !isMounted.current) return
            const rect = node.getBoundingClientRect()
            if (isMounted.current) {
                setDimensions({ width: rect.width, height: rect.height })
                setPosition({ top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom })
            }
        }
        const measureDebounced = debounce(measureDOMNode, 200)

        const root = document.getElementById('root')
        if (!root) return

        measureDOMNode()

        const intersectionObserver = new IntersectionObserver(([entry]) => {
            if (isMounted.current) {
                setVisible(entry.isIntersecting)
            }
            if (entry.isIntersecting) {
                intersectionObserver.unobserve(node)
            }
        })

        const mutationObserver = new MutationObserver(measureDOMNode)
        mutationObserver.observe(root, { childList: true, subtree: true })
        intersectionObserver.observe(node)
        window.addEventListener('resize', measureDOMNode)
        window.addEventListener('scroll', measureDebounced, true)

        return () => {
            intersectionObserver.disconnect()
            mutationObserver.disconnect()
            window.removeEventListener('resize', measureDOMNode)
            window.removeEventListener('scroll', measureDebounced, true)
        }
    }, [])

    useEffect(() => {
        return () => {
            handleRef(null) // Call handleRef with null to trigger cleanup on component unmount
        }
    }, [handleRef])

    return { dimensions, position, handleRef, visible, ref }
}

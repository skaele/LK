import { ReactElement, cloneElement, useEffect, useRef, useState } from 'react'

export const useChildDimensions = (children: ReactElement) => {
    const childRef = useRef<HTMLDivElement>(null)
    const childWithRef = cloneElement(children, { forwardedRef: childRef })
    const [childWidth, setChildWidth] = useState<number>(0)
    const [childHeight, setChildHeight] = useState<number>(0)
    const [childPosition, setChildPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 })

    useEffect(() => {
        const handleResize = () => {
            if (childRef.current) {
                setChildWidth(childRef.current.offsetWidth)
                setChildHeight(childRef.current.offsetHeight)
                const rect = childRef.current.getBoundingClientRect()
                setChildPosition({ top: rect.top, left: rect.left })
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [childRef.current])

    return {
        childWithRef,
        childWidth,
        childHeight,
        childPosition,
    }
}

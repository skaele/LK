import { useCallback, useEffect, useRef, useState } from 'react'
import { Dimensions, Position } from './with-tutorial'

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
        window.addEventListener('scroll', measureDOMNode, true)

        return () => {
            intersectionObserver.disconnect()
            mutationObserver.disconnect()
            window.removeEventListener('resize', measureDOMNode)
            window.removeEventListener('scroll', measureDOMNode, true)
        }
    }, [])

    useEffect(() => {
        return () => {
            handleRef(null) // Call handleRef with null to trigger cleanup on component unmount
        }
    }, [handleRef])

    return { dimensions, position, handleRef, visible, ref }
}

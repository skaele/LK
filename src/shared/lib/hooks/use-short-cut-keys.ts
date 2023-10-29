import { useEffect } from 'react'

const keys_pressed = new Set()

const useShortCutKeys = (keys: string[], onPressed: () => void) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            keys_pressed.add(event.key)
            const sliced = keys.slice(0, keys.length - 1)

            if (!sliced.find((k) => !keys_pressed.has(k)) && keys[keys.length - 1] === event.key) {
                event.preventDefault()
                onPressed()
            }
        }

        const handleKeyUp = (event: KeyboardEvent) => {
            keys_pressed.delete(event.key)
        }

        window.addEventListener('keydown', handleKeyDown)

        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [])
}

export default useShortCutKeys

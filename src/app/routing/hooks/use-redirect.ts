import { useEffect } from 'react'

export const useRedirect = () => {
    useEffect(() => {
        if (window.location.href === 'https://e.mospolytech.ru/?p=children#/home') {
            window.location.replace('https://e.mospolytech.ru/old/index.php?p=children')
        }
    }, [window.location.href])
}

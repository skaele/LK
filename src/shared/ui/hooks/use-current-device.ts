import { useLayoutEffect, useState } from 'react'

<<<<<<<< HEAD:src/shared/ui/hooks/use-current-device.ts
import { JS_QUERIES } from '@shared/ui/consts'
========
import { JS_QUERIES } from '@shared/constants'
>>>>>>>> master:src/shared/lib/hooks/use-current-device.ts

type QueryType = typeof JS_QUERIES

const getValues = (
    mediaQueryList: {
        mql: MediaQueryList
        title: QueryType[number]['title']
    }[],
) => {
    return mediaQueryList.reduce(
        (acc, value) => {
            acc[value.title] = value.mql.matches
            return acc
        },
        {} as Record<QueryType[number]['title'], boolean>,
    )
}

const useCurrentDevice = () => {
    const mediaQueryList = JS_QUERIES.map(({ query, title }) => ({ mql: matchMedia(query), title }))
    const [values, setValues] = useState(getValues(mediaQueryList))

    useLayoutEffect(() => {
        mediaQueryList.forEach(({ mql }) =>
            mql.addEventListener('change', () => {
                setValues(getValues(mediaQueryList))
            }),
        )

        return () =>
            mediaQueryList.forEach(({ mql }) =>
                mql.removeEventListener('change', () => {
                    setValues(getValues(mediaQueryList))
                }),
            )
    }, [])

    return {
        ...values,
        currentDevice:
            Object.keys(values).find((el: string) => values[el as keyof typeof values] === true) ?? 'desktop',
    }
}

export default useCurrentDevice

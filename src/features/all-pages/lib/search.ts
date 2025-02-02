import normalizeString from '@shared/lib/normalize-string'
import { IRoutes, Page } from '@shared/routing'

const search = (value: string, routes: IRoutes) => {
    return Object.values(routes).reduce(
        (acc, el) => {
            if (
                normalizeString(el.title ?? '').includes(normalizeString(value)) ||
                el?.keywords?.find((word) => normalizeString(word).includes(normalizeString(value)))
            ) {
                acc[el.id] = el
            }
            return acc
        },
        {} as { [key: string]: Page },
    )
}

export default search

import { IRoute, IRoutes } from '@app/routes/general-routes'
import { getTitleWithSearchHighlight } from '@shared/lib/get-title-with-search-highlight'
import normalizeString from '@utils/normalize-string'

const search = (value: string, routes: IRoutes) => {
    return Object.values(routes).reduce((acc, el) => {
        const searchValue = normalizeString(value)
        const title = normalizeString(el.title)
        const newTitleIndex = title.indexOf(searchValue)

        if (title.includes(searchValue) || el?.keywords?.find((word) => normalizeString(word).includes(searchValue))) {
            const title = getTitleWithSearchHighlight(newTitleIndex, el.title, value)

            acc[el.id] = { ...el, title }
        }
        return acc
    }, {} as { [key: string]: IRoute })
}

export default search

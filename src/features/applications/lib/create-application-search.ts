import normalizeString from '@utils/normalize-string'
import { Section } from '../ui/molecules/create-application-list'
import { getTitleWithSearchHighlight } from '@shared/lib/get-title-with-search-highlight'

type SectionLink = {
    title: string
    link: string
    isExternalLink?: boolean | undefined
    isOpenInNewWindow?: boolean | undefined
    disabled?: boolean | undefined
    exceptionalFormEducationList?: (any | undefined)[] | undefined
}

const createApplicationSearch = (value: string, sections: Section[]) => {
    return sections.reduce((acc, el) => {
        const normalizedValue = normalizeString(value)
        const foundLinks = el.links.reduce((acc, link) => {
            const newTitleIndex = link.title.toLocaleLowerCase().indexOf(normalizedValue)
            if (newTitleIndex !== -1) {
                const title = getTitleWithSearchHighlight(newTitleIndex, link.title, value)

                const newLink = { ...link, title }
                acc.push(newLink)
            }

            return acc
        }, [] as SectionLink[])
        if (!!foundLinks.length) {
            acc.push({ title: el.title, links: foundLinks })
        }

        return acc
    }, [] as Section[])
}

export default createApplicationSearch

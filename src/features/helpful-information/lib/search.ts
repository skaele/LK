<<<<<<<< HEAD:src/features/helpful-information/lib/search.ts
import normalizeString from '@shared/lib/normalize-string'

import { HelpfulPage } from '../types'
========
import normalizeString from '@utils/normalize-string'

import { HelpfulPage } from '../types/helpful-pages'
>>>>>>>> master:src/pages/helpful-information/lib/search.ts

const search = (value: string, pages: HelpfulPage[]) => {
    return pages.reduce((acc, page) => {
        const foundLinks = page.links.filter((link) => normalizeString(link.title).includes(normalizeString(value)))

        if (!!foundLinks.length) acc.push({ title: page.title, links: foundLinks })

        return acc
    }, [] as HelpfulPage[])
}

export default search

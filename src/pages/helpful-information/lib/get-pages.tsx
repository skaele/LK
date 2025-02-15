import React from 'react'

import { HelpfulPages } from '@features/helpful-information'

import LinksList from '../ui/molecules/links-list'

const getPages = (config: HelpfulPages, isStaff: boolean) => {
    return config.reduce(
        (acc, page) => {
            const { id, title, content, visible } = page
            if ((visible === 'staff' && isStaff) || (visible === 'student' && !isStaff) || visible === 'all') {
                acc.push({
                    id,
                    title,
                    content: <LinksList blocks={content} isStaff={isStaff} title={title} />,
                })
            }

            return acc
        },
        [] as { id: string; title: string; content: React.ReactNode }[],
    )
}

export default getPages

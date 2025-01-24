import React, { memo, useMemo } from 'react'

import { Size } from '@shared/ui/types'

import { CurrentPageWrapper } from './styles'

interface Props {
    pages: { title: string; condition?: boolean }[]
    currentPage: number
    elementsVisible: number
    appearance?: boolean
    size: Size
}

const CurrentPage = ({ currentPage, pages, elementsVisible, appearance, size }: Props) => {
    const moreThanNeeded = useMemo(() => pages.length > elementsVisible, [pages.length, elementsVisible])

    return (
        <CurrentPageWrapper
            currentPage={currentPage}
            appearance={appearance}
            moreThanNeeded={moreThanNeeded}
            pages={pages}
            elementsVisible={elementsVisible}
            size={size}
        />
    )
}

export default memo(CurrentPage)

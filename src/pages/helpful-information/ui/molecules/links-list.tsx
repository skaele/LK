import React, { useState } from 'react'

import { HelpfulPage } from '@pages/helpful-information/types/helpful-pages'

import search from '@features/helpful-information/lib/search'

import { Error } from '@shared/ui/error'
import List from '@shared/ui/list'
import { LocalSearch } from '@shared/ui/molecules'

import BlocksList from '../../../../features/helpful-information/ui/blocks-list'

const LinksList = ({ title, blocks, isStaff }: { title: string; blocks: HelpfulPage[]; isStaff: boolean }) => {
    const [searchBlocks, setSearchBlocks] = useState<HelpfulPage[] | null>(null)

    return (
        <List>
            <LocalSearch
                placeholder={`Поиск по ${title}`}
                whereToSearch={blocks}
                searchEngine={search}
                setResult={setSearchBlocks}
                validationCheck
            />
            <BlocksList blocks={searchBlocks ?? blocks} isStaff={isStaff} />
            {searchBlocks?.length === 0 && <Error text="Ничего не найдено" />}
        </List>
    )
}

export default LinksList

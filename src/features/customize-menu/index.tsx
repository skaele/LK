import React, { useState } from 'react'

import { Store } from 'effector'
import { useUnit } from 'effector-react'
import styled from 'styled-components'

import search from '@features/all-pages/lib/search'
import { CustomizeLeftsideBarItem } from '@features/customize-menu/ui/customize-leftside-bar-item'

import { menuModel } from '@entities/menu'

import { IRoutes, Page } from '@shared/routing'
import { LocalSearch } from '@shared/ui/molecules'

const CustomizeMenuStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (min-width: 1001px) {
        width: 600px;
        height: 600px;
    }
`

type Props = {
    enabledListStore: Store<IRoutes | null>
    requiredListStore: Store<string[]>
    remove: (id: string) => void
    add: (id: string) => void
}

const CustomizeMenu = ({ enabledListStore, add, remove, requiredListStore }: Props) => {
    const [enabledList, requiredList] = useUnit([enabledListStore, requiredListStore])
    const { visibleRoutes } = menuModel.selectors.useMenu()
    const [searchResult, setSearchResult] = useState<IRoutes | null>(null)

    if (!enabledList || !visibleRoutes) return null

    const switchChosen = (id: string) => {
        if (enabledList[id]) {
            remove(id)
        } else {
            add(id)
        }
    }

    return (
        <CustomizeMenuStyled>
            <LocalSearch
                placeholder="Поиск"
                whereToSearch={visibleRoutes}
                searchEngine={search}
                setResult={setSearchResult}
            />
            {Object.values(searchResult ?? visibleRoutes)
                .filter((route) => !requiredList.includes(route.id))
                .map((el: Page, index) => {
                    return (
                        <CustomizeLeftsideBarItem
                            {...el}
                            key={index}
                            chosen={!!enabledList[el.id]}
                            switchMenuItem={switchChosen}
                        />
                    )
                })}
        </CustomizeMenuStyled>
    )
}

export default CustomizeMenu

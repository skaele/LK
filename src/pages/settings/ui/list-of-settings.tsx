import { TEMPLATE_SETTINGS_ROUTE } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { TFullSettingsModel } from '@pages/settings/model'
import { LocalSearch } from '@shared/ui/molecules'
import React, { useState } from 'react'
import { useRouteMatch } from 'react-router'

import { MEDIA_QUERIES } from '@shared/constants'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import Flex from '@shared/ui/flex'
import { MenuItem } from '@shared/ui/menu-item'
import styled from 'styled-components'
import SearchResultField from '../fields/search-result-field'
import search from '../lib/search'

const ListOfSettingsWrapper = styled(Flex)<{ open: boolean }>`
    height: 100%;
    z-index: 1;
    padding-top: 0;
    margin-right: 25px;
    min-width: 240px;
    width: 240px;
    position: relative;

    ${MEDIA_QUERIES.isMobile} {
        padding: 0;
        transition: 0.2s;
        margin-right: 0;
        box-shadow: none;
        width: ${({ open }) => (open ? '100%' : '0')};
        max-width: ${({ open }) => (open ? '100%' : '0')};
        min-width: 0;
        display: ${({ open }) => (open ? 'flex' : 'none')};
    }
`

type Props = {
    settingsConfig: TFullSettingsModel
}

const ListOfSettings = ({ settingsConfig }: Props) => {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState<string[][] | null>(null)
    const { allRoutes } = menuModel.selectors.useMenu()
    const { isMobile } = useCurrentDevice()
    const params = useRouteMatch(TEMPLATE_SETTINGS_ROUTE)?.params as { id: string | undefined }

    const handleSearch = <T,>(value: string, whereToSearch: T) =>
        search(value, whereToSearch as TFullSettingsModel, allRoutes)

    if (!allRoutes) return null
    const listOfSettings = Object.keys(settingsConfig ?? {}).map((name) => allRoutes[name]) ?? {}

    return (
        <ListOfSettingsWrapper d="column" gap="8px" open={!params?.id}>
            <LocalSearch
                whereToSearch={settingsConfig}
                searchEngine={handleSearch}
                placeholder="Поиск"
                setExternalValue={setSearchValue}
                setResult={setSearchResult}
                validationCheck
                loadingOnType
            />
            {searchValue && <SearchResultField list={searchResult} listOfSettings={listOfSettings} />}

            {!searchValue.length &&
                listOfSettings.map((route) => {
                    if ((isMobile && route.id !== 'settings-customize-menu') || !isMobile) {
                        return (
                            <MenuItem
                                {...route}
                                title={route.title.slice(11, route.title.length)}
                                key={route.id}
                                type="horizontal"
                            />
                        )
                    }
                })}
        </ListOfSettingsWrapper>
    )
}

export default ListOfSettings

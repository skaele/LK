import React from 'react'
import { FiSearch } from 'react-icons/fi'

import styled from 'styled-components'

import { Input } from '@shared/ui/atoms'
import { ColumnType, TableSearchType } from '@shared/ui/table/types'

const SearchWrapper = styled.div<{ closed: boolean }>`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    padding: ${({ closed }) => (closed ? '0px' : '10px')};
    width: 100%;
    height: ${({ closed }) => (closed ? '0px' : '60px')};
    opacity: ${({ closed }) => (closed ? '0' : '1')};
    visibility: ${({ closed }) => (closed ? 'hidden' : 'visible')};
`

interface Props {
    search: TableSearchType
    setSearch: React.Dispatch<React.SetStateAction<TableSearchType>> | ((query: TableSearchType) => void)
}

const getType = (type?: ColumnType) => {
    switch (type) {
        case 'date':
            return 'date'
        case 'rub':
            return 'number'
        default:
            return 'text'
    }
}

const Search = ({ search, setSearch }: Props) => {
    return (
        <SearchWrapper closed={!search?.column}>
            <Input
                value={search?.value ?? ''}
                setValue={(value: string) => {
                    if (search) {
                        setSearch({ ...search, value })
                    } else setSearch(null)
                }}
                width="100%"
                type={getType(search?.column?.type)}
                placeholder={search?.column?.title}
                leftIcon={<FiSearch />}
                minWidth={'auto'}
            />
        </SearchWrapper>
    )
}

export default Search

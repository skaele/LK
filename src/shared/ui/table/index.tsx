import AddedElementsList from '@ui/added-elements-list'
import React from 'react'
import styled from 'styled-components'
import useFilter from './lib/hooks/use-filter'
import { TableProps } from './types'
import { Body, Header, Search, Footer } from './ui'
import { TutorialComponent } from 'widgets/tutorial/lib/with-tutorial'

const TableWrapper = styled.div`
    width: 100%;
    box-shadow: var(--block-shadow);
    border-radius: var(--brLight);
    color: var(--text);
    background: var(--block-content);
    overflow: hidden;
`

const Table = ({
    columns,
    columnsExtended,
    data,
    maxOnPage,
    onRowClick,
    footer,
    select,
    selected,
    loading = false,
    forwardedRef,
    pagination,
}: TableProps & TutorialComponent) => {
    const {
        sort,
        setSort,
        search,
        setSearch,
        resultData,
        filter,
        setFilter,
        filterList,
        setFilterList,
        onRemoveOne,
        onRemoveAll,
    } = useFilter(data)

    return (
        <TableWrapper ref={forwardedRef}>
            <AddedElementsList
                hideWithEmpty
                setList={setFilterList}
                padding="0 10px"
                list={filterList}
                onRemoveOne={onRemoveOne}
                onRemoveAll={onRemoveAll}
            />
            <Search search={search} setSearch={setSearch} />
            <Header
                sort={sort}
                setSort={setSort}
                columns={columns}
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
                tableHasSelect={Boolean(select)}
            />
            <Body
                loading={loading}
                onRowClick={onRowClick}
                filter={filter}
                columns={columns}
                columnsExtended={columnsExtended}
                data={resultData}
                maxOnPage={maxOnPage}
                select={select}
                selected={selected}
                pagination={pagination}
            />
            <Footer footer={footer} data={data} columns={columns} />
        </TableWrapper>
    )
}

export default Table

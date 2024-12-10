import React from 'react'
import { ColumnProps } from '@shared/ui/table/types'
import { Column, HeaderWrapper } from '@shared/ui/table/ui'
import { FiSearch } from 'react-icons/fi'
import { FaSort } from 'react-icons/fa6'
import Select from '@features/select'
import styled from 'styled-components'

interface Props {
    columns: ColumnProps[]
    tableHasSelect?: boolean
    padding?: string
}
export const Header = ({ columns, tableHasSelect, padding }: Props) => {
    return (
        <HeaderWrapper>
            {tableHasSelect && <Column width="36px" align="center" className={'one'}></Column>}
            {columns.map((column) => {
                return (
                    <Column
                        padding={padding}
                        overflow={!!column.catalogs ? 'visible' : 'hidden'}
                        width={column.width}
                        title={column.title}
                        clickable={column.search}
                        align={column.search ? 'space-between' : column.align}
                        key={column.field}
                        showFull={column.showFull}
                        className={column.priority?.toString() ?? 'one'}
                        // onClick={}
                    >
                        {!column.catalogs && column.title}
                        {!column.catalogs && !column.sort && column.search && (
                            <FiSearch
                                className="icon"
                                // style={{
                                //     color: column.field === search?.column?.field ? 'var(--reallyBlue)' : 'var(--text)',
                                // }}
                            />
                        )}
                        {column.sort && (
                            <FaSort
                                className="icon"
                                // style={{
                                //     color: column.field === sort?.column?.field ? 'var(--reallyBlue)' : 'var(--text)',
                                // }}
                            />
                        )}
                        {column.catalogs && (
                            <FilterWrapper>
                                <Select
                                    appearance={false}
                                    items={column.catalogs ?? []}
                                    setSelected={
                                        () => {}
                                        // setFilter((prev) => {
                                        //     if (page) {
                                        //         prev = { ...prev, [column.field]: { column, value: page } }
                                        //         return prev
                                        //     }
                                        //     return prev
                                        // })
                                    }
                                    selected={null}
                                    placeholder={column.title}
                                />
                            </FilterWrapper>
                        )}
                    </Column>
                )
            })}
        </HeaderWrapper>
    )
}
const FilterWrapper = styled.div`
    display: flex;
    align-items: center;
`

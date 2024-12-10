import React from 'react'
import { ColumnProps } from '@shared/ui/table/types'
import { FaSort } from 'react-icons/fa6'
import styled from 'styled-components'
import { Align } from '@shared/ui/types'
import { useUnit } from 'effector-react'
import { scienceModel } from '@entities/science'

interface Props {
    columns: ColumnProps[]
    tableHasSelect?: boolean
    padding?: string
}
export const Header = ({ columns, tableHasSelect, padding }: Props) => {
    const [sorts, sortPressed] = useUnit([scienceModel.stores.sorts, scienceModel.events.sortPressed])
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
                        onClick={() => sortPressed(column.field)}
                    >
                        <div>{column.title}</div>
                        {column.sort && (
                            <FaSort
                                className="icon"
                                style={{
                                    color:
                                        sorts?.length && sorts.find((sort) => sort.field === column.field)
                                            ? 'var(--reallyBlue)'
                                            : 'var(--text)',
                                }}
                            />
                        )}
                    </Column>
                )
            })}
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-weight: 600;
    font-size: 0.9em;
    z-index: 10;

    .icon {
        cursor: pointer;
    }

    @media (max-width: 650px) {
        .four {
            display: none;
        }
    }

    @media (max-width: 550px) {
        font-size: 0.8em;
        .three {
            display: none;
        }
    }

    @media (max-width: 450px) {
        .two {
            display: none;
        }
    }
`
const Column = styled.div<{
    even?: boolean
    align?: Align | 'space-between'
    clickable?: boolean
    padding?: string
    width?: string
    overflow?: string
    showFull?: boolean
    onRowClick?: () => void
}>`
    width: ${({ width }) => width ?? '100%'};
    min-width: ${({ width }) => width ?? 'auto'};
    padding: ${({ padding }) => padding ?? '20px'};
    height: 100%;
    text-align: ${({ align }) => align && align};
    cursor: ${({ clickable }) => clickable && 'pointer'};
    overflow: ${({ overflow }) => overflow ?? 'hidden'};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    white-space: ${({ showFull }) => (showFull ? 'wrap' : 'nowrap')};
    text-overflow: ${({ showFull }) => (showFull ? 'clip' : 'ellipsis')};
    position: relative;

    @media (max-width: 700px) {
        padding: ${({ clickable }) => !clickable && '10px'};
    }
`

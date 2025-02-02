import React from 'react'

import { IndexedProperties } from '@utility-types/indexed-properties'
import styled from 'styled-components'

import KeyValue from '@shared/ui/atoms/key-value'
import displayWithType from '@shared/ui/table/lib/display-with-type'
import { ColumnProps } from '@shared/ui/table/types'

const RowModalWrapper = styled.div`
    @media (min-width: 1001px) {
        max-width: 500px;
    }
`

interface Props {
    obj: IndexedProperties
    columns: ColumnProps[]
}

const RowModal = ({ obj, columns }: Props) => {
    return (
        <RowModalWrapper>
            {columns.map((column) => {
                return (
                    <KeyValue
                        keyStr={column.title}
                        value={
                            column.render
                                ? column.render(obj[column.field], obj)
                                : displayWithType(obj[column.field], column.type)
                        }
                        key={column.title}
                    />
                )
            })}
        </RowModalWrapper>
    )
}

export default RowModal

import React from 'react'

import { useUnit } from 'effector-react'

import { phonebookModel } from '@entities/phonebook'

import { ExpandableItem } from './expandable-item'
import { ScrollWrapper } from './styled'

export const Subdivisions = () => {
    const { subdivisions } = useUnit({
        subdivisions: phonebookModel.stores.subdivisions,
    })

    if (!subdivisions) return null
    return (
        <ScrollWrapper d="column">
            {subdivisions.map((subdivision) => (
                <ExpandableItem key={subdivision.name} item={subdivision} parents={[]} />
            ))}
        </ScrollWrapper>
    )
}

import React from 'react'
import { ExpandableItem } from './expandable-item'
import Flex from '@shared/ui/flex'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'

export const Subdivisions = () => {
    const subdivisions = useUnit(phonebookModel.stores.$subdivisions)

    if (!subdivisions) return null
    return (
        <Flex d="column">
            {Object.keys(subdivisions).map((subdivision) => (
                <ExpandableItem key={subdivision} item={{ [subdivision]: subdivisions[subdivision] }} layer={1} />
            ))}
        </Flex>
    )
}

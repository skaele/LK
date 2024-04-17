import React from 'react'
import { ExpandableItem } from './expandable-item'
import Flex from '@shared/ui/flex'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import { Error } from '@shared/ui/error'
import { Button } from '@shared/ui/button'
import { AiOutlineReload } from 'react-icons/ai'

export const Subdivisions = () => {
    const subdivisions = useUnit(phonebookModel.stores.$subdivisions)

    if (!subdivisions) return null
    return (
        <Flex d="column">
            {subdivisions?.length ? (
                subdivisions.map((subdivision) => (
                    <ExpandableItem key={subdivision.name} item={subdivision} layer={1} />
                ))
            ) : (
                <Error text={'Не удалось загрузить данные'}>
                    {
                        <Button
                            onClick={() => {
                                phonebookModel.events.getSubdivisions()
                            }}
                            text="Загрузить снова"
                            icon={<AiOutlineReload />}
                        />
                    }
                </Error>
            )}
        </Flex>
    )
}

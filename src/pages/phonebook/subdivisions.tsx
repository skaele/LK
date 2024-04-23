import React from 'react'
import { ExpandableItem } from './expandable-item'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import { Error } from '@shared/ui/error'
import { Button } from '@shared/ui/button'
import { AiOutlineReload } from 'react-icons/ai'
import { ScrollWrapper } from './styled'

export const Subdivisions = () => {
    const subdivisions = useUnit(phonebookModel.stores.$subdivisions)

    if (!subdivisions) return null
    return (
        <ScrollWrapper d="column">
            {subdivisions?.map ? (
                subdivisions.map((subdivision) => (
                    <ExpandableItem key={subdivision.name} item={subdivision} parents={[]} />
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
        </ScrollWrapper>
    )
}

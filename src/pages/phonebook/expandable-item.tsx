import { phonebookModel } from '@entities/phonebook'
import { Subdivision } from '@shared/api/model/phonebook'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import styled from 'styled-components'

export const ExpandableItem = ({ item, layer }: { item: Subdivision; layer: number }) => {
    const childrens = item.subdivs
    const [expanded, setExpanded] = useState(false)
    const chosen = useUnit(phonebookModel.stores.$chosenSubdivision)
    return (
        <Flex p={`0 0 0 ${(layer - 1) * 15}px`} d="column">
            <ButtonLayout
                $chosen={chosen === item}
                onClick={() => {
                    setExpanded((prev) => (chosen && chosen.name !== item.name ? true : !prev))
                    phonebookModel.events.setChosenSubdivision(item)
                }}
            >
                <Flex ai="center" jc="space-between" w="100%" gap="5px">
                    {item.name}
                    {childrens.length > 0 && (
                        <Button
                            icon={expanded ? <FiChevronDown size={20} /> : <FiChevronRight size={20} />}
                            width="20px"
                            height="20px"
                            background="transparent"
                            onClick={(e) => {
                                e.stopPropagation()
                                setExpanded((prev) => !prev)
                            }}
                        />
                    )}
                </Flex>
            </ButtonLayout>
            {expanded &&
                childrens.map((children) => <ExpandableItem key={children.name} item={children} layer={layer + 1} />)}
        </Flex>
    )
}
const ButtonLayout = styled.div<{ $chosen: boolean }>`
    background-color: ${({ $chosen }) => ($chosen ? 'var(--theme-1t)' : 'transparent')};
    padding: 10px 25px 8px 25px;
    border-radius: 10px;
    width: 100%;
    cursor: pointer;
    color: var(--text);
    font-weight: 600;
    line-height: 24px;
    &:hover {
        background-color: var(--theme-1);
    }
`

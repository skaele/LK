import { phonebookModel } from '@entities/phonebook'
import { Subdivision } from '@shared/api/model/phonebook'
import useQueryParams from '@shared/lib/hooks/use-query-params'
import { Button } from '@shared/ui/button'
import Flex from '@shared/ui/flex'
import { useUnit } from 'effector-react'
import React, { useEffect, useState } from 'react'
import { FiChevronDown, FiChevronRight } from 'react-icons/fi'
import { useHistory } from 'react-router'
import styled from 'styled-components'

export const ExpandableItem = ({ item, parents }: { item: Subdivision; parents: Subdivision[] }) => {
    const history = useHistory()
    const query = useQueryParams()
    const search = query.get('search') || '/'
    const fio = search.split('/')[1]
    const childrens = item.subdivs
    const chosenPath = useUnit(phonebookModel.stores.subdivisionPath)
    const [expanded, setExpanded] = useState<boolean>(false)

    useEffect(() => {
        setExpanded(!!(chosenPath && chosenPath.some((el) => el.name === item.name)))
    }, [chosenPath])

    return (
        <Flex p={`5px 0 5px ${parents.length * 15}px`} d="column">
            <ButtonLayout
                $chosen={!!(chosenPath && chosenPath[0]?.name === item.name)}
                onClick={() => {
                    phonebookModel.events.setSubdivisionPath([item, ...parents])
                    history.push({ search: new URLSearchParams({ search: item.name + '/' + fio }).toString() })
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
                childrens.map((children) => (
                    <ExpandableItem key={children.name} item={children} parents={[item, ...parents]} />
                ))}
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

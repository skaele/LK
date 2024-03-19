import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import styled from 'styled-components'

export const SubdivisionItem = ({
    title,
    items,
    action,
}: {
    title: string
    items: string[]
    action: (item: string) => void
}) => {
    return (
        <Flex d="column" ai="flex-start" gap="7px">
            <Subtext>{title}</Subtext>
            {items.map((item) => (
                <Button key={item} onClick={() => action(item)}>
                    {item}
                </Button>
            ))}
        </Flex>
    )
}

const Button = styled.button`
    background-color: transparent;
    text-align: left;
    width: 100%;
    padding: 10px 25px 8px 25px;
    border-radius: 10px;
    border: none;
    margin: 0;
    cursor: pointer;
    color: var(--text);
    font-weight: 600;
    line-height: 24px;
    &:hover {
        background-color: var(--theme-1);
    }
`

import Avatar from '@features/home/ui/molecules/avatar'
import { Employee, Subdivision } from '@shared/api/model/phonebook'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import styled from 'styled-components'
import getImageSize from 'widgets/user/lib/get-image-size'

export const SubdivisionItem = ({
    title,
    items,
    action,
}: {
    title: string
    action: (item: Employee | null) => void
    items: Subdivision[] | Employee[]
}) => {
    return (
        <Flex d="column" ai="flex-start" gap="7px">
            <Subtext>{title}</Subtext>
            {items.map((item) => (
                <Button
                    key={'fio' in item ? item.fio + item.post : item.name}
                    onClick={() => action('fio' in item ? item : null)}
                >
                    {'fio' in item && (
                        <Avatar
                            name={item.fio}
                            avatar={item.avatar}
                            width={getImageSize('horizontal', 'middle')}
                            height={getImageSize('horizontal', 'middle')}
                            marginRight={'7px'}
                        />
                    )}
                    {'fio' in item ? item.fio : item.name}
                </Button>
            ))}
        </Flex>
    )
}

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 4px;
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

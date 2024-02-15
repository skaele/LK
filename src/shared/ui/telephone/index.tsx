import { formatToPhone } from '@shared/lib/masks'
import React from 'react'
import { HiOutlinePhone } from 'react-icons/hi'
import Flex from '../flex'
import { TelephoneStyled } from './styles'

type Props = {
    tel: string
    children?: ChildrenType
}

export const Telephone = ({ tel, children }: Props) => {
    return (
        <TelephoneStyled href={`tel:${tel}`}>
            <Flex gap="4px">
                <HiOutlinePhone />
                {children ?? formatToPhone(tel)}
            </Flex>
        </TelephoneStyled>
    )
}

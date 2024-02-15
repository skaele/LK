import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import Flex from '../flex'
import { EmailStyled } from './styles'

type Props = {
    email: string
    children?: ChildrenType
}

export const Email = ({ email, children }: Props) => {
    return (
        <EmailStyled href={`mailto:${email}`}>
            <Flex gap="4px">
                <HiOutlineMail />
                {children ?? email}
            </Flex>
        </EmailStyled>
    )
}

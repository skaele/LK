import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import React from 'react'
import styled from 'styled-components'

export const InfoItem = ({ title, children }: { title: string; children?: React.ReactElement | string | null }) => {
    if (!children) return null
    return (
        <Flex d="column" ai="flex-start" jc="flex-start" gap="17px">
            <Subtext fontSize="0.9rem">{title}</Subtext>
            <Content>{children}</Content>
        </Flex>
    )
}

const Content = styled.p`
    padding-left: 14px;
`

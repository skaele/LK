import { articleModel } from '@entities/science'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import Flex from '@shared/ui/flex'
import { Loading } from '@shared/ui/loading'
import { Title } from '@shared/ui/title'
import { useUnit } from 'effector-react'
import React from 'react'
import styled from 'styled-components'

export const DetailsModal = () => {
    const details = useUnit(articleModel.stores.details)
    const { isMobile } = useCurrentDevice()

    if (!details)
        return (
            <Flex jc="center">
                <Loading />
            </Flex>
        )
    return (
        <Flex d="column" gap="0.5rem" mw="calc(800px + 1rem)">
            <Flex gap="1rem" ai="flex-start" d={isMobile ? 'column' : 'row'}>
                <Column title="Scopus" titles={details.titles.scopus} data={details.data.scopus} />
                <Column title="WoS" titles={details.titles.wos} data={details.data.wos} />
            </Flex>
        </Flex>
    )
}

const Column = ({ title, titles, data }: { title: string; titles: any; data: any }) => {
    const { isMobile } = useCurrentDevice()
    return (
        <Flex w={isMobile ? '100%' : '50%'} ai="flex-start" d="column" $wrap={true} gap="1rem">
            <Title align="left" size={2}>
                {title}
            </Title>
            {Object.entries(titles).map(([title, name]) => (
                <Row title={name as string} data={data[title]} key={title} />
            ))}
        </Flex>
    )
}

const Row = ({ title, data }: { title: string; data: string }) => {
    if (!data) return null
    return (
        <Flex ai="flex-start" d="column" gap="0.5rem">
            <Title align="left" size={4}>
                {title}
            </Title>
            <Paragraph>{data}</Paragraph>
        </Flex>
    )
}

const Paragraph = styled.p`
    word-wrap: break-word;
    max-width: 100%;
`

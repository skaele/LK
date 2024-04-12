import { Colors } from '@shared/constants'
import getLettersColors from '@shared/lib/get-letters-colors'
import Flex from '@shared/ui/flex'
import { Title } from '@shared/ui/title'
import React from 'react'
import { Subdivision } from '@shared/api/model/phonebook'
import { InfoItem } from './info-item'
import { Content, Header } from './styled'
import useResize from '@shared/lib/hooks/use-resize'

export const SubdivisionModal = ({ subdivision }: { subdivision: Subdivision }) => {
    const main = getLettersColors(subdivision.title ?? '', 'main') ?? Colors.blue.main
    const { width } = useResize()
    return (
        <Flex w={width <= 800 ? '100%' : '600px'} d="column">
            <Header bgColor={main}>
                <Title align="left" size={3}>
                    {subdivision.title}
                </Title>
            </Header>
            <Content>
                <InfoItem title="Руководитель отдела">{subdivision.head}</InfoItem>
                <InfoItem title="Номер телефона">{subdivision.phone}</InfoItem>
                <InfoItem title="Добавочный номер">{subdivision.extPhone}</InfoItem>
                <InfoItem title="Электронная почта">{subdivision.email}</InfoItem>
                <InfoItem title="Адрес">{subdivision.address}</InfoItem>
                <InfoItem title="Кабинет">{subdivision.cabinet}</InfoItem>
            </Content>
        </Flex>
    )
}

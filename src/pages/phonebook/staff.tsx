import Flex from '@shared/ui/flex'
import React from 'react'
import { SubdivisionItem } from './subdivision-item'

const head = 'Хуснулина Дария Рашитовна'
const staff = [
    'Асташова Алина Алексеевна',
    'Булавин Владислав Алексеевич',
    'Горбунов Никита Сергеевич',
    'Зишко Сабина Сергеевна',
    'Лукьянов Леонид Михайлович',
    'Стулов Владимир Вячеславович',
]

export const Staff = ({ title }: { title: string }) => {
    return (
        <Flex d="column" ai="flex-start" jc="flex-start" gap="20px">
            <SubdivisionItem title="Информация" items={[title]} />
            <SubdivisionItem title="Руководитель" items={[head]} />
            <SubdivisionItem title="Сотрудники" items={staff} />
        </Flex>
    )
}

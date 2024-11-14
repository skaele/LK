import React from 'react'
import { Message } from '@ui/atoms'
import { FiInfo } from 'react-icons/fi'

export const PersonnelOrdersMessage = () => {
    return (
        <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
            В этом разделе можно посмотреть свои заявления на диспансеризацию и согласовать их. В архив помещаются все
            выполненные заявления старше 2 месяцев.
        </Message>
    )
}

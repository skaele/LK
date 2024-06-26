import { PageWrapper } from '@features/payments'
import { Message } from '@shared/ui/atoms'
import React from 'react'
import { FiInfo } from 'react-icons/fi'

export const Approver = () => {
    return (
        <PageWrapper>
            <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                <p>Интерфейс все еще находится в разработке</p>
            </Message>
        </PageWrapper>
    )
}

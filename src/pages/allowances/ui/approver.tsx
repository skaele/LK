import { Message } from '@shared/ui/atoms'
import Table from '@shared/ui/table'
import { useUnit } from 'effector-react'
import React from 'react'
import { FiInfo } from 'react-icons/fi'
import { getAllowancesColumns } from '../lib/get-allowances-columns'
import { approverAllowancesQuery } from '@entities/allowances/model/allowances-query'
import Flex from '@shared/ui/flex'

export const Approver = () => {
    const [allowances] = useUnit([approverAllowancesQuery.$data])
    return (
        <Flex gap="16px" d="column">
            <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                <p>Роль: Согласующий</p>
                <p>Интерфейс все еще находится в разработке</p>
            </Message>
            <Table
                // loading={!Allowances}
                loading={false}
                columns={getAllowancesColumns()}
                data={allowances}
                maxOnPage={7}
            />
        </Flex>
    )
}

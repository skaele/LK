import { allowancesQuery } from '@entities/allowances/model/allowances-query'
import { Message } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'
import { useUnit } from 'effector-react'
import React from 'react'
import { FiInfo } from 'react-icons/fi'
import { getAllowancesColumns } from '../lib/get-allowances-columns'

export const Approver = () => {
    const [allowances] = useUnit([allowancesQuery.$data])
    return (
        <PageBlock>
            <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                <p>Интерфейс все еще находится в разработке</p>
            </Message>
            <Table
                // loading={!Allowances}
                loading={false}
                columns={getAllowancesColumns()}
                data={allowances}
                maxOnPage={7}
            />
        </PageBlock>
    )
}

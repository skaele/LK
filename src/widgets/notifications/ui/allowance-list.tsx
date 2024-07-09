import { AllowanceNotification } from '@shared/api/model/notification'
import Flex from '@shared/ui/flex'
import React from 'react'
import { CardAllowance } from './atoms/card-allowance'
import { useUnit } from 'effector-react'
import { allowancesModel } from '@entities/allowances'

export const AllowanceList = () => {
    const allowances = useUnit(allowancesModel.stores.employeeAllowances)
    if (!allowances) return null

    return (
        <Flex d="column" gap="8px" p="0.25rem">
            {allowances.map((notification) => (
                <CardAllowance allowance={notification as AllowanceNotification} key={notification.id} />
            ))}
        </Flex>
    )
}

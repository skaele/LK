import { PersonalAllowance } from '@shared/api/model/notification'
import Flex from '@shared/ui/flex'
import React, { useEffect } from 'react'
import { CardAllowance } from './atoms/card-allowance'
import { useUnit } from 'effector-react'
import { allowancesModel } from '@entities/allowances'
import { Loading } from '@shared/ui/loading'

export const AllowanceList = () => {
    const [allowances, pageMounted] = useUnit([
        allowancesModel.queries.personalAllowances.$data,
        allowancesModel.events.personalAllowancesMounted,
    ])
    useEffect(() => {
        pageMounted()
    }, [])
    if (!allowances) return <Loading />

    return (
        <Flex d="column" gap="8px" p="0.25rem">
            {allowances.map((notification) => (
                <CardAllowance allowance={notification as PersonalAllowance} key={notification.allowanceId} />
            ))}
        </Flex>
    )
}

import { PersonalAllowance } from '@shared/api/model/notification'
import Flex from '@shared/ui/flex'
import React, { useEffect } from 'react'
import { CardAllowance } from './atoms/card-allowance'
import { useUnit } from 'effector-react'
import { allowancesModel } from '@entities/allowances'
import { Loading } from '@shared/ui/loading'
import { Error } from '@shared/ui/error'

export const AllowanceList = () => {
    const [allowances, loading, pageMounted] = useUnit([
        allowancesModel.queries.personalAllowances.$data,
        allowancesModel.queries.personalAllowances.$pending,
        allowancesModel.events.personalAllowancesMounted,
    ])
    useEffect(() => {
        pageMounted()
    }, [])

    if (loading)
        return (
            <Flex h="100%" d="column" ai="center" jc="center">
                <Loading />
            </Flex>
        )

    return (
        <Flex d="column" gap="8px" p="0.25rem">
            {allowances ? (
                allowances.length > 0 ? (
                    allowances.map((notification) => (
                        <CardAllowance allowance={notification as PersonalAllowance} key={notification.allowanceId} />
                    ))
                ) : (
                    <Error text="Нет надбавок"></Error>
                )
            ) : (
                <Error text="Произошла ошибка"></Error>
            )}
        </Flex>
    )
}

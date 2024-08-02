import { PersonalAllowance } from '@shared/api/model/notification'
import Flex from '@shared/ui/flex'
import React, { useEffect, useMemo } from 'react'
import { CardAllowance } from './atoms/card-allowance'
import { useUnit } from 'effector-react'
import { allowancesModel } from '@entities/allowances'
import { Loading } from '@shared/ui/loading'
import { Error } from '@shared/ui/error'
import { SelectPage } from '@features/select'

export const AllowanceList = ({ searchQuery, filter }: { searchQuery: string; filter: SelectPage | null }) => {
    const [allowances, loading, pageMounted] = useUnit([
        allowancesModel.queries.personalAllowances.$data,
        allowancesModel.queries.personalAllowances.$pending,
        allowancesModel.events.personalAllowancesMounted,
    ])
    useEffect(() => {
        pageMounted()
    }, [])

    const filteredAllowances = useMemo(() => {
        const filteredBySearch = searchQuery
            ? allowances?.filter(
                  (allowance) =>
                      allowance.position.includes(searchQuery) ||
                      allowance.paymentIdentifier.includes(searchQuery) ||
                      allowance.sourceOfFunding.includes(searchQuery),
              )
            : allowances
        return filter && filter?.id === 'unread'
            ? filteredBySearch?.filter((allowance) => allowance.selfApprovalStatus === 'Unknown')
            : filteredBySearch
    }, [allowances, searchQuery, filter])

    if (loading)
        return (
            <Flex h="100%" d="column" ai="center" jc="center">
                <Loading />
            </Flex>
        )

    return (
        <Flex d="column" gap="8px" p="0.25rem">
            {filteredAllowances ? (
                filteredAllowances.length > 0 ? (
                    filteredAllowances.map((notification) => (
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

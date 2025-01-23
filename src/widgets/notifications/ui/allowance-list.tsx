import React, { useEffect, useMemo } from 'react'

import { allowancesModel } from '@entities/allowances'
import { SelectPage } from '@features/select'
import { DevModeMessage } from '@pages/allowances/ui/dev-mode-message'
import { PersonalAllowance } from '@shared/api/model/notification'
import { Error } from '@shared/ui/error'
import Flex from '@shared/ui/flex'
import { Loading } from '@shared/ui/loading'
import { useUnit } from 'effector-react'

import { CardAllowance } from './atoms/card-allowance'

export const AllowanceList = ({ searchQuery, filter }: { searchQuery: string; filter: SelectPage | null }) => {
    const [allowances, loading, pageMounted] = useUnit([
        allowancesModel.stores.personalAllowances.data,
        allowancesModel.stores.personalAllowances.loading,
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
            ? filteredBySearch?.filter(
                  (allowance) =>
                      allowance.selfApprovalStatus === 'Unknown' || allowance.selfApprovalStatus === 'InProgress',
              )
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
            <DevModeMessage />
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

import { SelectPage } from '@features/select'
import { Error } from '@shared/ui/error'
import Flex from '@shared/ui/flex'
import { Loading } from '@shared/ui/loading'
import React, { useEffect, useMemo } from 'react'
import { CardOrder } from './atoms/card-order'
import { personnelOrdersModel } from '@entities/personnel-orders'
import { useUnit } from 'effector-react'

export const PersonnelOrderList = ({ searchQuery, filter }: { searchQuery: string; filter: SelectPage | null }) => {
    const [orders, loading, pageMounted] = useUnit([
        personnelOrdersModel.stores.orders,
        personnelOrdersModel.stores.loading,
        personnelOrdersModel.events.pageMounted,
    ])
    useEffect(() => {
        pageMounted()
    }, [])

    const filteredOrders = useMemo(() => {
        const filteredBySearch = searchQuery
            ? orders?.filter((order) => order.job.includes(searchQuery) || order.type.includes(searchQuery))
            : orders
        return filter && filter?.id === 'unread'
            ? filteredBySearch?.filter((order) => order.status === 'Unknown' || order.status === 'InProgress')
            : filteredBySearch
    }, [orders, searchQuery, filter])

    if (loading)
        return (
            <Flex h="100%" d="column" ai="center" jc="center">
                <Loading />
            </Flex>
        )

    return (
        <Flex d="column" gap="8px" p="0.25rem">
            {filteredOrders ? (
                filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => <CardOrder order={order} key={order.id} />)
                ) : (
                    <Error text="Нет надбавок"></Error>
                )
            ) : (
                <Error text="Произошла ошибка"></Error>
            )}
        </Flex>
    )
}

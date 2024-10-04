import { createQuery } from '@farfetched/core'
import { createEvent, sample } from 'effector'
import { Order } from './types'

const pageMounted = createEvent()
const statusChanged = createEvent<{
    orderId: string
    isConfirmed: boolean
}>()

const orders: Order[] = [
    {
        id: '87ca958a-d0ce-4c71-9ac4-f1cd958c580f',
        job: 'Тестовая компенсация 2',
        workDay: '2022-02-16',
        type: 'Командировка',
        status: 'InProgress',
        orderStatus: '',
        orderTitle: '',
    },
    {
        id: 'f88d46d2-093c-47bb-bf49-e7e3dc0a5865',
        job: 'Тестовая компенсация 1',
        workDay: '2022-02-15',
        type: 'Командировка',
        status: 'Approved',
        orderStatus: 'Создан',
        orderTitle: 'Приказ №1 от 15.02.2022',
    },
]

const ordersQuery = createQuery({
    handler: async () => orders,
})

sample({
    clock: pageMounted,
    target: ordersQuery.start,
})

sample({
    clock: statusChanged,
    fn: ({ orderId, isConfirmed }) => {
        const order = orders.find((order) => order.id === orderId)
        if (order) {
            order.status = isConfirmed ? 'Approved' : 'Rejected'
            if (isConfirmed) {
                order.orderStatus = 'Создан'
                order.orderTitle = 'Приказ №2 от 16.02.2022'
            }
        }
    },
    target: ordersQuery.start,
})

export const events = {
    pageMounted,
    statusChanged,
}

export const stores = {
    orders: ordersQuery.$data,
    loading: ordersQuery.$pending,
}

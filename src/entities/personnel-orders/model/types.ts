export const orderStatus = {
    InProgress: 'В процессе',
    Approved: 'Одобрено',
    Rejected: 'Отклонено',
    Unknown: 'Неизвестно',
}

export type Order = {
    id: string
    job: string
    workDay: string
    type: string
    status: keyof typeof orderStatus
    orderStatus: string
    orderTitle: string
}

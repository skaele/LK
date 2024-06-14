export const SalarySupplementConstants = {
    ready: 'Готово',
    completed: 'Выполнена',
    issued: 'Выдано',
    recieved: 'Получено',
    inProgress: 'В работе',
    pending: 'На рассмотрении',
    accepted: 'Принято в работу',
    rejected: 'Отклонено',
} as const

export type SalarySupplementStatusType = (typeof SalarySupplementConstants)[keyof typeof SalarySupplementConstants]

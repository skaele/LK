import { ALLOWANCE_INFO_CUT, DOCLIST_ALLOWANCES } from '@app/routes/teacher-routes'
import { AllowanceNotificationType } from './types'

export const approvalStatus = {
    Approved: 'Согласовано',
    InProgress: 'На рассмотрении',
    Declined: 'Отклонено',
    Unknown: 'Неизвестно',
} as const
export const selfApprovalStatus = {
    Rejected: 'Отказано',
    Confirmed: 'Подтверждено',
    Expired: 'Просрочено',
    Unknown: 'На рассмотрении',
} as const

export const allowanceStatus = {
    Completed: 'Приказ готов',
    PreparingOrder: 'Оформляется приказ',
    SelfConfirm: 'Ожидает подтверждения получателем',
    Approval: 'На согласовании',
    Initial: 'Заявка создана',
    Cancelled: 'Отменено',
    Unknown: 'Неизвестно',
} as const

export const orderStatus = {
    NotReady: 'Приказ не создан',
    InProgress: 'Приказ готовится',
    Ready: 'Приказ готов',
} as const

export const NotificationTitles: Record<AllowanceNotificationType, string> = {
    RecepientDeclinedByZkgu: 'Заявка отклонена в 1С',
    RecepientDeclinedByAppover: 'Заявка отклонена согласующим',
    RecepientSelfDeclined: 'Заявка отклонена сотрудником',
    RecepientSelfConfirmed: 'Заявка согласована сотрудником',
    FullyCompleted: 'Заявка полностью согласована',
    ToApprove: 'Появились новые заявки для согласования',
    ToConfirm: 'Рассмотрите заявку о надбавках',
    AllowanceOrderCompleted: 'Заявка полностью согласована',
} as const

export const NotificationLinks: Record<AllowanceNotificationType, string> = {
    RecepientDeclinedByZkgu: ALLOWANCE_INFO_CUT,
    RecepientDeclinedByAppover: ALLOWANCE_INFO_CUT,
    RecepientSelfDeclined: ALLOWANCE_INFO_CUT,
    RecepientSelfConfirmed: ALLOWANCE_INFO_CUT,
    FullyCompleted: ALLOWANCE_INFO_CUT,
    ToApprove: ALLOWANCE_INFO_CUT,
    ToConfirm: DOCLIST_ALLOWANCES,
    AllowanceOrderCompleted: DOCLIST_ALLOWANCES,
} as const

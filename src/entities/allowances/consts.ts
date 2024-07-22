import { ALLOWANCES_APPROVER, ALLOWANCES_INITIATOR, DOCLIST_ALLOWANCES } from '@app/routes/teacher-routes'
import { AllowanceNotificationType } from './types'

export const allowanceConstants = {
    Approved: 'Согласовано',
    Unknown: 'На рассмотрении',
    InProgress: 'На рассмотрении',
    Declined: 'Отклонено',
} as const

export const allownaceResponseConstants = ['Согласовано', 'Отклонено', 'На рассмотрении']

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
    RecepientDeclinedByZkgu: ALLOWANCES_INITIATOR,
    RecepientDeclinedByAppover: ALLOWANCES_INITIATOR,
    RecepientSelfDeclined: ALLOWANCES_INITIATOR,
    RecepientSelfConfirmed: ALLOWANCES_INITIATOR,
    FullyCompleted: ALLOWANCES_INITIATOR,
    ToApprove: ALLOWANCES_APPROVER,
    ToConfirm: DOCLIST_ALLOWANCES,
    AllowanceOrderCompleted: DOCLIST_ALLOWANCES,
} as const

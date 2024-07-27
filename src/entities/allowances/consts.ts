import { ALLOWANCE_INFO_CUT, DOCLIST_ALLOWANCES } from '@app/routes/teacher-routes'
import { AllowanceNotificationType } from './types'

export const allowanceConstants = {
    Approved: 'Согласовано',
    Unknown: 'На рассмотрении',
    InProgress: 'На рассмотрении',
    Declined: 'Отклонено',
} as const
export const selfApprovalStatus = {
    Rejected: 'Отказано',
    Confirmed: 'Подтверждено',
    Expired: 'Просрочено',
    Unknown: 'Неизвестно',
} as const
export type AllowancesApprovalStatus = keyof typeof allowanceConstants
export type AllowancesApprovalResponse = (typeof allowanceConstants)[keyof typeof allowanceConstants]
export type SelfApprovalStatus = keyof typeof selfApprovalStatus
export type SelfApprovalResponse = (typeof selfApprovalStatus)[keyof typeof selfApprovalStatus]

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

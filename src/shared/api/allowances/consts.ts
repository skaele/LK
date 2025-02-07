<<<<<<<< HEAD:src/shared/api/allowances/consts.ts
========
import { ALLOWANCE_INFO_CUT, DOCLIST_ALLOWANCES } from '@app/routes/teacher-routes'

>>>>>>>> master:src/entities/allowances/consts.ts
import { AllowanceNotificationType } from './types'

export const approvalStatus = {
    Approved: 'Согласовано',
    Expired: 'Просрочено',
    InProgress: 'На рассмотрении',
    Declined: 'Отклонено',
    Unknown: '-',
} as const

export const allowanceStatus = {
    Completed: 'Приказ готов',
    PreparingOrder: 'Оформляется приказ',
    RecepientConfirm: 'Ожидает подтверждения получателем',
    Approval: 'На согласовании',
    Cancelled: 'Отменено',
    Unknown: 'Неизвестно',
} as const

export const orderStatus = {
    InProgress: 'Приказ готовится',
    Ready: 'Приказ готов',
} as const

export const NotificationTitles: Record<AllowanceNotificationType, string> = {
    RecepientDeclinedByZkgu: 'Служебная записка отклонена в 1С',
    RecepientDeclinedByAppover: 'Служебная записка отклонена согласующим',
    RecepientSelfDeclined: 'Служебная записка отклонена сотрудником',
    RecepientSelfConfirmed: 'Служебная записка согласована сотрудником',
    FullyCompleted: 'Служебная записка полностью согласована',
    ToApprove: 'Появились новые служебные записки для согласования',
    ToConfirm: 'Рассмотрите служебные записки о надбавках',
    AllowanceOrderCompleted: 'Служебная записка полностью согласована',
} as const

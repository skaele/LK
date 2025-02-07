import { AllowanceNotificationType } from '@shared/api/allowances/types'
import { ALLOWANCE_INFO_CUT, DOCLIST_ALLOWANCES } from '@shared/routing'

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
